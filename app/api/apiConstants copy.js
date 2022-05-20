import Config from 'react-native-config';

// HOST-ALL
// Config.HOST  'http://178.128.112.53:3000'
const HOST = 'http://178.128.112.53:3000';
// __Name Postman
const AUTH = '/auth';
const USER = '/user';
const SHOES = '/shoes';
const BALANCE = '/balance';
const RUN = '/run';

// auth
export const API_POST_RESEND_REGISTER_CODE = `${HOST + AUTH}/resend-register-code`;
export const API_POST_SUBMIT_CODE = `${HOST + AUTH}/submit-code`;
export const API_POST_SET_PASSWORD = `${HOST + AUTH}/set-password`;
export const API_POST_LOGIN = `${HOST + AUTH}/login`;

// user
export const API_GET_USER_INFO = `${HOST + USER}`;
export const API_PUT_CHANGE_INFO = `${HOST + USER}`;
export const API_PUT_CHANGE_PASSWORD = `${HOST + USER}/change-password`;
export const API_POST_SUBMIT_CHANGE_PASSWORD = `${HOST + USER}/submit-change-password`;

// shoes
export const API_GET_MARKET = `${HOST + SHOES}/market`;
export const API_GET_SHOES_ID = `${HOST + SHOES}/shoesId`;
export const API_PUT_SHOES_ID = `${HOST + SHOES}/shoesId`;
export const API_GET_SHOES = `${HOST + SHOES}`;
export const API_POST_BUY = `${HOST + SHOES}/buy`;
export const API_POST_PRIVATE_ASSIGN_SHOES = `${HOST + SHOES}/private-assign-shoes`;
export const API_GET_SHOES_ID_WEAR = `${HOST + SHOES}/shoesId`;

// balance
export const API_GET_USER_ID = `${HOST + BALANCE}/userId`;
export const API_POST_UPDATE_MONEY = `${HOST + BALANCE}/update-money`;

// run
export const API_POST_RUN = `${HOST + RUN}`;
export const API_GET_RUNNING_SESSION_ID = `${HOST + RUN}/runningSessionId`;
export const API_PUT_RUNNING_SESSION_ID = `${HOST + RUN}/runningSessionId`;
