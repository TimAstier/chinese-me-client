export default function DialogDeserializer(data) {
  return {
    dialog: {
      id: data.data.id,
      title: data.data.attributes.title
    },
    lines: data.included.map(l => {
      return {
        id: l.id,
        avatar: l.attributes.avatar,
        name: l.attributes.name,
        meta: l.attributes.meta,
        text: l.attributes.text,
        order: l.attributes.lineDialog.order
      };
    })
  };
}
