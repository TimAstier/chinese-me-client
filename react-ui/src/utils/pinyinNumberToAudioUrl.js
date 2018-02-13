import { audioUrls } from '../constants/urls';

export default function pinyinNumberToAudioUrl(pinyinNumber) {
  return `${audioUrls.charactersPath}/${pinyinNumber}.mp3`;
}
