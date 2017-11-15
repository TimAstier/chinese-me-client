export default function CharacterModeException(mode) {
  this.message = `Unknown character mode: ${mode}`;
  this.name = 'CharacterModeException';
}
