import { pinyinSoundBaseUrl } from '../constants/urls';

export default function pinyinNumberToAudioUrl(pinyinNumber) {
  return `${pinyinSoundBaseUrl}${pinyinNumber}.m4a`;
}
