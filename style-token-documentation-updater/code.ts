// This plugin updates the color and type token documentation components available 
// for free in the Figma Community at https://www.figma.com/community/file/1233490043546742002/style-token-documentation-components

/// <reference path="./node_modules/@figma/plugin-typings/index.d.ts" />

// FIGMA PLUGIN HELPERS
// Adapted from https://github.com/figma-plugin-helper-functions/figma-plugin-helpers

const namesRGB: string[] = ['r', 'g', 'b'];

// This function converts figma color to RGB(A) (array)
function figmaRGBToWebRGB(color: RGBA): number[] {
    const rgb: number[] = [];

    namesRGB.forEach((e: string, i: number) => {
        rgb[i] = Math.round(color[e as keyof RGBA] * 255);
    });

    if (color.a !== undefined) rgb[3] = Math.round(color.a * 100) / 100;

    return rgb;
}

// This function converts figma color to HEX (string)
function figmaRGBToHex(color: RGBA): string {
    let hex: string = '#';

    const rgb: number[] = figmaRGBToWebRGB(color);

    hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

    if (rgb[3] !== undefined) {
        const a: string = Math.round(rgb[3] * 255).toString(16);

        if (a.length === 1) {
            hex += '0' + a;
        }
        else {
            if (a !== 'ff') hex += a;
        }
    }

    return hex;
};

