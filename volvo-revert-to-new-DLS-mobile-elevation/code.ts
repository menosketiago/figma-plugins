// This plugin reverts all components with a background to the new DLS mobile 
// elevation colors (only works with the new Figma Mobile Design System library)

// Old variables
const oldBackgroundPrimaryID = "VariableID:43979:6933"
const oldElevationLowID = "VariableID:43979:6939";
const oldElevationMidID = "VariableID:43979:6938"; 
const oldElevationHighID = "VariableID:43979:6937";

// New variables
const newBackgroundPrimaryID = "VariableID:35731:19623";
const newElevationBaseID = "VariableID:42358:160";
const newElevationHighlightID = "VariableID:42358:161";
const newElevationRaiseID = "VariableID:42358:162";
const newElevationOverlayID = "VariableID:42358:163";

// Variables object storage
let newBackgroundPrimary: Variable | null, newElevationBase: Variable | null, newElevationHighlight: Variable | null, newElevationRaise: Variable | null, newElevationOverlay: Variable | null;

const asyncCalls = async () => {
    newBackgroundPrimary = await figma.variables.getVariableByIdAsync(newBackgroundPrimaryID);
    newElevationBase = await figma.variables.getVariableByIdAsync(newElevationBaseID);
    newElevationHighlight = await figma.variables.getVariableByIdAsync(newElevationHighlightID);
    newElevationRaise = await figma.variables.getVariableByIdAsync(newElevationRaiseID);
    newElevationOverlay = await figma.variables.getVariableByIdAsync(newElevationOverlayID);
};

const updateVariables = () => {
    // BOTTOM NAVIGATION
    let bottomNavArray = figma.currentPage.findAll(n => n.name === "⚡️ Bottom navigation");

    Array.from(bottomNavArray).forEach(item => {
        let boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationHighID) {
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newElevationRaise);
            item.fills = fillsCopy
        }
    });

    // DIALOG
    let dialogWrapperArray = figma.currentPage.findAll(n => n.name === "Dialog wrapper");

    Array.from(dialogWrapperArray).forEach(item => {
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationHighID) { 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newElevationOverlay);
            item.fills = fillsCopy
        }
    });

    // INFORMATION BOX
    let informationBoxArray = figma.currentPage.findAll(n => n.name === "⚡️ Information box");

    Array.from(informationBoxArray).forEach(item => {
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationLowID) { 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newBackgroundPrimary);
            item.fills = fillsCopy
        }
    });

    // INFORMATION CARD
    let informationCardArray = figma.currentPage.findAll(n => n.name === "⚡️ Information card");

    Array.from(informationCardArray).forEach(item => {
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationLowID) { 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newBackgroundPrimary);
            item.fills = fillsCopy
        }
    });

    // INSIGHT CARD
    let insightCardArray = figma.currentPage.findAll(n => n.name === "⚡️ Insight card");

    Array.from(insightCardArray).forEach(item => {
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationLowID) { 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newBackgroundPrimary);
            item.fills = fillsCopy
        }
    });

    // LIST CARD
    let listCardArray = figma.currentPage.findAll(n => n.name === "⚡️ List card");

    Array.from(listCardArray).forEach(item => {
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === oldElevationHighID) { 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newElevationHighlight);
            item.fills = fillsCopy
        }
    }); 

    // NAVIGATION BAR
    let navigationBarArray = figma.currentPage.findAll(n => n.name === "⚡️ Navigation bar");

    Array.from(navigationBarArray).forEach(item => {
        if (item.variantProperties.Background === "True") {
            
            const boundVariableID = item.fills[0].boundVariables.color.id;

            // Check if it has the new elevation
            if (boundVariableID === oldBackgroundPrimaryID) { 
                const fillsCopy = [...(item.fills)];
                
                fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newElevationRaise);
                item.fills = fillsCopy
            }
        }
    });

    // SEARCH
    let searchArray = figma.currentPage.findAll(n => n.name === "⚡️ Search");

    Array.from(searchArray).forEach(item => {
        // Check if it is the background variant
        if (item.variantProperties.Background === "True") {
            const boundVariableID = item.fills[0].boundVariables.color.id;

            // Check if it has the new elevation
            if (boundVariableID === oldElevationLowID) { 
                const fillsCopy = [...(item.fills)];
                
                fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', newElevationBase);
                item.fills = fillsCopy
            }
        }
    });

    // After the loop is done close the plugin
    figma.closePlugin("Elevation was successfully changed!");
};

asyncCalls().then(() => updateVariables());
