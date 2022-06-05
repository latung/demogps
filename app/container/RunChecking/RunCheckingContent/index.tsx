import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize } from '../../../common';

export const RunCheckingContent: React.FC = () => {
  return (
    <View style={styles.style1}>
      <View style={styles.style2}>
        <AnimatedCircularProgress
          size={getSize.scale(294)}
          width={18}
          fill={20} // {selector.screenState.speed} speedMin:8 - fillMin:0 : speedMax:20 - fillMax:100
          tintColor="#2EDBDC" // "#00e0ff"
          arcSweepAngle={280}
          rotation={220}
          lineCap="round"
          backgroundColor="rgba(221, 223, 232, 1)">
          {speed => (
            <View style={styles.style3}>
              <View style={styles.style4}>
                <Text style={styles.style5}>{`D I S T A N C E`}</Text>
              </View>
              <View style={styles.style6}>
                <Text style={styles.style7}>{100}</Text>
                <Text style={styles.style8}>{`Kilometers`}</Text>
              </View>
              <View style={styles.style9}>
                <Image style={styles.style10} source={{ uri: 'ic_coin_t' }} />
                <Text style={styles.style11}>{`1111`}</Text>
              </View>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.style12}>
        <View style={styles.style13}>
          <Image style={styles.style14} source={{ uri: 'ic_clock_grey' }} />
          <Text style={styles.style15}>{`00:00`}</Text>
          <Text style={styles.style16}>time</Text>
        </View>

        <View style={styles.style17}>
          <Image style={styles.style18} source={{ uri: 'ic_fast' }} />
          <Text style={styles.style19}>{'0.00'}</Text>
          <Text style={styles.style20}>km/h</Text>
        </View>
        <View style={styles.style21}>
          <Image style={styles.style22} source={{ uri: 'ic_ray' }} />
          <Text style={styles.style23}>{0}</Text>
          <Text style={styles.style24}>energy</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: { flex: 7 },
  style2: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  style4: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  style5: {
    color: 'rgba(125, 131, 164, 1)',
    fontSize: getSize.scale(10),
    fontWeight: 'bold',
  },
  style6: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style7: {
    fontSize: getSize.scale(64),
    color: '#2EDBDC',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  style8: {
    fontSize: getSize.scale(18),
    color: 'rgba(167, 155, 191, 1)',
    marginTop: getSize.scale(8),
    fontStyle: 'italic',
  },
  style9: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: getSize.scale(8),
  },
  style10: {
    width: getSize.scale(22),
    height: getSize.scale(22),
    resizeMode: 'contain',
  },
  style11: {
    fontSize: getSize.scale(24),
    marginLeft: getSize.scale(8),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  style12: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  style13: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  style14: {
    width: getSize.scale(22),
    height: getSize.scale(22),
    resizeMode: 'contain',
  },
  style15: {
    fontSize: getSize.scale(24),
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: getSize.scale(11),
    color: '#ffffff',
  },
  style16: {
    fontSize: getSize.scale(14),
    color: '#A79BBF',
    fontStyle: 'italic',
    marginTop: getSize.scale(8),
  },
  style17: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  style18: {
    width: getSize.scale(24),
    height: getSize.scale(24),
    resizeMode: 'contain',
  },
  style19: {
    fontSize: getSize.scale(24),
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: getSize.scale(11),
    color: '#ffffff',
  },
  style20: {
    fontSize: getSize.scale(14),
    color: '#A79BBF',
    // fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: getSize.scale(8),
  },
  style21: {
    flex: 1,
    alignItems: 'center',
  },
  style22: {
    width: getSize.scale(24),
    height: getSize.scale(24),
    resizeMode: 'contain',
  },
  style23: {
    fontSize: getSize.scale(24),
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: getSize.scale(11),
    color: '#ffffff',
  },
  style24: {
    fontSize: getSize.scale(14),
    color: '#A79BBF',
    fontStyle: 'italic',
    marginTop: getSize.scale(8),
  },
});
