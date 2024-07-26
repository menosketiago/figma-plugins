// This plugin updates out of date mobile components with state of art ones

// Components that use swappable icons
// Icon Button
// Card
// Double Card
// Image Card
// Insight Card 2.0
// List Card 2.0
// Selectable Card
// Selectable Expandable Card
// Action Chip
// Information Box
// List 2.0
// List Header
// Insight List
// Bottom Navigation
// Navigation Bar
// Search
// Feedback Notification

// The node id remains the same after swap, so there is a way to reference it

/////////////////////////////////////////////////////////////////////////////////////
// CODE STARTS HERE
/////////////////////////////////////////////////////////////////////////////////////

// Store a list of components that need to be updated
const updatableComponents = [
    "⚡️ Information Card",
    "⚡️ Insight Card",
    "⚡️ List primary",
    "⚡️ List secondary",
    "⚡️ List Card"
];

// Store all keys from components that need to be updated
// Needs to be updated as component versions change!

const componentKeys = {
    // actionChip: "",
    // bottomNavigation: "",
    // button: "",
    // doubleButton: "",
    // card: "",
    // doubleCard: "",
    // feedbackNotification: "",
    iconButton: "ec66c67b5629e8561cd7924462bbf7574b1a81ad",
    iconButton2: "6427e562acdff00617fa0ea5e685e14cde5e5e39",
    imageCard: "770c7c636d23d1a33575cdff788c09d066d7e0f9",
    // informationBox: "",
    // informationCard: "",
    insightCard: "db59b5d083ae7481d675d677f889a8a5682e7338",
    insightCard2: "3e95e5de03c52a6b6698b572212f0003563945a4",
    insightList: "4692a1415c5b9b38cadeef40c8e3a5ed15a38047",
    list2: "a2dda2278be541720296ad9ffc0b551703b1e54b",
    list2NestedLeading: "4da9a2cde920f33eea943aa155ef3145c5ad215f",
    list2NestedTrailing: "7fa7f828948dd0f05dd5b8dc9ebe1b0dbc51c352",
    listCard: "3c2f8072342ab2233083f885108e68d447da75de",
    listCard2: "ef004093724bb47d6872c631dfb82392a5dd723c",
    // listHeader: "",
    // navigationBar: "",
    // navigationBar2: "",
    // search: "",
    // selectableCard: "",
    // selectableExpandableCard: "",
};

// Store all keys for Volvo Icons lib 2024 icons

const iconKeys = {
    lib2024: {
        addressBook: "46a8601c40563ea0e6ea612ee7cfa4a7041c3961",
        iconName: "",
    },
    mobileIcons: {
        size24: {
            amazon: "687399f1f9613416f0a85812e9fa1810a279d22f",
            chat: "fa545d8b0ff516c4e29a291a53636f097700203a",
        },
        size32: {
            amazon: "2c6d5a1d28eba431b54d77cf3aeb8f795a3e0b49",
            chat: "a6d1182c7e616a75abae1a01052ca8bf400c4564"
        }
    }
};

// Icon names mapping across libraries
// The first name in the schema is the lib 2024 icon name

const iconNameMapping = {
    addressBook: {
        iconInventoryLib: "",
        mobileIcons: ""
    },
};

// GLOBAL VARIABLES

const selection = figma.currentPage.selection;
const iconMetadata = /\s{1,3}\(\d\d\w\w\)/g;
const stringUpdateFail = "Ups, I was lost!";

let asyncRunning = 0;
let componentArray: any = [];
let componentNodes: any = [];

// FUNCTIONS

const asyncCalls = async () => {
    // Save a backup point on the version history before the plugin runs
    await figma.saveVersionHistoryAsync("💾 Before the update mobile components plugin ran");

    // Load library fonts
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });

    // Import component nodes from the componentKeys object
    for (const [key, value] of Object.entries(componentKeys)) {
        const importedNode = await figma.importComponentByKeyAsync(value);

        Object.assign(componentNodes, {[key]: importedNode});
    }
};

const getComponentNodeByKey = async (key: string) => {
    asyncRunning++

    const importedNode = await figma.importComponentByKeyAsync(key);

    return importedNode;
};