(async () => {
    try {
        let colorChipArray: SceneNode[] = figma.currentPage.findAll(n => n.name === "📦 ColorChip");

        for (const colorChip of colorChipArray) {
            // Store the updateable component layers
            let colorStyleLayer: SceneNode | null = (colorChip as FrameNode).findOne((n: SceneNode) => n.name === "color-style");
            let colorNameLayer: SceneNode | null = (colorChip as FrameNode).findOne((n: SceneNode) => n.name === "name");
            let hexNode: SceneNode | null = (colorChip as FrameNode).findOne((n: SceneNode) => n.name === "hex");
            let hexValueLayer: SceneNode | null = hexNode ? (hexNode as FrameNode).findOne((n: SceneNode) => n.name === "value") : null;
            let rgbNode: SceneNode | null = (colorChip as FrameNode).findOne((n: SceneNode) => n.name === "rgb");
            let rgbValueLayer: SceneNode | null = rgbNode ? (rgbNode as FrameNode).findOne((n: SceneNode) => n.name === "value") : null;

            if (!colorStyleLayer || !colorNameLayer || !hexValueLayer || !rgbValueLayer) continue;

            // Reusable variables
            let figmaColorObject: RGBA = (colorStyleLayer as any).fills[0].color;
            let hexValue: string = figmaRGBToHex(figmaColorObject);
            let rbgObject: number[] = figmaRGBToWebRGB(figmaColorObject);
            let opacity: number = Math.round((colorStyleLayer as any).fills[0].opacity * 100) / 100;

            let boundVariables: any = (colorStyleLayer as any).fills[0].boundVariables ? (colorStyleLayer as any).fills[0].boundVariables.color : undefined;

            // Check if the token is a variable or a style
            if (boundVariables !== undefined) {
                let variableId: string = boundVariables.id;
                let variable = figma.variables.getVariableById(variableId);
                if (!variable) continue;
                let variableName: string = variable.name;

                // Update the color name string on the component
                await figma.loadFontAsync((colorNameLayer as any).fontName);
                (colorNameLayer as any).characters = variableName;

                // Update the HEX value layer string on the component
                await figma.loadFontAsync((hexValueLayer as any).fontName);
                (hexValueLayer as any).characters = hexValue;

                // Update the RBG value layer string on the component
                await figma.loadFontAsync((rgbValueLayer as any).fontName);
                (rgbValueLayer as any).characters = `${rbgObject[0]}, ${rbgObject[1]}, ${rbgObject[2]}, ${opacity}`;
            }
            else {
                let colorStyleId: string = (colorStyleLayer as any).fillStyleId;
                let colorStyle = await figma.getStyleByIdAsync(colorStyleId);
                if (!colorStyle) continue;
                let colorStyleName: string = colorStyle.name;

                // Update the color name string on the component
                await figma.loadFontAsync((colorNameLayer as any).fontName);
                (colorNameLayer as any).characters = colorStyleName;

                // Update the HEX value layer string on the component
                await figma.loadFontAsync((hexValueLayer as any).fontName);
                (hexValueLayer as any).characters = hexValue;

                // Update the RBG value layer string on the component
                await figma.loadFontAsync((rgbValueLayer as any).fontName);
                (rgbValueLayer as any).characters = `${rbgObject[0]}, ${rbgObject[1]}, ${rbgObject[2]}, ${opacity}`;
            }
        }

        // TYPE CHIP AUTOMATION

        let typeChipArray: SceneNode[] = figma.currentPage.findAll(n => n.name === "📦 TypeChip");

        for (const typeChip of typeChipArray) {
            // Store the updateable component layers
            let typeStyleLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "style-sampler");
            let typeNameLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "style-name");
            let typeFamilyLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "font-name");
            let typeSizeLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "font-size");
            let typeLineHeightLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "line-height");
            let typeLetterSpacingLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "letter-spacing");
            let typeDescriptionLayer: SceneNode | null = (typeChip as FrameNode).findOne((n: SceneNode) => n.name === "description");

            if (!typeStyleLayer || !typeNameLayer || !typeFamilyLayer || !typeSizeLayer || !typeLineHeightLayer || !typeLetterSpacingLayer) continue;

            let typeStyleId: string = (typeStyleLayer as any).textStyleId;
            let typeStyle = await figma.getStyleByIdAsync(typeStyleId) as TextStyle;

            if (!typeStyle) continue;

            let typeStyleName: string = typeStyle.name;
            let typeFamily: string = `${typeStyle.fontName.family} ${typeStyle.fontName.style}`;
            let typeSize: number = typeStyle.fontSize;
            let typeLineHeight: number = typeStyle.lineHeight.unit === 'PERCENT' ? Math.round((typeStyle.lineHeight as any).value * 100) / 100 : 0;
            let typeLetterSpacing: number = typeStyle.letterSpacing.value;
            let typeDescription: string | undefined = typeStyle.description;

            // Update the type style name string on the component
            await figma.loadFontAsync((typeNameLayer as any).fontName);
            (typeNameLayer as any).characters = typeStyleName;

            // Update the font family and weight string on the component
            await figma.loadFontAsync((typeFamilyLayer as any).fontName);
            (typeFamilyLayer as any).characters = typeFamily;

            // Update the font size string on the component
            await figma.loadFontAsync((typeSizeLayer as any).fontName);
            (typeSizeLayer as any).characters = `${typeSize}px`;

            // Update the line height string on the component
            await figma.loadFontAsync((typeLineHeightLayer as any).fontName);
            (typeLineHeightLayer as any).characters = `${typeLineHeight}%`;

            // Update the letter spacing string on the component
            await figma.loadFontAsync((typeLetterSpacingLayer as any).fontName);
            (typeLetterSpacingLayer as any).characters = `${typeLetterSpacing}%`;

            // Update the description string on the component if there is a description
            if (typeDescription && typeDescriptionLayer) {
                await figma.loadFontAsync((typeDescriptionLayer as any).fontName);
                (typeDescriptionLayer as any).characters = typeDescription;
            }
        }

        // Update run count and determine notification message
        let runCountValue = await figma.clientStorage.getAsync("styleTokenUpdaterRunCount");

        let runCount = Number(runCountValue);
        if (isNaN(runCount) || runCount < 0) {
            runCount = 0;
        }

        // Increment the run count
        runCount += 1;

        const defaultMessage = "Style token documentation updated successfully 🙌";
        const isCoffeeRun = runCount % 2 === 0;
        const hideCoffee = await figma.clientStorage.getAsync("styleTokenUpdaterHideCoffee");
        const coffeeMessage = `I saved you from manual updates ${runCount} times! Why not buy me a thank you coffee via https://buymeacoffee.com/menosketiago? 🤓`;

        await figma.clientStorage.setAsync("styleTokenUpdaterRunCount", runCount);

        if (isCoffeeRun && !hideCoffee) {
            let dismissed = false;
            figma.notify(coffeeMessage, {
                timeout: 10000,
                button: {
                    text: "Don't show again",
                    action: () => {
                        dismissed = true;
                        figma.clientStorage.setAsync("styleTokenUpdaterHideCoffee", true);
                        figma.closePlugin();
                    }
                }
            });

            setTimeout(() => {
                if (!dismissed) {
                    figma.closePlugin();
                }
            }, 10100);
        } 
        else {
            figma.notify(defaultMessage);
            figma.closePlugin();
        }
    } 
    catch (error) {
        figma.notify("Error updating style token documentation: " + (error instanceof Error ? error.message : String(error)));
        figma.closePlugin();
    }
})();