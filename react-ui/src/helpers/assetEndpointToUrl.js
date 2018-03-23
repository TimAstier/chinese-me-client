import { STATIC_ASSETS_ROOT_URL } from '../constants/urls';

const assetEndpointToUrl = endpoint => STATIC_ASSETS_ROOT_URL + endpoint;

export default assetEndpointToUrl;