const checkForAsync = () => {
    // Check if there are async processes running and if not, close the plugin
    if (asyncRunning <= 0) {
        preCloseSave().then(() => {
            figma.closePlugin("Mobile Design System components updated 🎉");
        });
    }
}

const preCloseSave = async () => {
    // Save a backup point on the version history before the plugin closes
    await figma.saveVersionHistoryAsync("💾 After the update mobile components plugin ran");
};

const updateComponents = () => {
    Array.from(componentArray).forEach((component: any) => {
        if (component.name.match("⚡️ Information Card")) {
            updateInformationCard(component);
        }

        if (component.name.match("⚡️ Insight Card")) {
            updateInsightCard(component);
        }

        if (component.name.match("⚡️ List primary")) {
            updateListPrimary(component);
        }

        if (component.name.match("⚡️ List secondary")) {
            updateListSecondary(component);
        }
        
        if (component.name.match("⚡️ List Card")) {
            updateListCard(component);
        }
    });
};

// COMPONENT UPDATE FUNCTIONS

const updateInformationCard = async (component: any) => {
    // Store the content
    const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
    const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;
    
    // Swap the component
    component.swapComponent(componentNodes.imageCard);
    
    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
    component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;

    // Close plugin
    checkForAsync();
};

const updateInsightCard = async (component: any) => {    
    // Swap the component
    component.swapComponent(componentNodes.insightCard2);

    // Close plugin
    checkForAsync();
};

const updateListPrimary = async (component: any) => {
    // Leading and trailing content
    const leading = component.findOne(((n: { name: string; }) => n.name === "Leading"));
    const leadingComponentProps = leading.componentProperties;
    const leadingIconName = leading.children[0].name.replace(iconMetadata, "").toLowerCase();

    const trailing = component.findOne(((n: { name: string; }) => n.name === "Trailing"));
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetadata, "").toLowerCase();

    // Nested detail content
    let detail: string = stringUpdateFail;

    if (component.findOne(((n: { name: string; }) => n.name === "Detail"))) {
        detail = component.findOne(((n: { name: string; }) => n.name === "Detail")).characters;
    }

    // Store the component variant name before swapping
    const rowsVariant = component.variantProperties.Rows;

    // Swap the component
    component.swapComponent(componentNodes.list2);

    // Store the new leading instance after swap
    const newLeadingNode = component.findOne(((n: { name: string; }) => n.name === "-> Leading"));

    // Replace the leading instance
    switch (leadingComponentProps.Type.value) {
        case "Icon":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild(
                    (n: { name: string }) => n.name.match("Icon")
                )
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[leadingIconName])
                .then((importedNode) => { 
                    asyncRunning--

                    const icon = newLeadingNode.children[0];

                    icon.swapComponent(importedNode);

                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Radio":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild((n: { name: string }) => n.name.match("Radio"))
            );
        break;
        case "Checkbox":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild((n: { name: string }) => n.name.match("Checkbox"))
            );
        break;
    }

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = newTrailingNode.children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Detail":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail"))
            );

            newTrailingNode.findOne(((n: { name: string; }) => n.name === "Detail")).characters = detail;
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
        case "Detail with icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail with icon"))
            );

            newTrailingNode.findOne(((n: { name: string; }) => n.name === "Detail")).characters = detail;
        break;
    }

    // Show/hide content on the swapped content to match the previous list variants
    if (rowsVariant === "5") {
        component.setProperties({
            "Header#47651:29": true,
            "More content#50684:2": true,
            "Title 2#47651:35": true,
            "Message 2#47651:33": true
        });
    }

    if (rowsVariant === "2") {
        component.setProperties({
            "Header#47651:29": true,
            "Message#51818:89": false
        });
    }

    if (rowsVariant === "1") {
        component.setProperties({
            "Message#51818:89": false
        });
    }
    
    // Close plugin
    checkForAsync();
};

