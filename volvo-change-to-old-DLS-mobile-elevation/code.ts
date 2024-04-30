// This plugin changes all components with a background to the old DLS mobile 
// elevation colors (only works with the new Figma Mobile Design System library)

// Old variables
const oldBackgroundPrimaryID = "VariableID:8a0c42d7979cbdd51173d37ba9c2d3437ba389f9/43979:37"
const oldElevationLowID = "VariableID:67e968a46b531731492a167c1b982d436bdc6a8c/43979:38";
const oldElevationMidID = "VariableID:e8c4ba7e1d94aea04fa9625ed7ef61d8e53e15c1/43979:39"; 
const oldElevationHighID = "VariableID:979b9477c65b3f81c598d7770b7c3f1bde58ba89/43979:40";

// New variables
const newBackgroundInformationID = "VariableID:5e117a6afc2082f87225e3767f0676f087c2ab7c/44100:0";
const newElevationBaseID = "VariableID:75e6c17b879796c47ccb3176f7871968e657f7fb/43079:8";
const newElevationHighlightID = "VariableID:89d77124befc3e197e2a24a6dba26ffe14205e57/43079:9";
const newElevationRaiseID = "VariableID:e6b4968ec7a87a31af8a55a32117fbf1807dbb65/43079:11";
const newElevationOverlayID = "VariableID:2a5fb6e8cf88308abc8900e5ac7570585120ce58/43079:14";

// Variables object storage
let oldBackgroundPrimary: Variable | null, oldElevationLow: Variable | null, oldElevationMid, oldElevationHigh: Variable | null;

const asyncCalls = async () => {
    oldBackgroundPrimary = await figma.variables.getVariableByIdAsync(oldBackgroundPrimaryID);
    oldElevationLow = await figma.variables.getVariableByIdAsync(oldElevationLowID);
    oldElevationMid = await figma.variables.getVariableByIdAsync(oldElevationMidID);
    oldElevationHigh = await figma.variables.getVariableByIdAsync(oldElevationHighID);
};

const updateVariables = () => {
    // BOTTOM NAVIGATION
    let bottomNavArray = figma.currentPage.findAll(n => n.name === "⚡️ Bottom Navigation");

    Array.from(bottomNavArray).forEach(item => {
        // @ts-ignore
        let boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newElevationRaiseID) {
            // @ts-ignore
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationHigh);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("Bottom navigation — Check the applied variable", { error: true, timeout: 10000 });
        }
    });

    // DIALOG
    let dialogWrapperArray = figma.currentPage.findAll(n => n.name === "Dialog wrapper");

    Array.from(dialogWrapperArray).forEach(item => {
        // @ts-ignore
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newElevationOverlayID) { 
            // @ts-ignore
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationHigh);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("Dialog — Check the applied variable", { error: true, timeout: 10000 });
        }
    });

    // INFORMATION BOX
    let informationBoxArray = figma.currentPage.findAll(n => n.name === "⚡️ Information Box");

    Array.from(informationBoxArray).forEach(item => {
        // @ts-ignore
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newBackgroundInformationID) {
            // @ts-ignore
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldBackgroundPrimary);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("Information box — Check the applied variable", { error: true, timeout: 10000 });
        }
    });

    // INFORMATION CARD
    let informationCardArray = figma.currentPage.findAll(n => n.name === "⚡️ Information Card");

    Array.from(informationCardArray).forEach(item => {
        // @ts-ignore
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newBackgroundInformationID) {
            // @ts-ignore 
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationLow);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("Information card — Check the applied variable", { error: true, timeout: 10000 });
        }
    });

    // INSIGHT CARD
    let insightCardArray = figma.currentPage.findAll(n => n.name === "⚡️ Insight Card");

    Array.from(insightCardArray).forEach(item => {
        // @ts-ignore
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newBackgroundInformationID) { 
            // @ts-ignore
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationLow);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("Insight card — Check the applied variable", { error: true, timeout: 10000 });
        }
    });

    // LIST CARD
    let listCardArray = figma.currentPage.findAll(n => n.name === "⚡️ List Card");

    Array.from(listCardArray).forEach(item => {
        // @ts-ignore
        const boundVariableID = item.fills[0].boundVariables.color.id;

        // Check if it has the new elevation
        if (boundVariableID === newElevationHighlightID) { 
            // @ts-ignore
            const fillsCopy = [...(item.fills)];
            
            fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationHigh);

            // @ts-ignore
            item.fills = fillsCopy
        }
        else {
            figma.notify("List card — Check the applied variable", { error: true, timeout: 10000 });
        }
    }); 

    // NAVIGATION BAR
    let navigationBarArray = figma.currentPage.findAll(n => n.name === "⚡️ Navigation Bar");

    Array.from(navigationBarArray).forEach(item => {
        // @ts-ignore
        if (item.variantProperties.Background === "True") {
            // @ts-ignore
            const boundVariableID = item.fills[0].boundVariables.color.id;

            // Check if it has the new elevation
            if (boundVariableID === newElevationRaiseID) { 
                // @ts-ignore
                const fillsCopy = [...(item.fills)];
                
                fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldBackgroundPrimary);

                // @ts-ignore
                item.fills = fillsCopy
            }
            else {
                figma.notify("Navigation bar — Check the applied variable", { error: true, timeout: 10000 });
            }
        }
    });

    // SEARCH
    let searchArray = figma.currentPage.findAll(n => n.name === "⚡️ Search");

    Array.from(searchArray).forEach(item => {
        // Check if it is the background variant
        // @ts-ignore
        if (item.variantProperties.Background === "True") {
            // @ts-ignore
            const boundVariableID = item.fills[0].boundVariables.color.id;

            // Check if it has the new elevation
            if (boundVariableID === newElevationRaiseID) {
                // @ts-ignore
                const fillsCopy = [...(item.fills)];
                
                fillsCopy[0] = figma.variables.setBoundVariableForPaint(fillsCopy[0], 'color', oldElevationLow);

                // @ts-ignore
                item.fills = fillsCopy
            }
            else {
                figma.notify("Search — Check the applied variable", { error: true, timeout: 10000 });
            }
        }
    });

    // After the loop is done close the plugin
    figma.closePlugin("Components on page change to old elevation!");
};

asyncCalls().then(() => updateVariables());
