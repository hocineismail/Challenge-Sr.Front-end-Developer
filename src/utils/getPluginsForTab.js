/**
 *
 * We use this function for sort all plugins with unique  string of array
 *
 * @param active,is an array of active plugins get it from mock server
 * @param active,is an array of inactive plugins get it from mock server
 * @param inactive,is an array of inactive plugins get it from mock server
 *
 * @returns unic string of array
 */

export function getPluginsForTab({ active, disabled, inactive }) {
  return [...new Set([...active, ...disabled, ...inactive].sort())];
}
