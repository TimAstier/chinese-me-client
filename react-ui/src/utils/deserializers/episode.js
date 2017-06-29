const episodeDeserializer = episode => {
  return {
    id: episode.id,
    title: episode.title,
    number: episode.number,
    status: 'locked',
    score: 0
  };
};

const episodesDeserializer = data => {
  const episodes = [];
  data.forEach(e => {
    return episodes.push(episodeDeserializer(e));
  });
  return episodes;
};

export default episodesDeserializer;
