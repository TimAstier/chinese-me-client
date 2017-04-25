import { showFlashMessageWithTimeout } from '../redux/flashMessages';
import checkNetwork from './checkNetwork';

export default function apiCall(data, call, success, fail) {
  return dispatch =>
    dispatch(call(data))
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(err => {
        dispatch(fail());
        const type = 'error';
        const text = checkNetwork(err);
        dispatch(showFlashMessageWithTimeout({ type, text }));
      });
}
