import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { getSize } from '../../../common';

export const RunCheckingHeader: React.FC = () => {
  return (
    <ImageBackground style={styles.container} source={{ uri: 'ic_top_bar' }}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => {}} style={styles.backButton}>
          <Image style={styles.backImage} source={{ uri: 'ic_back' }} />
        </TouchableOpacity>
        <View style={styles.trackingContent}>
          <View style={styles.redDot} />
          <Text style={styles.statusText}>Walking</Text>
        </View>
        <View style={styles.gpsContainer}>
          <Image style={styles.gpsImage} source={{ uri: 'ic_gps' }} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getSize.Width,
    height: Platform.OS === 'ios' ? 0 : getSize.scale(60),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: getSize.scale(16),
  },
  statusText: {
    fontSize: getSize.scale(18),
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  backImage: {
    width: getSize.scale(28),
    height: getSize.scale(28),
    resizeMode: 'contain',
  },
  backButton: { justifyContent: 'center', flex: 1 },
  redDot: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: getSize.scale(8),
    width: getSize.scale(8),
    marginRight: getSize.scale(8),
  },
  trackingContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  gpsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  gpsImage: {
    width: getSize.scale(60),
    height: getSize.scale(60),
    resizeMode: 'contain',
  },
});
