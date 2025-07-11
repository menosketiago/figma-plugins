// This plugin updates the name and values of 📦 Design Token Chips in Figma

// FIGMA PLUGIN HELPERS
// Adapted from https://github.com/figma-plugin-helper-functions/figma-plugin-helpers

const namesRGB = ["r", "g", "b"];

// This function converts figma color to RGB(A) (array)
function figmaRGBToWebRGB(color: { [x: string]: number } | undefined) {
    if (
        !color ||
        typeof color.r !== "number" ||
        typeof color.g !== "number" ||
        typeof color.b !== "number"
    ) {
        // Return black as fallback or throw an error
        return [0, 0, 0];
    }
    const rgb = [];
    namesRGB.forEach((e, i) => {
        rgb[i] = Math.round(color[e] * 255);
    });
    if (color["a"] !== undefined) rgb[3] = Math.round(color["a"] * 100) / 100;
    return rgb;
}

// This function converts figma color to HEX (string)
function figmaRGBToHex(color: any) {
    let hex = "#";

    const rgb = figmaRGBToWebRGB(color);

    hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
        .toString(16)
        .slice(1);

    if (rgb[3] !== undefined) {
        const a = Math.round(rgb[3] * 255).toString(16);

        if (a.length == 1) {
            hex += "0" + a;
        } else {
            if (a !== "ff") hex += a;
        }
    }

    return hex;
}

// TOKENS VIZ AUTOMATION

let localCollections: any[];

const asyncCalls = async () => {
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });

    localCollections = await figma.variables.getLocalVariablesAsync();
};

const setChipError = (chip) => {
    const newFill = [
        // @ts-ignore
        chip.fills[0],
        figma.util.solidPaint("#BF2012"),
    ];

    chip.fills = newFill;

    figma.notify(
        "Check the red chips for typos on the chip label or the Figma variable itself (i.e. wrong case type)",
        { error: true, timeout: 10000 }
    );
};