const updateListSecondary = async (component: any) => {
    // Leading and trailing content
    const leading = component.findOne(((n: { name: string; }) => n.name === "Leading"));
    const leadingIconName = leading.mainComponent.name.replace(iconMetadata, "").toLowerCase();

    const trailing = component.findOne(((n: { name: string; }) => n.name === "Trailing"));
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetadata, "").toLowerCase();

    // Store the component variant name before swapping
    const rowsVariant = component.variantProperties.Rows;

    // Store the value text
    let value: string = stringUpdateFail;

    if (rowsVariant === "2 (non-clickable)") {
        value = component.findOne(((n: { name: string; }) => n.name === "Value")).characters;
    }

    // Swap the component
    component.swapComponent(componentNodes.list2);

    // Replace the leading icon
    // @ts-ignore
    getComponentNodeByKey(iconKeys.mobileIcons.size24[leadingIconName])
        .then((importedNode) => { 
            asyncRunning--

            const icon = component.findOne(((n: { name: string; }) => n.name === "-> Leading")).children[0];
            icon.swapComponent(importedNode);

            checkForAsync();
        })
        .catch((error) => {
            console.error(error.message);
        }
    );

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = component.findOne(((n: { name: string; }) => n.name === "-> Trailing")).children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Detail":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail"))
            );
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
        case "Detail with icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail with icon"))
            );
        break;
    }

    // Show/hide content on the swapped content to match the previous list variants

    component.setProperties({ Type: "Compact" });

    if (rowsVariant === "5") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true,
            "Message 3#47651:31": true,
            "Message 4#47651:23": true
        });
    }

    if (rowsVariant === "4") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true,
            "Message 3#47651:31": true
        });
    }

    if (rowsVariant === "3") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true
        });
    }

    if (rowsVariant === "2 (non-clickable)") {
        component.setProperties({
            "Header#47651:29": true,
            "Message#51818:89": false
        });

        component.findOne(((n: { name: string; }) => n.name === "Title")).characters = value;
    }

    if (rowsVariant === "1") {
        component.setProperties({
            "Message#51818:89": false
        });
    }
    
    // Close plugin
    checkForAsync();
};

const updateListCard = async (component: any) => {
    // Store the text content
    const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
    const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;

    // Leading and trailing content
    const leading = component.children[0];
    const leadingKey = leading.mainComponent.key;

    const trailing = component.children[2];
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetadata, "").toLowerCase();

    // Swap the component
    component.swapComponent(componentNodes.listCard2);

    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
    component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;

    const newLeadingNode = component.findOne(((n: { name: string; }) => n.name === "-> Leading"));

    // Swap the icon in the leading instance
    getComponentNodeByKey(leadingKey)
        .then((importedNode) => { 
            asyncRunning--

            const icon = newLeadingNode.children[0];

            icon.swapComponent(importedNode);

            checkForAsync();
        })
        .catch((error) => {
            console.error(error.message);
        }
    );

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // Swap the icon
            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = newTrailingNode.children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
    }
    
    // Close plugin
    checkForAsync();
};

// INITIALIZATION

// Listen to the commands from the figma plugin menu

if (figma.command === "page") {
    let allInstances = figma.currentPage.findAllWithCriteria({
        types: ["INSTANCE"],
    });

    Array.from(allInstances).forEach((instance: any) => {
        // Loop through updatable component names
        for (const component of updatableComponents) {
            if (instance.name.match(component)) {
                componentArray.push(instance)
            }
        }
    });

    if (componentArray.length >= 1) {
        // Call the async then run the main update function
        asyncCalls().then(() => updateComponents());
    }
    else {
        figma.closePlugin();
        figma.notify("Weird, could not find out of date mobile components found on page 🤔", {error: true, timeout: 10000});
    }
} 

if (figma.command === "selection") {
    // Push only instances inside the selection to the deprecation array
    if (selection.length === 1) {
        // @ts-ignore
        if (selection[0].componentProperties !== undefined) {
            componentArray = selection;

            // Call the async then run the main update function
            asyncCalls().then(() => updateComponents());
        }
        else {
            figma.closePlugin();
            figma.notify("The selection does not include a component instance 😅", {error: true, timeout: 10000});
        }
    } 
    else if (selection.length >= 2) {
        Array.from(selection).forEach((instance: any) => {
            // Loop through updatable component names
            for (const component of updatableComponents) {
                if (instance.name.match(component)) {
                    componentArray.push(instance)
                }
            }
        });

        // Call the async then run the main update function
        asyncCalls().then(() => updateComponents());
    } 
    else {
        figma.closePlugin();
        figma.notify("You forgot to select something 😅", {error: true, timeout: 10000});
    }
}