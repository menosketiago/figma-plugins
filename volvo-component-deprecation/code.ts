// This plugin will deprecate all components within the current page

figma.showUI(__html__);

// Enable Figma color tokens
figma.showUI(__html__, { themeColors: true /* other options */ });

// Resize the UI modal
figma.ui.resize(360, 420);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
    const deprecationComponent = figma.currentPage.findOne(n => n.name === "📦 Deprecating");

    const componentArray = figma.currentPage.findAllWithCriteria({
        types: ["COMPONENT"],
    });

    function addDeprecationLayers() {
        Array.from(componentArray).forEach((component) => {
            // Check if the component is not a base component 
            // and if there isn't already a deprecating layer on the component
            if (
                !component.parent.name.includes("_") &&
                !component.findChild(n => n.name === "📦 Deprecating")
            ) {
                const deprecationClone = deprecationComponent?.clone()

                if (deprecationClone) {
                    // Add the clone deprecation component to the component node layers
                    component.appendChild(deprecationClone);
                }

                const deprecationLayer = component.findChild(n => n.name === "📦 Deprecating");
        
                if (deprecationLayer) {
                    // Check if the component has autolayout and add absolute positioning
                    if (component.layoutMode !== "NONE") {
                        deprecationLayer.layoutPositioning = "ABSOLUTE";
                    }
                
                        deprecationLayer.x = 0;
                        deprecationLayer.y = 0;
                    
                        deprecationLayer.resize(component.width, component.height);
                    
                        deprecationLayer.constraints = { horizontal: "SCALE", vertical: "SCALE" }
                    }
                }
        });
    }

    function renameDeprecatingComponents() {
        Array.from(componentArray).forEach((component) => {
            if (component.parent) {
                if (
                    component.parent.type === "COMPONENT_SET" &&
                    component.findChild(n => n.name === "📦 Deprecating")
                ) {
                    const originalName = component.parent.name;
    
                    if (!originalName.includes("[DEPRECATING]")) {
                        component.parent.name = `[DEPRECATING] ${originalName}`;
                    }
                } else {
                    const originalName = component.name;
    
                    if (!originalName.includes("[DEPRECATING]")) {
                        component.name = `[DEPRECATING] ${originalName}`;
                    }
                }
            }
        });
    }

    if (deprecationComponent && componentArray.length > 0) {
        addDeprecationLayers();
        renameDeprecatingComponents();
    }
    
    if (!deprecationComponent) {
        figma.notify("I think you forgot to add 📦 Deprecating component instance to the current page", {
            timeout: 10000, 
            error: true
        });
    }

    // Not closing the plugin to avoid having to run it again on other pages
    // figma.closePlugin();
};