const updateTokens = () => {
    let chipArray = figma.currentPage.findAll(
        (n) => n.name === "📦 Figma / Design Token Chip"
    );

    Array.from(chipArray).forEach((chip) => {
        if (chip.type === "INSTANCE") {
            // Check if the token chip is a color token
            if (chip.variantProperties!.Type === "Color") {
                // Store the updatable component layers
                let colorStyleLayer = chip.findOne((n) => n.name === "Color");
                let colorNameLayer = chip.findOne((n) => n.name === "Label");
                let hexValueLayer = chip.findOne((n) => n.name === "Value");

                if (
                    colorStyleLayer &&
                    colorStyleLayer.type === "ELLIPSE" &&
                    colorNameLayer &&
                    colorNameLayer.type === "TEXT" &&
                    hexValueLayer &&
                    hexValueLayer.type === "TEXT"
                ) {
                    // Add guard for fills
                    // @ts-ignore
                    const fills = colorStyleLayer.fills;
                    if (
                        Array.isArray(fills) &&
                        fills.length > 0 &&
                        fills[0].type === "SOLID" &&
                        fills[0].color
                    ) {
                        // @ts-ignore
                        let figmaColorObject = fills[0];
                        let hexValue = figmaRGBToHex(
                            figmaColorObject.color
                        ).toUpperCase();
                        let rbgObject = figmaRGBToWebRGB(
                            figmaColorObject.color
                        );
                        let opacity = Math.round(
                            (figmaColorObject.opacity ?? 1) * 100
                        );

                        let variableId =
                            figmaColorObject.boundVariables?.color?.id;
                        let variableName = variableId
                            ? figma.variables.getVariableById(variableId)
                                  ?.name ?? ""
                            : "";

                        // Update the color name string on the component
                        colorNameLayer.characters = variableName;

                        // Update the HEX value layer string on the component
                        hexValueLayer.characters = `${hexValue} (${opacity}%)`;
                    } else {
                        setChipError(chip);
                    }
                }
            }

            // Check if the token chip is a opacity token
            if (chip.variantProperties!.Type === "Opacity") {
                // Store the updatable component layers
                let opacityStyleLayer = chip.findOne(
                    (n) => n.name === "Opacity"
                );
                let colorNameLayer = chip.findOne((n) => n.name === "Label");
                let hexValueLayer = chip.findOne((n) => n.name === "Value");

                if (
                    opacityStyleLayer &&
                    opacityStyleLayer.type === "ELLIPSE" &&
                    colorNameLayer &&
                    colorNameLayer.type === "TEXT" &&
                    hexValueLayer &&
                    hexValueLayer.type === "TEXT"
                ) {
                    // Get the opacity variable name if bound
                    // @ts-ignore
                    const opacityVarId =
                        opacityStyleLayer.boundVariables?.opacity?.id;
                    let opacityVarName = "";
                    if (opacityVarId) {
                        const opacityVar =
                            figma.variables.getVariableById(opacityVarId);
                        opacityVarName = opacityVar?.name ?? "";
                    }
                    colorNameLayer.characters = `Opacity/${opacityVarName}` || "N/A";
                }
            }

            // Check if the token is a radius, size, or type token
            if (
                chip.variantProperties!.Type === "Radius" ||
                chip.variantProperties!.Type === "Size" ||
                chip.variantProperties!.Type === "Type"
            ) {
                let tokenLabel = chip.findOne((n) => n.name === "Label");
                // @ts-ignore
                let tokenName = tokenLabel.characters;

                // Check if the token chip has an alias token
                if (Object.values(chip.componentProperties)[0].value) {
                    let tokenLabel = chip.findOne((n) => n.name === "Label");
                    let aliasLabel = chip.findOne(
                        (n) => n.name === "Alias label"
                    );

                    if (
                        tokenLabel &&
                        tokenLabel.type === "TEXT" &&
                        aliasLabel &&
                        aliasLabel.type === "TEXT"
                    ) {
                        // Find the collection name first word and remove it
                        let variableName = tokenName.replace(
                            /^([\w\-]+)\//g,
                            ""
                        );

                        // Find the variable in the collection
                        // @ts-ignore
                        let matchingVariable = localCollections.find(
                            (n) => n.name === variableName
                        );

                        // Check if the token chip and variable names match
                        // If they don't make the outline of the token red
                        if (matchingVariable) {
                            // @ts-ignore
                            let aliasID = Object.values(
                                matchingVariable.valuesByMode
                            )[0].id;
                            let aliasVariable =
                                figma.variables.getVariableById(aliasID);

                            if (aliasVariable) {
                                let aliasVariableName = aliasVariable.name;

                                let aliasCollectionID =
                                    aliasVariable.variableCollectionId;
                                let aliasCollection =
                                    figma.variables.getVariableCollectionById(
                                        aliasCollectionID
                                    );

                                if (aliasCollection) {
                                    let aliasCollectionName =
                                        aliasCollection.name;

                                    // Set the Alias label string
                                    aliasLabel.characters = `${aliasCollectionName}/${aliasVariableName}`;
                                }
                            }
                        } else {
                            setChipError(chip);
                        }
                    }
                }

                // Check if the chip has a value to update
                if (
                    Object.values(chip.componentProperties)[1] &&
                    Object.values(chip.componentProperties)[1].value
                ) {
                    let valueLabel = chip.findOne((n) => n.name === "Value");

                    // Find the collection name (first word) and remove it
                    let variableName = tokenName.replace(/^([\w\-]+)\//g, "");

                    // Find the variable in the collection
                    let matchingVariable = localCollections.find(
                        (n) => n.name === variableName
                    );

                    // Check if the token chip and variable names match
                    // If they don't make the outline of the token red
                    if (matchingVariable) {
                        // @ts-ignore
                        let variableValue = Object.values(
                            matchingVariable.valuesByMode
                        )[0].toString();

                        // Set the value
                        // @ts-ignore
                        valueLabel.characters = variableValue;
                    } else {
                        setChipError(chip);
                    }
                }

                // Check if the chip has a Type value to update
                if (
                    Object.values(chip.componentProperties)[5] &&
                    Object.values(chip.componentProperties)[5].value
                ) {
                    let valueLabel = chip.findOne((n) => n.name === "Value");

                    // Find the collection name (first word) and remove it
                    let variableName = tokenName.replace(/^([\w\-]+)\//g, "");

                    // Find the variable in the collection
                    let matchingVariable = localCollections.find(
                        (n) => n.name === variableName
                    );

                    // Check if the token chip and variable names match
                    // If they don't make the outline of the token red
                    if (matchingVariable) {
                        // @ts-ignore
                        let variableValue = Object.values(
                            matchingVariable.valuesByMode
                        )[0].toString();

                        // Set the value
                        // @ts-ignore
                        valueLabel.characters = variableValue;
                    } else {
                        setChipError(chip);
                    }
                }
            }
        }
    });

    // After the loop is done close the plugin
    figma.closePlugin("Design Token names and values updated!");
};

// Note: Global unhandled promise rejection handlers are not supported in the Figma plugin environment.

(async () => {
    try {
        await asyncCalls();
        updateTokens();
    } catch (error) {
        figma.notify(`Plugin error: ${error}`, { error: true, timeout: 10000 });
        figma.closePlugin(`Plugin error: ${error}`);
    }
})();
