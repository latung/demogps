import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Platform,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { RunCheckingContent } from './RunCheckingContent';
import { RunCheckingFooter } from './RunCheckingFooter';
import { RunCheckingHeader } from './RunCheckingHeader';
import Geolocation from 'react-native-geolocation-service';

const RunChecking: React.FC = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { longitude, latitude, speed } = position.coords;
        console.log('debug-position', position.coords);
      },
      err => {
        console.log('err', err.code, err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: Platform.OS === 'android' ? 1000 : 15000,
        maximumAge: Platform.OS ? 0 : 10000,
      },
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RunCheckingHeader />
      <ImageBackground
        style={styles.style1}
        source={{ uri: 'ic_background_running' }}>
        <RunCheckingContent />
        <RunCheckingFooter />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  style1: { flex: 7 },
});

export default RunChecking;
