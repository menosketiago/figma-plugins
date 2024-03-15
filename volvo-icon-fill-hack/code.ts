// This  plugin finds all icon components on the page
// adds the Icon library instance to a group and renames that group
const iconComponents = figma.currentPage.findAllWithCriteria({ types: ["COMPONENT"] })

Array.from(iconComponents).forEach(component => {
    // Check if the component has a layer called "Shape"
    if (component.findChildren(n => n.name === "Shape")) {
        
    }
    else {
        console.log(`$${component.name} does not have a Shape layer`)
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();