import React, { useState, useRef, useEffect, forwardRef } from 'react';

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getDistance } from 'geolib';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize } from '../../../common';
import Geolocation from 'react-native-geolocation-service';
import {
  stackNavigator,
  tabNavigator,
} from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { putSession } from '../../../service';
import { cloneDeep } from 'lodash';
import RNLocation from 'react-native-location';
import * as ApiServices from '../../../service';

const arrayLocationsTest = [
  {
    longitude: 106.67111208248981,
    latitude: 10.78628223866345,
  },
  {
    longitude: 106.67064671922563,
    latitude: 10.78661817800748,
  },
  {
    longitude: 106.67055753577593,
    latitude: 10.7869745367938,
  },
  {
    longitude: 106.67055875744377,
    latitude: 10.78726353057032,
  },
  {
    longitude: 106.67091284005585,
    latitude: 10.78755265017361,
  },
  {
    longitude: 106.6714049727849,
    latitude: 10.787404400872461,
  },
  {
    longitude: 106.67191481390583,
    latitude: 10.787222611825262,
  },
];

// let countTest = 0

function Item() {
  const navigation = useNavigation();
  const selector = useSelector(state => ({
    screenState: state.initReducer.screenState,
    initReducer: state.initReducer,
    shoes: state.initReducer.shoes,
    shoeCurrentWear: state.initReducer.shoeCurrentWear,
    getConstShoe: state.initReducer.getConstShoe,
    getRunningSessionId: state.initReducer.getRunningSessionId,
    run: state.initReducer.run,
    putRunningSessionId: state.initReducer.putRunningSessionId,
    idSession: state.initReducer.idSession,
    step: state.initReducer.step,
    getShoesId: state.initReducer.getShoesId,
  }));
  const dispatch = useDispatch();
  const watchId = useRef(null);
  const countRef = useRef(selector.initReducer.isStepTimer);
  const [isPress, setisPress] = useState(false);
  const [totalKm, setTotalKm] = useState(0);
  const [reciveUsdt, setReciveUsdt] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [energy, setEnergy] = useState(selector.shoeCurrentWear.energy);
  const [timeRun, setTimeRun] = useState(0);
  const [kmhState, setKmhState] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const refIDss = useRef('');
  const refLocations = useRef({ latitude: 0, longitude: 0, time: 0 });
  const refTimeInterval = useRef(null);
  const refLocationsStore = useRef(null);

  const classShoe = selector.shoeCurrentWear.class;
  const id = selector.shoeCurrentWear._id;
  const [secondValid, setSecondValid] = useState(1);
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [runId, setRunId] = useState();
  const isPause = selector.screenState.isStepPause;
  const checkingLocationInterval = useRef(null);
  const consumedEnergy = useRef(0);

  const calculateDistanceAndSpeed = (location, timestamp) => {
    if (!location) {
      return { speed: 0, distance: 0 };
    }

    let { longitude, latitude } = location;
    if (
      !refLocations.current?.latitude ||
      !refLocations.current?.longitude ||
      !refLocations.current?.time
    ) {
      refLocations.current.time = timestamp;
      refLocations.current.latitude = latitude;
      refLocations.current.longitude = longitude;
      return { speed: 0, distance: 0 };
    }

    const newDistance =
      getDistance(
        {
          latitude: Number(refLocations.current.latitude),
          longitude: Number(refLocations.current.longitude),
        },
        {
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
        0.1,
      ) || 0;

    const timeChangeSeconds = (timestamp - refLocations.current?.time) / 1000;
    // const speed = newDistance > 1 ? (newDistance / timeChangeSeconds) * 3.6 : 0;
    const speed =
      timeChangeSeconds > 0 ? (newDistance / timeChangeSeconds) * 3.6 : 0;

    refLocations.current.time = timestamp;
    refLocations.current.latitude = latitude;
    refLocations.current.longitude = longitude;

    return {
      // speed: speed < 1 ? 0 : speed,
      speed: speed,
      distance: newDistance / 1000,
      timeChangeSeconds: Math.round(timeChangeSeconds),
    };
  };

  const _startUpdatingLocation = () => {
    if (!isPause) {
      checkingLocationInterval.current = Geolocation.watchPosition(
        position => {
          const {
            speed,
            distance = 0,
            timeChangeSeconds,
          } = calculateDistanceAndSpeed(position.coords, position.timestamp);
          const { longitude, latitude } = position.coords || {};
          setCurrentSpeed(speed);
          setTotalKm(distanceOld => distanceOld + distance);

          const isSpeedValid =
            (speed > 1 && speed <= 6 && classShoe === 'walker') ||
            (classShoe === 'runner' && speed > 6 && speed <= 20);

          if (isSpeedValid) {
            setSecondValid(e => e + timeChangeSeconds);
            // updateRunningSession({ runtime: timeChangeSeconds * 1000 });
          }

          if (speed > 0) {
            refLocationsStore.current = [
              ...refLocationsStore.current,
              { latitude: Number(latitude), longitude: Number(longitude) },
            ];
          } else if (selector.screenState.dataLocation.length === 0) {
            refLocationsStore.current = [
              {
                latitude: Number(latitude),
                longitude: Number(longitude),
              },
            ];
          }

          dispatch(
            _action.changeScreenState({
              dataLocation: cloneDeep(refLocationsStore.current),
            }),
          );
        },
        err => {
          console.log('err', err.code, err.message);
          reject(err.code);
        },
        {
          enableHighAccuracy: true,
          timeout: Platform.OS === 'android' ? 1000 : 15000,
          maximumAge: 10000,
          interval: 1000,
          distanceFilter: 1,
        },
      );
    }
    // RNLocation.subscribeToLocationUpdates(locations => {
    //   console.log('debug-locations', locations.length)
    //   const { speed, distance } = calculateDistanceAndSpeed(locations[0]);
    //   setCurrentSpeed(speed.toFixed(2));
    //   setTotalKm((distanceOld) => distanceOld + distance)

    //   if (classShoe === 'walker') {
    //     if (
    //       locationCurrent?.speed * 3.6 > 1 &&
    //       locationCurrent?.speed * 3.6 <= 6
    //     ) {
    //       setSecondValid(e => e + 1);
    //     }
    //   } else if (classShoe === 'runner') {
    //     if (
    //       locationCurrent?.speed * 3.6 > 6 &&
    //       locationCurrent?.speed * 3.6 <= 20
    //     ) {
    //       setSecondValid(e => e + 1);
    //       setEnergy(e => e - 1);
    //     }
    //   }
    //   if (runId && secondValid % 300 === 0) {
    //     getRunningSession(runId);
    //     setEnergy(e => e - 1);
    //   }
    // });
  };

  console.log('debug-total-speed', currentSpeed.toFixed(2));

  const startRunning = () => {
    ApiServices.startRunning({ shoesId: id })
      .then(res => {
        if (res?.data?._id) {
          console.log('assssssssssssssssssss',res?.data?._id);
          setRunId(res?.data?._id);
          getRunningSession(res?.data?._id);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const getRunningSession = id => {
    ApiServices.getRunningSession(id)
      .then(res => {
        if (res?.data) {
          if (res?.data?.status === 'ended') {
            setModalVisible(false);
            setisPress(false);
            dispatch(_action.isStepTimer(0));
            dispatch(
              _action.changeScreenState({
                ...selector.screenState,
                dataLocation: [],
                distance: '0,00',
                speed: 0,
                isStepPause: false,
                isStepStart: false,
                isScreenCongrats: true,
                totalDistance: totalKm.toFixed(2),
                moneyEarned: res?.data?.earned,
                energy,
                timeFinish: new Date(),
                totalTime: formatTime(timeRun),
                totalSecond: selector.initReducer.isStepTimer,
              }),
            );
            if (countRef.current) {
              clearTimeout(countRef.current);
            }
            clearInterval(countRef.current);
          }
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const updateRunningSession = async body => {
    ApiServices.updateRunningSession(runId, body)
      .then(res => {
        setMoneyEarned(res?.data?.earned);
        if (res?.data?.status === 'ended') {
          getRunningSession(runId);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  useEffect(() => startRunning(), [id]);
  useEffect(() => {
    if (energy === 0) {
      handleStepStop();
    }
  }, [energy]);

  const mainFuncThread = () => {
    refTimeInterval.current = setInterval(() => {
      setTimeRun(preSta => preSta + 1);
      _startUpdatingLocation();
      // handleLocationsFunc();
    }, 1000);
  };

  const onClearCheckingLocation = () => {
    Geolocation.clearWatch(checkingLocationInterval.current);
    checkingLocationInterval.current = null;
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(a);
  //     setSecondValid(e => e + 1);
  //   }, 1000)
  // }, []);

  // useEffect(() => {
  //   if (
  //     runId &&
  //     secondValid > 0 &&
  //     Math.floor(secondValid / 30) > consumedEnergy.current
  //   ) {
  //     fetch(
  //       `https://us-central1-safaty-e20ba.cloudfunctions.net/movearn_teststep?a=${runId}&b=${secondValid}&c=${consumedEnergy.current}&d=d&e=e`,
  //     ).then(() => {
  //       console.log('ok');
  //     });
  //     consumedEnergy.current = Math.floor(secondValid / 30);
  //     setEnergy(e => e - 1);
  //     updateRunningSession({
  //       runtime: 300000,
  //       status: 'running',
  //       totalDistance: 5000,
  //       paths: arrayLocationsTest,
  //     });
  //     console.log({
  //       runtime: 300000,
  //       status: 'running',
  //       totalDistance: 5000,
  //       paths: arrayLocationsTest,
  //     });
  //   }
  // }, [secondValid]);

  useEffect(() => {
    if (
      runId &&
      secondValid > 0 &&
      Math.floor(secondValid / 300) > consumedEnergy.current
    ) {
      // fetch(
      //   `https://us-central1-safaty-e20ba.cloudfunctions.net/movearn_teststep?a=${runId}&b=${secondValid}&c=${consumedEnergy.current}&d=d&e=e`,
      // ).then(() => {
      //   console.log('ok');
      // });
      consumedEnergy.current = Math.floor(secondValid / 300);
      setEnergy(e => e - 1);
      updateRunningSession({
        runtime: 300000,
        status: 'running',
        totalDistance: Number(totalKm | 0).toFixed(2),
        paths: refLocationsStore.current,
      });
    }
  }, [secondValid]);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 2,
      interval: 1000,
      fastestInterval: 5000,
      desiredAccuracy: {
        ios: 'best',
        android: 'highAccuracy',
      },
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
        rationale: {
          title: 'Location permission',
          message: 'We use your location to demo the library',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(granted => {
      if (granted) {
        _startUpdatingLocation();
      }
    });
    mainFuncThread();
    return () => {
      onClearCheckingLocation();
      clearInterval(refTimeInterval.current);
    };
  }, []);

  useEffect(() => {
    dispatch(_action.isStepTimer(timeRun));
  }, [timeRun]);

  useEffect(() => {
    dispatch(
      _action.changeScreenState({
        distance: totalKm,
      }),
    );
  }, [totalKm]);

  useEffect(() => {
    refLocationsStore.current = selector.screenState.dataLocation;
  }, [selector.screenState.dataLocation?.length]);

  // const handleLocationsFunc = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       let { longitude, latitude, speed } = position.coords;
  //       const dateNow = Date.now();
  //       if (!refLocations.current.time) {
  //         refLocations.current.time = dateNow;
  //         return;
  //       }
  //       const newDistance = getPreciseDistance(
  //         {
  //           latitude: Number(refLocations.current.latitude),
  //           longitude: Number(refLocations.current.longitude),
  //         },
  //         {
  //           latitude: Number(latitude),
  //           longitude: Number(longitude),
  //         },
  //       );
  //       const timeChangeSeconds = (dateNow - refLocations.current.time) / 1000;
  //       const distanceKm = newDistance / 1000;
  //       const vtKmH = (newDistance / timeChangeSeconds) * 3.6;
  //       setKmhState(vtKmH);

  //       if (speed > 0) {
  //         const dataLocationDup = refLocationsStore.current?.concat([
  //           {
  //             latitude: Number(latitude),
  //             longitude: Number(longitude),
  //           },
  //         ]);
  //         dispatch(
  //           _action.changeScreenState({
  //             ...selector.screenState,
  //             dataLocation: cloneDeep(dataLocationDup),
  //           }),
  //         );
  //       } else if (selector.screenState.dataLocation.length == 0) {
  //         dispatch(
  //           _action.changeScreenState({
  //             ...selector.screenState,
  //             dataLocation: [
  //               {
  //                 latitude: Number(latitude),
  //                 longitude: Number(longitude),
  //               },
  //             ],
  //           }),
  //         );
  //       }
  //       let EARN_PER_ENERGY_BY_WEEK =
  //         selector.getConstShoe.data.EARN_PER_ENERGY_BY_WEEK[
  //           selector.shoeCurrentWear.quality
  //         ][
  //           Math.floor(
  //             (new Date().getTime() -
  //               new Date().getTime(selector.shoeCurrentWear.activatedDate)) /
  //               (1000 * 60 * 60 * 24 * 7),
  //           )
  //         ];

  //       let KM_PER_ENERGY =
  //         selector.getConstShoe.data.KM_PER_ENERGY[
  //           selector.shoeCurrentWear.class
  //         ];
  //       let { min, max } =
  //         selector.getConstShoe.data.SPEED_RANGE[
  //           selector.shoeCurrentWear.quality
  //         ];

  //       dispatch(_action.getShoesId({ _id: selector.shoeCurrentWear._id }));
  //       dispatch(_action.shoeCurrentWear(selector.getShoesId.data));
  //       setEnergy(selector.shoeCurrentWear.energy);

  //       let receivedUSDTt = EARN_PER_ENERGY_BY_WEEK / KM_PER_ENERGY;
  //       if (receivedUSDTt > 0) {
  //         receivedUSDTt = receivedUSDTt;
  //       } else {
  //         receivedUSDTt = 0;
  //       }
  //       CheckSpeed(refIDss.current, vtKmH, receivedUSDTt, min, max, distanceKm);
  //       refLocations.current.latitude = latitude;
  //       refLocations.current.longitude = longitude;
  //       refLocations.current.time = dateNow;
  //     },
  //     error => {
  //       console.log(error.code, error.message);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 1000,
  //       maximumAge: 1000,
  //       distanceFilter: 3,
  //     },
  //   );
  // };

  // const putRunningSessionId = status => {
  //   if (selector.run) {
  //     dispatch(
  //       _action.putRunningSessionId({
  //         distance: selector.screenState.distance,
  //         status: status,
  //         _id: selector.run.data._id,
  //       }),
  //     );
  //   }
  // };
  // const CheckSpeed = (idSs, speed, receivedUSDTt, min, max, distanceKm) => {
  //   const CurrentSpeed = speed; //(speed * 3.6);
  //   dispatch(
  //     _action.changeScreenState({
  //       speed: CurrentSpeed,
  //     }),
  //   );
  //   const kmms = distanceKm;

  //   if (CurrentSpeed >= min && CurrentSpeed <= max) {
  //     setTotalKm(a => a + distanceKm);
  //     setReciveUsdt(a => a + receivedUSDTt * distanceKm);
  //     putSession(idSs, kmms);
  //   }
  // };

  // const getSpeedRange = () => {
  //   let result = '';
  //   if (selector.getConstShoe) {
  //     const speedRange = selector.getConstShoe.data.SPEED_RANGE;
  //     const classShoe = selector.shoeCurrentWear.class;

  //     const SpeedKey = Object.keys(speedRange);
  //     const SpeedValue = Object.values(speedRange);

  //     for (let i = 0; i < SpeedKey.length; i++) {
  //       const element = SpeedKey[i];
  //       if (element === 'common') {
  //         result = SpeedValue[i];
  //       }
  //     }
  //   }
  //   return result;
  // };
  // TIMER
  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return timer > 3599
      ? `${getHours}:${getMinutes}:${getSeconds}`
      : `${getMinutes}:${getSeconds}`;
  };
  const handlePause = () => {
    clearInterval(refTimeInterval.current);
    clearInterval(countRef.current);
    onClearCheckingLocation();
    setisPress(false);
    dispatch(
      _action.changeScreenState({
        ...selector.screenState,
        isStepStart: false,
        isStepPause: true,
      }),
    );
  };
  const handleResume = () => {
    mainFuncThread();
    _startUpdatingLocation();
    setisPress(false);
    dispatch(
      _action.changeScreenState({
        ...selector.screenState,
        isStepPause: false,
        isStepStart: false,
      }),
    );
    if (countRef.current) {
      clearTimeout(countRef.current);
    }
    countRef.current = setInterval(() => {
      dispatch(_action.isStepTimer(++selector.initReducer.isStepTimer));
    }, 1000);
  };

  const handleStepStop = () => {
    updateRunningSession({ status: 'ended' });
    // navigation.navigate(tabNavigator.TAB_HOME);
  };

  return (
    <View style={{ flex: 1, width: getSize.Width }}>
      {/* Header */}
      <View style={{ flex: 2 / 1.5 }}>
        {/* HeaderMini */}
        <View
          style={{
            flex: 1 / 2.3,
            minHeight: Platform.OS === 'ios' ? 0 : getSize.scale(30),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: getSize.scale(16),
          }}>
          <TouchableOpacity
            onPress={() => {
              clearInterval(countRef.current);
              setisPress(false);
              dispatch(
                _action.changeScreenState({
                  ...selector.screenState,
                  isStepStart: false,
                  isStepPause: true,
                }),
              );
              // return navigation.goBack();
              return navigation.navigate(tabNavigator.TAB_HOME);
            }}
            style={{ flex: 2, justifyContent: 'center' }}>
            <Image
              style={{
                width: getSize.scale(28),
                height: getSize.scale(28),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_back' }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                borderRadius: 50,
                height: getSize.scale(8),
                width: getSize.scale(8),
                marginRight: getSize.scale(8),
              }}
            />
            <Text
              style={{
                fontSize: getSize.scale(18),
                color: '#000',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              {selector.screenState.isStepPause ? 'Pause' : 'Moonwalking'}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{
                width: getSize.scale(60),
                height: getSize.scale(60),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_gps' }}
            />
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={{ flex: 7 }}>
        <View
          style={{
            flex: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AnimatedCircularProgress
            size={getSize.scale(294)}
            width={18}
            fill={(currentSpeed * 100) / 20} // {selector.screenState.speed} speedMin:8 - fillMin:0 : speedMax:20 - fillMax:100
            tintColor="#2EDBDC" // "#00e0ff"
            arcSweepAngle={280}
            rotation={220}
            lineCap="round"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="rgba(221, 223, 232, 1)">
            {speed => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'rgba(125, 131, 164, 1)',
                      fontSize: getSize.scale(10),
                      fontWeight: 'bold',
                    }}>
                    {`D I S T A N C E`}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(64),
                      color: '#2EDBDC',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                    }}>
                    {totalKm ? totalKm.toFixed(2) : 0}
                  </Text>
                  <Text
                    style={{
                      fontSize: getSize.scale(18),
                      color: 'rgba(167, 155, 191, 1)',
                      marginTop: getSize.scale(8),
                      fontStyle: 'italic',
                    }}>
                    {`Kilometers`}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: getSize.scale(8),
                  }}>
                  <Image
                    style={{
                      width: getSize.scale(22),
                      height: getSize.scale(22),
                      resizeMode: 'contain',
                    }}
                    source={{ uri: 'ic_coin_t' }}
                  />
                  <Text
                    style={{
                      fontSize: getSize.scale(24),
                      marginLeft: getSize.scale(8),
                      color: '#000',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      color: '#ffffff',
                    }}>
                    {`${Number(moneyEarned ?? '0').toFixed(2)}`}
                  </Text>
                </View>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
        <View
          style={{
            flex: 2,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{
                width: getSize.scale(22),
                height: getSize.scale(22),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_clock_grey' }}
            />
            <Text
              style={{
                fontSize: getSize.scale(24),
                color: '#000',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(11),
                color: '#ffffff',
              }}>
              {`${formatTime(timeRun)}`}
            </Text>
            {/* <Text
              style={{
                fontSize: getSize.scale(14),
                color: '#A79BBF',
                // fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(8),
              }}>
              time
            </Text> */}
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{
                width: getSize.scale(24),
                height: getSize.scale(24),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_fast' }}
            />
            <Text
              style={{
                fontSize: getSize.scale(24),
                color: '#000',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(11),
                color: '#ffffff',
              }}>
              {currentSpeed?.toFixed(2) || '0.00'}
            </Text>
            <Text
              style={{
                fontSize: getSize.scale(14),
                color: '#A79BBF',
                // fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(8),
              }}>
              km/h
            </Text>
            {/* <Text
              style={{
                fontSize: getSize.scale(14),
                color: '#A79BBF',
                // fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(8),
              }}>
              {classShoe + ' ' + secondValid}
            </Text> */}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: getSize.scale(24),
                height: getSize.scale(24),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_ray' }}
            />
            <Text
              style={{
                fontSize: getSize.scale(24),
                color: '#000',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(11),
                color: '#ffffff',
              }}>
              {energy || 0}
            </Text>
            {/* <Text
              style={{
                fontSize: getSize.scale(14),
                color: '#A79BBF',
                // fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: getSize.scale(8),
              }}>
              energy
            </Text> */}
          </View>
        </View>
      </View>

      {/* Footer */}
      {!selector.screenState.isStepPause ? (
        <View
          style={{
            flex: 1,
            marginTop: getSize.scale(32),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            disabled={
              Platform.OS === 'ios' &&
              selector.screenState.dataLocation.length < 1
            }
            onPress={() => navigation.navigate(stackNavigator.STEP_MAPS)}>
            <Image
              style={{
                width: getSize.scale(42),
                height: getSize.scale(42),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_run_map' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePause}>
            <Image
              style={{
                width: getSize.scale(64),
                height: getSize.scale(64),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_btn_pause' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePause();
              return navigation.navigate(tabNavigator.TAB_BAG);
            }}>
            <Image
              style={{
                width: getSize.scale(38),
                height: getSize.scale(38),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_run_shoes' }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: getSize.scale(32),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            // onLongPress={handleStepStop}
            onLongPress={() => setModalVisible(true)}
            onPress={() => setisPress(true)}>
            {isPress ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#000',
                  padding: getSize.scale(4),
                  borderRadius: 20,
                  width: '120%',
                  top: getSize.scale(-32),
                  right: getSize.scale(-8),
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: getSize.scale(10),
                  }}>
                  Press Longer
                </Text>
              </View>
            ) : null}
            <Image
              style={{
                width: getSize.scale(64),
                height: getSize.scale(64),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_btn_stop' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResume}>
            <Image
              style={{
                width: getSize.scale(64),
                height: getSize.scale(64),
                resizeMode: 'contain',
              }}
              source={{ uri: 'ic_btn_play' }}
            />
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(89, 89, 89, 0.6)',
            }}>
            <View
              style={{
                width: getSize.Width - getSize.scale(48),
                height: getSize.Width / 2,
                backgroundColor: 'white',
                borderRadius: 20,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                    padding: getSize.scale(16),
                  }}>
                  <Text
                    style={{
                      marginTop: getSize.scale(16),
                      textAlign: 'center',
                      fontSize: getSize.scale(18),
                      fontWeight: 'bold',
                    }}>
                    {`Misled`.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      marginTop: getSize.scale(18),
                      textAlign: 'center',
                      fontSize: getSize.scale(14),
                    }}>
                    Are you still running? Please confirm to continue
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image
                      style={{
                        width: getSize.scale(132),
                        height: getSize.scale(40),
                        resizeMode: 'contain',
                      }}
                      source={{ uri: 'ic_btn_run_small' }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleStepStop}>
                    <Image
                      style={{
                        width: getSize.scale(132),
                        height: getSize.scale(40),
                        resizeMode: 'contain',
                      }}
                      source={{ uri: 'ic_btn_run_small_red' }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default forwardRef(Item);
