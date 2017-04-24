import errorMessages from '../constants/errorMessages';

export default function checkNetwork(err) {
  if (!navigator.onLine) {
    return 'No Internet connexion';
  } else if (err.response === undefined) {
    return 'No response from the server';
  }
  // Error message from the server
  const { status, message } = err.response.data.errors[0];
  const clientMessage = errorMessages[message] ? errorMessages[message] : 'Error from the server.'
  return 'Error - "' + clientMessage + '" (' + status + ')';
}
