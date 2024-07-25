// This plugin updates the icons on the page with Volvo Icon library icons

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
    // insightCard: "",
    // insightCard2: "",
    // insightList: "",
    // list: "",
    // list2: "",
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
};

// Icon names mapping across libraries
// The first name in the schema is the lib 2024 icon name

const iconNameMapping = {
    addressBook: {
        mdsLib: "",
        oldGlobalLib: "",
    },
};

// Global variables

const selection = figma.currentPage.selection;
let asyncRunning = 0;
let componentArray: any;
let componentNodes: any = {};

const asyncCalls = async () => {
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
        figma.closePlugin("Mobile Design System components updated 🎉");
    }
}

const updateComponents = () => {
    Array.from(componentArray).forEach((component: any) => {
        // INFORMATION CARD
        if (component.name.match("⚡️ Information Card")) {
            // Store the content
            const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
            const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;
            
            // Swap the component
            component.swapComponent(componentNodes.imageCard);
            
            // Update swapped component
            component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
            component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;
        }
        
        // LIST CARD
        if (component.name.match("⚡️ List Card")) {
            // Store the text content
            const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
            const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;

            // Leading and trailing content
            const leading = component.children[0];
            const leadingKey = leading.mainComponent.key;
            const trailing = component.children[2];
            const trailingComponentProps = trailing.componentProperties;
            const trailingKey = trailing.mainComponent.key;

            // Swap the component
            component.swapComponent(componentNodes.listCard2);

            // Update swapped component
            component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
            component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;

            // Replace the leading instance
            getComponentNodeByKey(leadingKey).then((importedNode) => { 
                asyncRunning--

                const newLeadingNode = component.findOne(((n: { name: string; }) => n.name === "-> Leading"));

                newLeadingNode.swapComponent(importedNode);

                checkForAsync();
            });

            // Replace the trailing instance
            const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

            switch (trailingComponentProps.Type.value) {
                case "Icon":
                    newTrailingNode.swapComponent(
                        componentNodes.list2NestedTrailing.parent.findChild(
                            (n: { name: string }) => n.name.match("Icon")
                        )
                    );
                break;
                case "Switch":
                    newTrailingNode.swapComponent(
                        componentNodes.list2NestedTrailing.parent.findChild(
                            (n: { name: string }) => n.name.match("Switch")
                        )
                    );
                break;
                case "Spinner":
                    newTrailingNode.swapComponent(
                        componentNodes.list2NestedTrailing.parent.findChild(
                            (n: { name: string }) => n.name.match("Spinner")
                        )
                    );
                    break;
                case "Action":
                    newTrailingNode.swapComponent(
                        componentNodes.list2NestedTrailing.parent.findChild(
                            (n: { name: string }) => n.name.match("Action")
                        )
                    );
                break;
            }
        }
    });
};

// Listen to command from the figma plugin menu

if (figma.command === "page") {
    // Push all instances on the page to the array
    componentArray = figma.currentPage.findAllWithCriteria({
        types: ["INSTANCE"],
    });
} 
else if (figma.command === "selection") {
    // Push only instances inside the selection to the deprecation array
    if (selection.length === 1) {
        // @ts-ignore
        if (selection[0].componentProperties !== undefined) {
            componentArray = selection;

            // Call the async then run the main update function
            asyncCalls().then(() => updateComponents());
        } else {
            figma.closePlugin();
            figma.notify(
                "The selection does not include a component instance 🙃",
                {
                    error: true,
                    timeout: 10000,
                }
            );
        }
    } 
    else if (selection.length >= 2) {
        // @ts-ignore
        componentArray = selection[0].findChildren(
            (n: { type: string }) => n.type === "INSTANCE"
        );

        // Call the async then run the main update function
        asyncCalls().then(() => updateComponents());
    } 
    else {
        figma.closePlugin();
        figma.notify("You forgot to select something 😅", {
            error: true,
            timeout: 10000,
        });
    }
}
