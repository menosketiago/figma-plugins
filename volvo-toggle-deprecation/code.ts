// This plugin toggles the visibility of the 📦 Deprecating layer on a page

const deprecatedComponentArray = figma.currentPage.findAll(n => n.name.includes("📦 Deprecating"));

Array.from(deprecatedComponentArray).forEach((item) => {
    if (item.type === "INSTANCE") {
        item.visible = !item.visible;
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
