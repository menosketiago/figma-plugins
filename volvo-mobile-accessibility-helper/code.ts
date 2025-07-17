// This plugin adds annotation to Mobile Design System components that need extra accessibility love from designers and developers

const instancesArray = figma.currentPage.findAll((n) => n.name.includes("⚡️"));

type Annotation = {
    labelMarkdown: string;
    // label?: string; // Do not use label if labelMarkdown is present
};

function cleanAnnotations(annotations: any[]): Annotation[] {
    return annotations
        .map(a => {
            if ('labelMarkdown' in a) {
                // Remove 'label' if present
                const { label, ...rest } = a;
                return rest;
            }
            return a;
        })
        .filter(a => 'labelMarkdown' in a);
}

function addAnnotation(instance: any, annotation: Annotation) {
    // Ensure only labelMarkdown is present
    if ('label' in annotation) {
        delete (annotation as any).label;
    }
    if (Array.isArray(instance.annotations)) {
        // Clean existing annotations to remove 'label'
        const cleaned = cleanAnnotations(instance.annotations);
        instance.annotations = [...cleaned, annotation];
    } else {
        instance.annotations = [annotation];
    }
}

Array.from(instancesArray).forEach((instance) => {
    switch (instance.name) {
        case "⚡️ Avatar":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning   
                
The need for alt text entirely depends on the context and intent.  

If the user name is already present in text close to the Avatar, adding the description will be redundant.  

In most cases, you should set the initials to be hidden from the screen reader, has it won’t be helpful and it will not be read as initials (“TA” is read as “tah”).`,
            });
            break;
        case "⚡️ Badge":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning   
                
Our default description is only about the severity (information, warning and error).  

Without additional alt text users might not understand what the badge refers to.`,
            });
            break;
        case "⚡️ Calendar":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning   
                
Make sure the surrounding content explains what the Calendar will schedule.`,
            });
            break;
        case "⚡️ IconButton":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning   
                
If you use an IconButton, you should describe the action the icon triggers (not a description of what the icon looks like).`,
            });
            break;
        case "⚡️ ImageContainer":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning   
                
If the image contains relevant information not present in the card written content, you might need to include an alt text describing it.`,
            });
            break;
        case "⚡️ NavigationBar":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning

The Design System provides a content description for the “back” and “close” icon actions.
                
If you use any other icon, you should describe the action the icon triggers (not a description of what the icon looks like).`,
            });
            break;
        case "⚡️ NavigationBar 2.0":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning

The Design System provides a content description for the “back” and “close” icon actions.
                
If you use any other icon, you should describe the action the icon triggers (not a description of what the icon looks like).`,
            });
            break;
        case "⚡️ ProgressBar":
            addAnnotation(instance, {
                labelMarkdown: `# Accessibility warning

When using a ProgressBar you need to make sure that users know what the progress refers to. 
            
This can be done via surrounding context (having a header before the component) or by enabling the provided “label” or “message” properties in this component.`,
            });
            break;
    }
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin("Accessibility warnings added 🎉");
