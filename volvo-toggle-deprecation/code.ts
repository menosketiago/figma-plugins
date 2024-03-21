// This plugin toggles the visibility of the 📦 Deprecating layer on a page

const deprecatedComponentArray = figma.currentPage.findAll(n =>n.name.includes("[DEPRECATING]"));

Array.from(deprecatedComponentArray).forEach((component) => {
    if (component.type === "INSTANCE") {
        const deprecationLayer = component.findChild(n => n.name === "📦 Deprecating");

        if (deprecationLayer) {
            deprecationLayer.visible = !deprecationLayer.visible;
        }
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
