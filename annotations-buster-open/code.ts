// This plugin cleans all annotations on the current page
const saveHistory = async () => {
    // Save a backup point on the version history before the plugin runs
    await figma.saveVersionHistoryAsync("💾 Annotations backup");
};

const bustAnnotations = () => {
    const nodeArray = figma.currentPage.findAll(n => n.annotations !== undefined);

    console.log(nodeArray)

    Array.from(nodeArray).forEach(node => {
        if (node.annotations.length > 0) {
            node.annotations = [];
        }
    });

    figma.closePlugin("🚫👻 Annotations busted!");
}

// Call the async then run the main update function
saveHistory().then(() => bustAnnotations());
