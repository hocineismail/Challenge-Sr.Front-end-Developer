/**
 *
 *to check if th plugi is activated or not
 * @param plugin,is a string for checking if exist in plugins
 *
 * @returns boolean
 */

export function isActived({ plugin, plugins }) {
  return plugins.includes(plugin);
}
