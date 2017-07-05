const sentences = [
  {
    chinese: '你好！',
    english: 'Hi!',
    personality: 2,
    mood: 'happy',
    audio: 'sentence_2.mp3'
  }, {
    chinese: '你会说中文吗？',
    english: 'Can you speak Chinese?',
    personality: 2,
    mood: 'surprised',
    audio: 'sentence_3.mp3'
  }];

const personalities = [{
  name: 'boy',
  mood: 'blink',
  id: 1
}, {
  name: 'girl',
  mood: 'happy',
  id: 2
}];

const stepsOptions = {
  currentStep: 1,
  totalSteps: 3
};

const data = {
  personalities,
  sentences,
  stepsOptions
};

export default data;
