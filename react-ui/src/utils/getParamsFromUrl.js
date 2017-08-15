export default function getParams(url) {
  const routeParams = url.split('/');
  return {
    episodeId: routeParams[2],
    elementType: routeParams[3],
    elementId: routeParams[4] || undefined,
    mode: routeParams[5] || ''
  };
}
