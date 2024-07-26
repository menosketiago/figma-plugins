// This plugin that sets deprecation styles on all components on the current page or the current selection

const selection = figma.currentPage.selection;
let deprecationArray: any;
let deprecationNode: any;

const createImage = async () => {
    figma
        .createImageAsync(
            "https://menosketiago.com/test/deprecation-pattern.png"
        )
        .then(async (image: Image) => {
            // Create node
            const node = figma.createRectangle();

            // Rename the node
            node.name = "📦 Deprecating";

            // Resize the node to match the image's width and height
            const { width, height } = await image.getSizeAsync();
            node.resize(width, height);

            // Set the fill on the node
            node.fills = [
                {
                    type: "IMAGE",
                    imageHash: image.hash,
                    scaleMode: "TILE",
                    scalingFactor: 0.5,
                },
            ];

            // Store the new node outside the function
            deprecationNode = node;

            // Run the deprecation function
            deprecateComponents();
        })
        .catch((error: any) => {
            console.log(error);
        });
};

const deprecateComponents = () => {
    Array.from(deprecationArray).forEach((component: any) => {
        // Check if the component is not a base component
        // and if there isn't already a deprecating layer on the component
        if (
            !component.parent.name.includes("→") &&
            !component.findChild(
                (n: { name: string }) => n.name === "📦 Deprecating"
            )
        ) {
            const deprecationClone = deprecationNode.clone();

            if (deprecationClone) {
                // Add the clone deprecation component to the component node layers
                component.appendChild(deprecationClone);
            }

            let deprecationLayer = component.findChild(
                (n) => n.name === "📦 Deprecating"
            );

            if (deprecationLayer) {
                // Check if the component has autolayout and add absolute positioning
                if (component.layoutMode !== "NONE") {
                    deprecationLayer.layoutPositioning = "ABSOLUTE";
                }

                deprecationLayer.x = 0;
                deprecationLayer.y = 0;

                deprecationLayer.resize(component.width, component.height);

                deprecationLayer.constraints = {
                    horizontal: "SCALE",
                    vertical: "SCALE",
                };

                deprecationLayer.locked = true;
            }
        }

        // RENAME THE COMPONENT
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
    
    // Delete the deprecation node
    deprecationNode.remove();

    // After the work is done close the plugin
    figma.closePlugin("Components deprecated 🎉");
};

// Listen to command from the figma plugin menu

if (figma.command === "page") {
    // Push all components on the page to the deprecation array
    deprecationArray = figma.currentPage.findAllWithCriteria({
        types: ["COMPONENT"],
    });

    if (deprecationArray.length >= 1) {
        createImage();
    } else {
        figma.closePlugin();
        figma.notify("Is there a component on the page?", {
            error: true,
            timeout: 10000,
        });
    }
} 

if (figma.command === "selection") {
    // Push only components inside the selection to the deprecation array
    if (selection.length >= 1) {
        if (selection[0].type) {
            deprecationArray = selection;
        } else {
            deprecationArray = selection.findAllWithCriteria({
                types: ["COMPONENT"],
            });
        }

        createImage();
    } else {
        figma.closePlugin();
        figma.notify("You forgot to select something 😅", {
            error: true,
            timeout: 10000,
        });
    }
}