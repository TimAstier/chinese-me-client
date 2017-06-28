const sentences = [
  {
    chinese: '你好！',
    l1: 'Hi!',
    personality: 2,
    mood: 'happy',
    audio: 'sentence_2.mp3'
  }, {
    chinese: '你会说中文吗？',
    l1: 'Can you speak Chinese?',
    personality: 2,
    mood: 'surprised',
    audio: 'sentence_3.mp3'
  }];

const personalities = [{
  name: 'boy',
  mood: 'surprised',
  id: 1
}, {
  name: 'girl',
  mood: 'blink',
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
