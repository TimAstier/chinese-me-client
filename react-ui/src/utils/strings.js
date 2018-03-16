export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function trimPunct(string) {
  // eslint-disable-next-line
  const allExceptPunct = /[$／↗‘Œ.,\/#!?%\^&\*;:{}=\-_`~()。？！–•…@€£+~<>，；：'"＂、“”（）《》％·’]|\s/g;
  return string.replace(allExceptPunct, '');
}
