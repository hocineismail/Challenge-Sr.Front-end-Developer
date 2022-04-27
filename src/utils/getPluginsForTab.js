export function getPluginsForTab({ active, disabled, inactive }) {
  return [...new Set([...active, ...disabled, ...inactive].sort())];
}
