import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize } from '../../../common';
import { stackNavigator } from '../../../navigation/nameNavigator';

export const CircularProgress: React.FC = () => {
  const [countDown, setCountdown] = useState<number>(1);

  useEffect(() => {
    let interval = setInterval(() => {
      if (countDown > 0) {
        setCountdown(item => {
          if (item === 5) {
            //  navigation.replace(stackNavigator.STEP);

            return item;
          }
          return ++item;
        });
      }
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const renderFill = () => {
    let fill = 0;
    switch (countDown) {
      case 1:
        fill = 33;
        break;
      case 2:
        fill = 66;
        break;
      default:
        fill = 100;
        break;
    }

    return fill;
  };

  const displayCountdown = countDown < 4;

  return (
    <View style={styles.container}>
      {displayCountdown && (
        <AnimatedCircularProgress
          size={getSize.scale(280)}
          width={10}
          fill={renderFill()}
          tintColor="#2EDBDC"
          rotation={0}
          lineCap="round"
          backgroundColor="rgba(118, 118, 118, 0.3)">
          {fill => (
            <View style={styles.countdownContentContainer}>
              <Text style={styles.countdownContent}>{countDown}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      )}

      {!displayCountdown && (
        <View style={styles.textContainer}>
          <Text style={styles.countdownEndContent}>START</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: '10%' },
  countdownContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdownContent: {
    fontSize: getSize.scale(140),
    color: '#2EDBDC',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontStyle: 'italic',
  },
  countdownEndContent: {
    fontSize: getSize.scale(60),
    color: '#2EDBDC',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontStyle: 'italic',
  },
  textContainer: { marginTop: '20%' },
});
