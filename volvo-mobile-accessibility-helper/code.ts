// This plugin adds annotation to Mobile Design System components that need extra accessibility love from designers and developers

type Annotation = {
    labelMarkdown: string;
};

// Helper to check if instance has 'annotations' property
function hasAnnotationsProp(node: SceneNode): node is SceneNode & { annotations: Annotation[] | number } {
    return 'annotations' in node;
}

const instancesArray = figma.currentPage.findAll(n => n.name.includes("⚡️"))

Array.from(instancesArray).forEach(instance => {
    if (hasAnnotationsProp(instance) && typeof instance.annotations === "number" && instance.annotations >= 0) {
        switch (instance.name) {
            case "⚡️ Avatar":
                instance.annotations = [
                    { labelMarkdown: `# Accessibility warning   
                    
The need for alt text entirely depends on the context and intent.  

If the user name is already present in text close to the Avatar, adding the description will be redundant.  

In most cases, you should set the initials to be hidden from the screen reader, has it won’t be helpful and it will not be read as initials (“TA” is read as “tah”).`
                    },
                ]
            break;
            case "⚡️ Badge": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning   
                    
Our default description is only about the severity (information, warning and error).  

Without additional alt text users might not understand what the badge refers to.`
                    },
                ]
            break;
            case "⚡️ Calendar": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning   
                    
Make sure the surrounding content explains what the Calendar will schedule.`
                    },
                ]
            break;
            case "⚡️ IconButton": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning   
                    
If you use an IconButton, you should describe the action the icon triggers (not a description of what the icon looks like).`
                    },
                ]
            break;
            case "⚡️ ImageContainer": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning   
                    
If the image contains relevant information not present in the card written content, you might need to include an alt text describing it.`
                    },
                ]
            break;
            case "⚡️ NavigationBar": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning

The Design System provides a content description for the “back” and “close” icon actions.
                    
If you use any other icon, you should describe the action the icon triggers (not a description of what the icon looks like).`
                    },
                ]
            break;
            case "⚡️ NavigationBar 2.0": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning

The Design System provides a content description for the “back” and “close” icon actions.
                    
If you use any other icon, you should describe the action the icon triggers (not a description of what the icon looks like).`
                    },
                ]
            break;
            case "⚡️ ProgressBar": instance.annotations = 
                [
                    { labelMarkdown: `# Accessibility warning

When using a ProgressBar you need to make sure that users know what the progress refers to. 
                
This can be done via surrounding context (having a header before the component) or by enabling the provided “label” or “message” properties in this component.`
                    },
                ]
            break;
        }
    }
    else {
        figma.notify(
            "Some component instances already had annotations (remove existing annotations to get accessibility notes).",
            { error: true, timeout: 10000 }
        );
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
