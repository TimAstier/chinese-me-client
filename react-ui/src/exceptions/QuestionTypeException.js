export default function QuestionTypeException(type) {
  this.message = `Type ${type} is not supported.`;
  this.name = 'QuestionTypeException';
}
