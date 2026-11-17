# Before Claude save point

A Figma and FigJam plugin that adds a named version to the file's version history in one step, so any Claude edit can be rolled back.

## What it does

- Run it with no input and it saves a version called "Before Claude" plus the date and time.
- Run it from quick actions and type what is about to change, and it saves "Before Claude" plus your description (for example "Before Claude: Remove connector lines").
- It works in Figma Design and FigJam, has no network access and doesn't read or change any content.

## Set it up (about 5 minutes)

1. Open the Figma desktop app.
2. Go to Plugins, then Development, then Import plugin from manifest, and pick `manifest.json` from this folder.
3. Figma asks you to create or link a plugin ID. Accept, and it writes the ID into `manifest.json` for you. If it doesn't, create one under Plugins, Development, New plugin, and paste the ID into the `id` field.
4. Test it in any file. Open Version history and check the new version is at the top.
5. To use it in the browser too (needed for Claude to run it through Chrome), publish it privately to the Nordnet organisation. Go to Plugins, Development, Manage plugins in development, choose Publish, and set it to private for Nordnet. Your Figma admin may need to approve it.

## How to run it

- Quick actions. Press Cmd+/ (Ctrl+/ on Windows), type "Before Claude", press Tab, type what is about to change and press Enter.
- Menu. Go to Plugins and choose Before Claude save point. This saves a version with a timestamp.
