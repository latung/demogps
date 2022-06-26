import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapboxGL, { Logger } from '@react-native-mapbox-gl/maps';
import { getSize, location } from '../../common';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

MapboxGL.setAccessToken(location.MAPBOX_API_TOKEN);
// edit logging messages
Logger.setLogCallback(log => {
  const { message } = log;
  if (
    message.match('Request failed due to a permanent error: Canceled') ||
    message.match('Request failed due to a permanent error: Socket Closed')
  ) {
    return true;
  }
  return false;
});

function StepMaps() {
  const navigation = useNavigation();
  const selector = useSelector(state => ({
    screenState: state.initReducer.screenState,
    initReducer: state.initReducer,
  }));
  const [state, setstate] = useState({
    dataGeo: [],
  });
  const [coordinates, setcoordinates] = useState(
    selector.screenState.currentLocation.latitude !== 0
      ? [
          selector.screenState.currentLocation.longitude,
          selector.screenState.currentLocation.latitude,
        ]
      : [],
  );
  const [route, setRoute] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      },
    ],
  });

  useEffect(() => {
    const dataLocations = selector.screenState.dataLocation;
    if (dataLocations.length > 0) {
      setcoordinates([
        dataLocations[dataLocations.length - 1].longitude,
        dataLocations[dataLocations.length - 1].latitude,
      ]);
      setRoute({
        ...route,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [...dataLocations.map(e => [e.longitude, e.latitude])],
        },
      });
      return setstate({
        ...state,
        dataGeo: dataLocations.map(e => [e.longitude, e.latitude]),
      });
    }
    return () => {};
  }, [selector.screenState.dataLocation.length]);

  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return timer > 3599
      ? `${getHours}:${getMinutes}:${getSeconds}`
      : `${getMinutes}:${getSeconds}`;
  };

  const renderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={coordinates}>
        <View
          style={{
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(102, 224, 255, 0.3)',
            borderRadius: 50,
            borderColor: 'rgba(102, 224, 255, 0.7)',
            borderWidth: 2,
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#80d4ff',
              borderRadius: 50,
              borderColor: 'rgba(102, 224, 255, 0.7)',
              borderWidth: 2,
            }}
          />
        </View>
      </MapboxGL.PointAnnotation>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {coordinates.length > 0 ? (
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.TrafficDay}
            style={styles.map}
            showsUserLocation={true}
            showsCompass={true}
            zoomControlEnabled={true}
            showsTraffic={true}
            zoomEnabled={true}
            zoomLevel={2}>
            <MapboxGL.Camera zoomLevel={16} centerCoordinate={coordinates} />
            <View>{renderAnnotations()}</View>
            <MapboxGL.ShapeSource id="line" shape={route}>
              <MapboxGL.LineLayer
                id="linelayer"
                style={{
                  lineColor: '#80d4ff',
                  lineWidth: 5,
                  lineJoin: 'round',
                  lineCap: 'round',
                }}
              />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView>
        ) : (
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Light}
            style={styles.map}
            showsUserLocation={true}
            showsCompass={true}
            zoomControlEnabled={true}
            showsTraffic={true}
            zoomEnabled={true}
            zoomLevel={2}>
            <MapboxGL.UserLocation visible={true} />
          </MapboxGL.MapView>
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          position: 'absolute',
          left: getSize.Width / 2.2,
          borderRadius: 50,
          bottom: 64,
          width: 30,
          height: 30,
        }}>
        <Text style={{ fontSize: 18, color: '#fff' }}>X</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#fff',
          zIndex: 1,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: Platform.OS === 'ios' ? getSize.scale(64) : getSize.scale(32),
          width: getSize.Width - getSize.scale(32),
          height: getSize.scale(70),
          marginHorizontal: getSize.scale(16),
          borderRadius: 20,
          borderWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: getSize.Width - getSize.scale(96),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              {selector.screenState.distance
                ? selector.screenState.distance.toFixed(2)
                : '0,00'}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
                fontStyle: 'italic',
              }}>
              km
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              {selector.initReducer.isStepTimer
                ? formatTime(selector.initReducer.isStepTimer)
                : '00:00'}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
                fontStyle: 'italic',
              }}>
              Time
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              {selector.screenState.speed ? selector.screenState.speed : '0,0'}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
                fontStyle: 'italic',
              }}>
              km/h
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: { flex: 1, zIndex: -1 },
  markerContainer: {
    alignItems: 'center',
    width: 60,
    backgroundColor: 'transparent',
    height: 70,
  },
  map: { flex: 1 },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { textAlign: 'center', paddingHorizontal: 5, flex: 1 },
  icon: { paddingTop: 10 },
});

export default StepMaps;
