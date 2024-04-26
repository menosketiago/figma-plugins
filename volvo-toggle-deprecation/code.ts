// This plugin toggles the visibility of the 📦 Deprecating layer on a page

const deprecatedComponentArray = figma.currentPage.findAll((n) =>
    n.name.includes("📦 Deprecating")
);

// FUNCTIONS

const hideDeprecation = () => {
    Array.from(deprecatedComponentArray).forEach((item) => {
        if (item.type === "INSTANCE") {
            item.visible = false;

            figma.closePlugin("Deprecation styles hidden 👻");
        }
    });
};

const showDeprecation = () => {
    Array.from(deprecatedComponentArray).forEach((item) => {
        if (item.type === "INSTANCE") {
            item.visible = true;

            figma.closePlugin("Deprecation styles shown 🎃");
        }
    });
};

// LISTEN TO COMMAND FROM FIGMA

if (figma.command === "hide") {
    hideDeprecation();
} 
else if (figma.command === "show") {
    showDeprecation();
}
