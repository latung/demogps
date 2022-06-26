import Config from 'react-native-config';

// HOST-ALL
// Config.HOST  'http://178.128.112.53:3000'
const HOST = 'http://157.245.145.162:3000';
const HOSTWALLET = 'https://us-central1-safaty-e20ba.cloudfunctions.net';
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
export const API_GET_BOX = `${HOST}/item/market`;
export const API_SELL_SHOE = `${HOST}/shoes/`;
//running
export const API_START_RUNNING= `${HOST}/run`;
export const API_GET_RUNNING_SESSION= `${HOST}/run`;
// export const API_GET_SHOES_ID = `${HOST + SHOES}/shoesId`;
export const API_GET_SHOES_ID = `${HOST + SHOES}`;
// export const API_PUT_SHOES_ID = `${HOST + SHOES}/shoesId`;
export const API_PUT_SHOES_ID = `${HOST + SHOES}`;
export const API_GET_SHOES = `${HOST + SHOES}`;
export const API_POST_BUY = `${HOST + SHOES}/buy`;
export const API_POST_BUY_ITEM = `${HOST}/item/buy-p2p`;
export const API_POST_PRIVATE_ASSIGN_SHOES = `${HOST + SHOES}/private-assign-shoes`;
// export const API_GET_SHOES_ID_WEAR = `${HOST + SHOES}/shoesId`;
export const API_GET_SHOES_ID_WEAR = `${HOST + SHOES}`;
export const API_GET_SHOES_CONSTANTS = `${HOST + SHOES}/constants`;
// balance
// export const API_GET_USER_ID = `${HOST + BALANCE}/userId`;
export const API_GET_USER_ID = `${HOST + BALANCE}`;
export const API_POST_UPDATE_MONEY = `${HOST + BALANCE}/update-money`;

// run
export const API_POST_RUN = `${HOST + RUN}`;
export const API_GET_RUNNING_SESSION_ID = `${HOST + RUN}/runningSessionId`;
// export const API_PUT_RUNNING_SESSION_ID = `${HOST + RUN}/runningSessionId`;
export const API_PUT_RUNNING_SESSION_ID = `${HOST + RUN}`;
export const API_GET_RUNNING_HISTORY = `${HOST + RUN}`;
//const shoe
export const API_GET_SHOES_CONST = `${HOST + SHOES}/constants`;
export const API_GET_RATE = `${HOSTWALLET}/price_binanstep`;
export const API_SWAP = `${HOSTWALLET}/binanstep_swaps`;
export const API_TRANSFER = `${HOSTWALLET}/binanstep_deposits`;
export const API_TRANSFER_SPENDING = `${HOSTWALLET}/binanstep_withdraws`;
export const API_GET_RATE_BNB = `https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT`;

export const API_GET_USER_ID_BNB = `${HOSTWALLET}/binanstep_getBalance`;

export const API_PASS_CODE_WALLET = `${HOSTWALLET}/binanstep_setpasss`;

export const API_CHECK_PASS_WALLET = `${HOSTWALLET}/binanstep_checkPass`;


export const API_GET_TOTAL_KM = `${HOST + USER}/total-run`;

//get my box
export const API_GET_MY_BOX = `${HOST}/item`;

//open Box
export const API_OPEN_BOX = `${HOST}/item/box/open-shoes-box`;
export const API_MINT_SHOE = `${HOST}/shoes/mint`;
export const API_UNLOCK_GEM = `${HOST}/shoes/:shoesId/open-gem-slot`;
export const API_ADD_GEM = `${HOST}/shoes/:shoesId/add-gem`;
export const API_UPGRADE_SHOE_LEVEL = `${HOST}/shoes/:shoesId/level-up`

//sell item
export const API_SELL_ITEM = `${HOST}/item/selling/`;