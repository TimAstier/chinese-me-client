const screenTypeToUserSettings = screenType => {
  switch (screenType) {
    case 'character/etymology': return 'etymologyVideo';
    case 'character/writing': return 'calligraphyVideo';
    default: return null;
  }
};

export default screenTypeToUserSettings;
