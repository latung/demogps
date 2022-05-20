import Config from 'react-native-config';
import { CONST_STORAGE, storage } from '../common';

// const TOKEN =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzdGVwbjEyM0BpcGVyZmVjdG1haWwuY29tIiwiX2lkIjoiNjI2YzBlNzM1YzczNTU2ZWJiODhkMzM1IiwiaWF0IjoxNjUxMzY5ODA2LCJleHAiOjE3Mzc3Njk4MDZ9.L2RfGTuZEYA2if_u-QlFlEc36Mo1jURYJsq8gw8gcuU';

export const getQueryString = (params) =>
{
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map((k) => `${esc(k)}=${esc(params[k])}`)
        .join('&');
};

export const apiCode = (url, method, body, option) =>
{

    if (method === "GET") {
        return fetch(url, {
            method: method, // 'POST' or 'PUT'
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((res) =>
            {
                const { code, message, data } = res;
                if (code !== 200) {
                    return res;
                    return console.log('RESPONSE FAILURE MESSAGE:', message);
                }
                if (data === undefined) {
                    return console.log('RESPONSE FAILURE DATA UNDEFINED');
                }
                console.log('RESPONSE SUCCESS:', res);
                return res;
            })
            .catch((error) =>
            {
                console.error('RESPONSE ERROR:', error);
                return false;
            });
    }
    return fetch(url, {
        method: method, // 'POST' or 'PUT'
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((res) =>
        {
            const { code, message, data } = res;
            if (code !== 200) {
                return res;
                return console.log('RESPONSE FAILURE MESSAGE:', message);
            }
            if (data === undefined) {
                return console.log('RESPONSE FAILURE DATA UNDEFINED');
            }
            console.log('RESPONSE SUCCESS:', res);
            return res;
        })
        .catch((error) =>
        {
            console.error('RESPONSE ERROR:', error);
            return false;
        });
};

export const apiAuth = async (url, method, body, option) =>
{

    const token_access = await storage.getItem(CONST_STORAGE.TOKEN_ACCESS);
    console.log('url: ', url, 'method: ', method, 'body: ', body, 'option: ', option, `Bearer ${token_access}`);

    if (!token_access) {
        console.log('TOKEN ACCESS NOT FOUND');
        return false;
    }
    // console.log(token_access)

    if (body == "") {
        return fetch(url, {
            method: method, // 'POST' or 'PUT'
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token_access}`
            }
        })
            .then((response) => response.json())
            .then((res) =>
            {
                console.log(`res hiiiii`, res);
                const { code, message, data } = res;
                if (code !== 200) {
                    return res;
                    return console.log('RESPONSE FAILURE MESSAGE:', message);
                }
                if (data === undefined) {
                    return console.log('RESPONSE FAILURE DATA UNDEFINED');
                }
                console.log('RESPONSE SUCCESS:', res);
                return res;
            })
            .catch((error) =>
            {
                console.error('RESPONSE ERROR:', error);
                return false;
            });
    }
    return fetch(url, {
        method: method, // 'POST' or 'PUT'
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token_access}`
        },
        body: method === 'GET' ? '' : JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((res) =>
        {
            console.log(`res hiiiii`, res);
            const { code, message, data } = res;
            if (code !== 200) {
                return res;
                return console.log('RESPONSE FAILURE MESSAGE:', message);
            }
            if (data === undefined) {
                return console.log('RESPONSE FAILURE DATA UNDEFINED');
            }
            console.log('RESPONSE SUCCESS:', res);
            return res;
        })
        .catch((error) =>
        {
            console.error('RESPONSE ERROR:', error);
            return false;
        });
};

export const apiKey = (url, method, body, option) =>
{
    console.log('url: ', url, 'method: ', method, 'body: ', body, 'option: ', option);

    return fetch(url, {
        method: method, // 'POST' or 'PUT'
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: Config.SECRET_KEY
        },
        body: method === 'GET' ? '' : JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((res) =>
        {
            const { code, message, data } = res;
            if (code !== 200) {
                return console.log('RESPONSE FAILURE MESSAGE:', message);
            }
            if (data === undefined) {
                return console.log('RESPONSE FAILURE DATA UNDEFINED');
            }
            console.log('RESPONSE SUCCESS:', res);
            return res;
        })
        .catch((error) =>
        {
            console.error('RESPONSE ERROR:', error);
            return false;
        });
};
