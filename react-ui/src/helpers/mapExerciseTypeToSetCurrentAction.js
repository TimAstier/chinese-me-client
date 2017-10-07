import { actions as studyActions } from '../redux/study';

const mapExerciseTypeToSetCurrentAction = type => {
  switch (type) {
    case 'multipleChoice': return studyActions.setCurrentMultipleChoiceId;
    case 'audioToText': return studyActions.setCurrentAudioToTextId;
    case 'characterPinyin': return studyActions.setCurrentCharacterId;
    default: return console.log('unknown exercise type', type); // eslint-disable-line
  }
};

export default mapExerciseTypeToSetCurrentAction;
