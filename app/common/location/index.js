import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';

// 'pk.eyJ1IjoiZGVla3NoYW1laHRhMTI1IiwiYSI6ImNrcWV6OWE0bDBjcmMydXF1enZqMjd5MDMifQ.hFB7SI_kojKYfNQ42c62BA'
export const MAPBOX_API_TOKEN =
    'pk.eyJ1IjoibG9jaHQiLCJhIjoiY2wxeXJsczg0MGZrNDNqbzNudjcyN2phciJ9.3N4Y2gU87CIzvg6QqgQgug';

async function requestPermissions()
{
    if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization('always');
        Geolocation.setRNConfiguration({
            skipPermissionRequests: true,
            authorizationLevel: 'always'
        });
    }

    if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    }
}

export const getCurrentLocation = () =>
{
    return new Promise((resolve, reject) =>
    {
        requestPermissions();
        Geolocation.getCurrentPosition(
            //getCurrentPosition watchPosition
            (position) =>
            {
                const { longitude, latitude, speed } = position.coords;
                resolve({
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                    speed: Number(speed)
                });
            },
            (err) =>
            {
                console.log('err', err.code, err.message);
                reject(err.code);
            },
            {
                enableHighAccuracy: true,
                timeout: Platform.OS === 'android' ? 1000 : 15000,
                maximumAge: Platform.OS ? 0 : 10000
            }
        );
    });
};

export { requestPermissions };
