// This plugin updates the name and values of 📦 Design Token Chips in Figma

// FIGMA PLUGIN HELPERS
// Adapted from https://github.com/figma-plugin-helper-functions/figma-plugin-helpers

const namesRGB = ["r", "g", "b"];

// This function converts figma color to RGB(A) (array)
function figmaRGBToWebRGB(color: { [x: string]: number }) {
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

const loadFonts = async () => {
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });
};

loadFonts().then(() => updateTokens());

const updateTokens = () => {
    let chipArray = figma.currentPage.findAll(
        (n) => n.name === "📦 Design token chip"
    );

    Array.from(chipArray).forEach(async (chip) => {
        // Check if the item is a color token
        // @ts-ignore
        if (chip.variantProperties.Type === "Color") {
            // Store the updateable component layers
            // @ts-ignore
            let colorStyleLayer = chip.findOne(
                (n: { name: string }) => n.name === "Color"
            );
            // @ts-ignore
            let colorNameLayer = chip.findOne(
                (n: { name: string }) => n.name === "Label"
            );
            // @ts-ignore
            let hexValueLayer = chip.findOne(
                (n: { name: string }) => n.name === "Value"
            );

            // Reusable variables
            let figmaColorObject = colorStyleLayer.fills[0].color;
            let hexValue = figmaRGBToHex(figmaColorObject).toUpperCase();
            let rbgObject = figmaRGBToWebRGB(figmaColorObject);
            let opacity = Math.round(colorStyleLayer.fills[0].opacity * 100);

            let variableId = colorStyleLayer.fills[0].boundVariables.color.id;

            let variableName = figma.variables.getVariableById(variableId).name;

            // Update the color name string on the component
            colorNameLayer.characters = `Colors/${variableName}`;

            // Update the HEX value layer string on the component
            hexValueLayer.characters = `${hexValue} (${opacity}%)`;
        }
    });

    figma.closePlugin("Design Token names and values updated!");
};
