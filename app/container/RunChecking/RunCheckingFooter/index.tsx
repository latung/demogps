import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getSize } from '../../../common';

export const RunCheckingFooter: React.FC = () => {
  return (
    <View style={styles.style1}>
      <TouchableOpacity disabled={false} onPress={() => {}}>
        <Image style={styles.style2} source={{ uri: 'ic_run_map' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.style3} source={{ uri: 'ic_btn_pause' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.style4} source={{ uri: 'ic_run_shoes' }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    flex: 1,
    marginTop: getSize.scale(32),
    marginBottom: getSize.scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  style2: {
    width: getSize.scale(42),
    height: getSize.scale(42),
    resizeMode: 'contain',
  },
  style3: {
    width: getSize.scale(64),
    height: getSize.scale(64),
    resizeMode: 'contain',
  },
  style4: {
    width: getSize.scale(38),
    height: getSize.scale(38),
    resizeMode: 'contain',
  },
});
