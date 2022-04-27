export function isDisabled({ plugin, plugins, disabledAll }) {
  if (disabledAll) return true;
  return plugins.includes(plugin);
}
