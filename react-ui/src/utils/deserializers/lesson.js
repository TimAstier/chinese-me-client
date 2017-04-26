function extractResourceIds(data, type, joinedTable) {
  return data.included
    .filter(e => e.type === type)
    .sort((a, b) => {
      return a.attributes[joinedTable].order - b.attributes[joinedTable].order;
    })
    .map(e => {
      return { id: Number(e.id), comment: e.attributes[joinedTable].comment };
    });
}

export default function LessonDeserializer(data) {
  return {
    id: Number(data.data.id),
    title: data.data.attributes.title,
    dialogsData: extractResourceIds(data, 'dialogs', 'dialogLesson'),
    charsData: extractResourceIds(data, 'chars', 'charLesson'),
    grammarsData: extractResourceIds(data, 'grammars', 'grammarLesson')
  };
}
