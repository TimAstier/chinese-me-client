export default function GrammarDeserializer(data) {
  return {
    grammar: {
      id: data.data.id,
      title: data.data.attributes.title,
      explanation: data.data.attributes.explanation
    },
    sentences: data.included
      .map(s => {
        return {
          id: s.id,
          chinese: s.attributes.chinese,
          english: s.attributes.english,
          rawEnglish: s.attributes.rawEnglish,
          order: s.attributes.sentenceGrammar.order
        };
      })
      .sort((a, b) => {
        return a.order - b.order;
      })
  };
}
