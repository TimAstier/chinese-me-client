function extractResourceIds(data, type, lessonJoinedTable, userJoinedTable) {
  return data.included
    .filter(e => e.type === type)
    .sort((a, b) => {
      return a.attributes[lessonJoinedTable].order - b.attributes[lessonJoinedTable].order;
    })
    .map(e => {
      return {
        id: e.id,
        comment: e.attributes[lessonJoinedTable].comment,
        completed: e.attributes[userJoinedTable].length === 1 ? true : false
      };
    });
}

export default function LessonDeserializer(data) {
  return {
    title: data.data.attributes.title,
    resources: {
      dialogsData: extractResourceIds(data, 'dialogs', 'dialogLesson', 'dialogUsers'),
      charsData: extractResourceIds(data, 'chars', 'charLesson', 'charUsers'),
      grammarsData: extractResourceIds(data, 'grammars', 'grammarLesson', 'grammarUsers'),
      wordsData: extractResourceIds(data, 'words', 'wordLesson', 'wordUsers')
    }
  };
}
