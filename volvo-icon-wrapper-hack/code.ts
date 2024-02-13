// This  plugin finds all icon components on the page
// adds the Icon library instance to a group and renames that group
const iconComponentsArray = figma.currentPage.findAllWithCriteria({ types: ["COMPONENT"] })

Array.from(iconComponentsArray).forEach(iconComponent => {
    // Check if the component has a layer called "Shape"
    if (iconComponent.findChildren(n => n.name === "Shape")) {
        // Only group and rename if the first layer is not the Wrapper hack or a group
        if (
            iconComponent.children[0].name !== "Wrapper (hack to retain fill)" &&
            iconComponent.children[0].name !== "Group"
        ) {
            figma.group(iconComponent.children, iconComponent);

            if (iconComponent.children[0].name === "Group") {
                iconComponent.children[0].name = "Wrapper (hack to retain fill)";
            }
        }
    }
    else {
         figma.notify("No icon component with a Shape layer found", {error: true});
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();