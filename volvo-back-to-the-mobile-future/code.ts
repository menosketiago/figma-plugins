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
    old: {
        actionChip: "",
        bottomNavigation: "",
        button: "",
        doubleButton: "",
        card: "",
        doubleCard: "",
        feedbackNotification: "",
        iconButton: "ec66c67b5629e8561cd7924462bbf7574b1a81ad",
        imageCard: "",
        informationBox: "",
        informationCard: "",
        insightCard: "",
        insightList: "",
        list: "",
        listCard: "",
        listHeader: "",
        navigationBar: "",
        search: "",
        selectableCard: "",
        selectableExpandableCard: "",
    },
    updated: {
        iconButton2: "6427e562acdff00617fa0ea5e685e14cde5e5e39",
        insightCard2: "",
        list2: "",
        listCard2: "",
        navigationBar2: "",
    }
};

// Store all keys for Volvo Icons lib 2024 icons

const iconKeys = {
    lib2024: {
        addressBook: "46a8601c40563ea0e6ea612ee7cfa4a7041c3961",
        iconName: "",
    }
};

// Icon names mapping across libraries
// The first name in the schema is the lib 2024 icon name

const iconNameMapping = {
    addressBook: {
        mdsLib: "",
        oldGlobalLib: ""
    }
};

const asyncCalls = async () => {
    
};

const updateComponents = () => {

};

// Call the async then run the main update function
asyncCalls().then(() => updateComponents());

/////////////////////////////////////////////////////////////////////////////////////
// OLD CODE BACKUP
/////////////////////////////////////////////////////////////////////////////////////

// async function importNode(key: string) {
//     importedComponent = await figma.importComponentByKeyAsync(key);
// }

// const updateComponent = async () => {
//     // // Get the current component icon name
//     // let currentIcon = currentComponent.findChild(node => node.name === "→ Icon");
//     // let currentIconName = currentIcon.mainComponent.name;

//     // // Swap current component with the new component
//     // currentComponent.swapComponent(newComponent);

//     // let newIcon = newComponent.findOne(node => node.name === "→ Volvo Icon");
//     // let newIconName = newIcon.mainComponent.parent.name;
//     // let newIconProps = newIcon.mainComponent.variantProperties;

//     let newIcon = figma.importComponentByKeyAsync(addressBook)
// 	.then((node) => {
// 		selection.swapComponent(node);
//         // figma.closePlugin();
// 	})
// 	.catch(() => figma.notify('Errors'));

//     // let currentIcon = selection;

//     // // Swap to the new icon that matches the currentComponent icon
//     // currentIcon.swapComponent(newIcon);

//     // // After the work is done close the plugin
//     // figma.closePlugin("Icons should now be updated!");
// };

// updateComponent();

// if (currentComponent.type === "INSTANCE") {
//     importNode(addressBook).then(() => updateComponent());
// }

// let selectionIcon = selection.findOne(node => node.name === "→ Icon");
// // let newIconName = selectionIcon.mainComponent.parent.name;
// // let newIconProps = selectionIcon.mainComponent.variantProperties;
// let selectionIconKey = selectionIcon.mainComponent.key;

// console.log(selectionIconKey)