function extractResourceIds(data, type, joinedTable) {
  return data.included
    .filter(e => e.type === type)
    .sort((a, b) => {
      return a.attributes[joinedTable].order - b.attributes[joinedTable].order;
    })
    .map(e => Number(e.id));
}

export default function LessonDeserializer(data) {
  return {
    id: Number(data.data.id),
    title: data.data.attributes.title,
    dialogIds: extractResourceIds(data, 'dialogs', 'dialogLesson'),
    charIds: extractResourceIds(data, 'chars', 'charLesson'),
    grammarIds: extractResourceIds(data, 'grammars', 'grammarLesson')
  };
}
