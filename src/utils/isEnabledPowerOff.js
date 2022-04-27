export async function isEnabledPowerOff({ tabdata, pluginsLength }) {
  let count = 0;
  for (let item in tabdata) {
    count = count + tabdata[item].disabled.length;
  }

  if (count === 0) {
    return true;
  } else {
    return count !== pluginsLength;
  }
}
