import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import { getSize } from '../../common';
import { CircularProgress } from './CircularProgress';

const RunCountdown: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: 'ic_background_countdown' }}
      />
      <Text style={styles.guideText}>
        Game reminder Lorem Ipsum is simply dummy text of the printing and
        typesetting industry
      </Text>
      <CircularProgress />
      <TouchableOpacity style={styles.touchableContainer}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  imageBackground: {
    width: getSize.Width,
    height: getSize.Height,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: -2,
  },
  guideText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#FFFFFF',
    marginTop: '30%',
    width: 285,
    textAlign: 'center',
  },
  skipText: {
    color: '#2EDBDC',
    fontFamily: 'Montserrat',
    fontSize: getSize.scale(14),
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 22,
  },
  touchableContainer: {
    position: 'absolute',
    bottom: getSize.scale(60),
    right: getSize.scale(40),
  },
});

export default RunCountdown;
