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
    const deprecationComponent = figma.currentPage.findOne(
        (n) => n.name === "📦 Deprecating"
    );

    const componentArray = figma.currentPage.findAllWithCriteria({
        types: ["COMPONENT"],
    });

    function addDeprecationLayers() {
        Array.from(componentArray).forEach((component) => {
            // Check if there isn't already a deprecating layer on the component
            if (!component.findChild((n) => n.name === "📦 Deprecating")) {
                const deprecationClone = deprecationComponent.clone();

                // Add the clone deprecation component to the component node layers
                component.appendChild(deprecationClone);

                const deprececationLayer = component.findChild(
                    (n) => n.name === "📦 Deprecating"
                );

                if (component.layoutMode !== "NONE") {
                    deprececationLayer.layoutPositioning = "ABSOLUTE";
                }

                deprececationLayer.x = 0;
                deprececationLayer.y = 0;

                deprececationLayer.resize(component.width, component.height);

                deprececationLayer.constraints = {
                    horizontal: "SCALE",
                    vertical: "SCALE",
                };
            }
        });
    }

    function renameDeprecatingComponents() {
        Array.from(componentArray).forEach((component) => {
            if (
                component.parent.type === "COMPONENT_SET" &&
                component.findChild((n) => n.name === "📦 Deprecating")
            ) {
                const originalName = component.parent.name;

                if (!originalName.includes("[DEPRECATING]")) {
                    component.parent.name = `[DEPRECATING] ${originalName}`;
                }
            } else if (
                component.parent.type !== "COMPONENT_SET" ||
                component.parent.type !== "FRAME" ||
                component.parent.type !== "PAGE"
            ) {
                const originalName = component.name;

                if (!originalName.includes("[DEPRECATING]")) {
                    component.name = `[DEPRECATING] ${originalName}`;
                }
            }
        });
    }

    if (deprecationComponent && componentArray.length > 0) {
        addDeprecationLayers();
        renameDeprecatingComponents();
    }

    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
