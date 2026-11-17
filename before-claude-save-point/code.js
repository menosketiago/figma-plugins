// Before Claude save point
// Adds a named version to the file's version history before Claude edits it.
// Run from the plugins menu, or from quick actions (Cmd+/ or Ctrl+/) to add a description.

function timestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

async function savePoint(change) {
  const what = (change || "").trim();
  const title = what ? `Before Claude: ${what}` : `Before Claude: ${timestamp()}`;
  const description = what
    ? `Restore point before Claude edits (${what}). Saved ${timestamp()}.`
    : `Restore point before Claude edits. Saved ${timestamp()}.`;

  try {
    await figma.saveVersionHistoryAsync(title.slice(0, 80), description);
    figma.notify(`Save point added to version history · ${title}`);
  } catch (err) {
    figma.notify(`Could not add save point · ${err && err.message ? err.message : err}`, { error: true });
  }
  figma.closePlugin();
}

figma.on("run", ({ parameters }) => {
  savePoint(parameters && parameters.change);
});
