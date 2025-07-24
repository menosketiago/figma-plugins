// This plugins updates color docs on the Volvo Cars Mobile Design System

// FIGMA PLUGIN HELPERS
// Adapted from https://github.com/figma-plugin-helper-functions/figma-plugin-helpers

const namesRGB = ['r', 'g', 'b']

// This function converts figma color to RGB(A) (array)
function figmaRGBToWebRGB(color) {
	const rgb = [];

	namesRGB.forEach((e, i) => {
		rgb[i] = Math.round(color[e] * 255);
	})

	if (color['a'] !== undefined) rgb[3] = Math.round(color['a'] * 100) / 100;
    
	return rgb;
}

// This function converts figma color to HEX (string)
function figmaRGBToHex(color) {
	let hex = '#';

	const rgb = figmaRGBToWebRGB(color);
    
	hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

	if (rgb[3] !== undefined) {
		const a = Math.round(rgb[3] * 255).toString(16);
        
		if (a.length == 1) {
			hex += '0' + a;
		} 
        else {
			if (a !== 'ff') hex += a;
		}
	}
    
	return hex;
};

const asyncCalls = async () => {
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });
        
    await figma.loadFontAsync({ family: "Volvo Centum", style: "Light" });
    await figma.loadFontAsync({ family: "Volvo Centum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Centum", style: "SemiBold" });
};

let listItemArray = figma.currentPage.findAll(n => n.name === "📦 Figma / Structured List");

const updateColorDocs = () => {
    Array.from(listItemArray).forEach(item => {
        // Check if the item is a color list
        if (item.variantProperties.Type === "Color Styles") {
            // Store the updateable component layers
            let colorStyleLayer = item.findOne(n => n.name === "Color");
            let colorNameLayer = item.findOne(n => n.name === "Style Name");
            let hexValueLayer = item.findOne(n => n.name === "HEX");
    
            // Reusable variables
            let figmaColorObject = colorStyleLayer.fills[0].color;
            let hexValue = figmaRGBToHex(figmaColorObject).toUpperCase();
            let rbgObject = figmaRGBToWebRGB(figmaColorObject);
            let opacity = Math.round(colorStyleLayer.fills[0].opacity * 100);
    
            let variableId = colorStyleLayer.fills[0].boundVariables.color.id;
            
            let variableName = figma.variables.getVariableById(variableId).name;
        
            // Update the color name string on the component
            colorNameLayer.characters = variableName;
            
            // Update the HEX value layer string on the component
            hexValueLayer.characters = `${hexValue} (${opacity}%)`;
        }
    });

    // After the loop is done close the plugin
    figma.closePlugin("Color docs updated 🎉");
};

asyncCalls().then(() => updateColorDocs());
