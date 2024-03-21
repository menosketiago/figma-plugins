// This plugin will group everything on the page and set the group 
// to x=0 and y=0 (Figma canvas origin point and default zoom position).
const pageContent = figma.currentPage.children;

const group = figma.group(pageContent, figma.currentPage);

group.name = "Temporary group";
group.x = 0;
group.y = 0;

if (figma.currentPage.findChildren(n => n.name === "Temporary group")) {
    figma.ungroup(group);
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin("Your content is now on the Figma canvas origin (x=0 and y=0)!");
