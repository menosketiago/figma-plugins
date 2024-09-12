// This plugin toggles the visibility of the 📦 Deprecating layer on a page

const deprecatedComponentArray = figma.currentPage.findAll((n) =>
    n.name.includes("📦 Deprecating")
);

// FUNCTIONS

const hideDeprecation = () => {
    if (deprecatedComponentArray.length >= 1) {
        Array.from(deprecatedComponentArray).forEach((item) => {
            item.visible = false;
    
            figma.closePlugin("Deprecation styles hidden 👻");
        });
    }
    else {
        figma.closePlugin();
        figma.notify("Can't find deprecations styles on the page", {
            error: true,
            timeout: 10000,
        });
    }
};

const showDeprecation = () => {
    if (deprecatedComponentArray.length >= 1) {
        Array.from(deprecatedComponentArray).forEach((item) => {
            item.visible = true;
    
            figma.closePlugin("Deprecation styles shown 🎃");
        });
    }
    else {
        figma.closePlugin();
        figma.notify("Can't find deprecations styles on the page", {
            error: true,
            timeout: 10000,
        });
    }
};

// LISTEN TO COMMAND FROM FIGMA

if (figma.command === "hide") {
    hideDeprecation();
} 
else if (figma.command === "show") {
    showDeprecation();
}
