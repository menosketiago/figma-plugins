// This plugins updates text styles docs on the Volvo Cars Mobile Design System

let textStyleItemArrary = figma.currentPage.findAll(n => n.name === "📦 Figma / Structured List");

const asyncCalls = async () => {
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });
    await figma.loadFontAsync({ family: "Volvo Centum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Centum", style: "Medium" });
    await figma.loadFontAsync({ family: "Volvo Centum", style: "SemiBold" });
};

const updateTextDocs = () => {
    Array.from(textStyleItemArrary).forEach(item => { 
        if(item.type === "INSTANCE") {
            if (item.variantProperties && item.variantProperties.Type === "Text Styles") {
                // Store the updatable component layers
                let styleLayer = item.findOne(n => n.name === "Category");
                let nameLayer = item.findOne(n => n.name === "Style Name");
                let familyLayer = item.findOne(n => n.name === "Typeface");
                let weightLayer = item.findOne(n => n.name === "Weight");
                let sizeLayer = item.findOne(n => n.name === "Size");
                let lineHeightLayer = item.findOne(n => n.name === "Line Height");
                let letterSpacingLayer = item.findOne(n => n.name === "Letter Spacing");
                
                let styleId = styleLayer.textStyleId;
                let style = figma.getStyleById(styleId);
                
                if (style) {
                    let styleName = style.name;
                    let family = style.fontName.family;
                    let weight = style.fontName.style;
                    let size = style.fontSize;
                    let lineHeight = Math.round(style.lineHeight.value * 100) / 100;
                    let letterSpacing = style.letterSpacing.value;
                    let description = style.description;
                    
                    // Update the layer text content
                    nameLayer.characters = styleName.replace(/^([\w\-]+)\/([\w\-]+)\//g, "");
                    familyLayer.characters = family;
                    weightLayer.characters = weight;
                    sizeLayer.characters = `${size}px`;
                    lineHeightLayer.characters = `${lineHeight}%`;
                    letterSpacingLayer.characters = `${letterSpacing}%`;
                }
            }
        }
    });

    // After the loop is done close the plugin
    figma.closePlugin("Text styles docs updated 🎉");
};

asyncCalls().then(() => updateTextDocs());
