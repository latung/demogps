import React, { useState, useCallback, useRef, useEffect, forwardRef } from 'react';
import
{
    View,
    Image,
    TouchableOpacity,
    Text,
    Platform,
    ImageBackground,
    Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getPreciseDistance } from 'geolib';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getSize, location } from '../../../common';
import Geolocation from 'react-native-geolocation-service';
import { stackNavigator, tabNavigator } from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import { createSession, getSession, putSession, testStop } from '../../../service';
let idSs = "";
let clearAS = '';
let ta = 0, tb = 0, tc = 0, td = 0;
// console.log('====================================');
// console.log('0000000000000000000000000000000000');
// console.log('====================================');
function Item()
{
    const navigation = useNavigation();
    const selector = useSelector((state) => ({
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
    const [fill, setfill] = useState(false);
    const [stepss, setStepss] = useState(0);
    const [timeShow, setTimeShow] = useState(0);
    const [kmh, setKmh] = useState(0);
    const [totalKm, setTotalKm] = useState(0);
    const [reciveUsdt, setReciveUsdt] = useState(0);
    const [modalVisible, setmodalVisible] = useState(false);
    const [energy, setEnergy] = useState(selector.shoeCurrentWear.energy);
    // console.log('====================================');
    // console.log(1111111111111111111111111111111111);
    // console.log('====================================');
    const [state, setstate] = useState({ latitude: 0, longitude: 0 });
    const image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';


    // useEffect(() =>
    // {
    //     if (selector.initReducer.isStepTimer) {
    //         return _getCurrentLocation();
    //     }
    //     return () =>
    //     {
    //         Geolocation.clearWatch(watchId.current);
    //     };
    // }, [selector.initReducer.isStepTimer]);

    // Start Step Timer
    useEffect(() =>
    {
        // if (selector.screenState.isStepStart) {
        //     // setpause(false);
        run();
        //     // testStop('newDistance', 'selector.initReducer.isStepTimer', Date.now(), 'hi')
        //     if (countRef.current) {
        //         clearTimeout(countRef.current);
        //         if (clearAS) {
        //             console.log(`clearAS`, clearAS);
        //             clearInterval(clearAS);
        //         }
        //     }
        //     countRef.current = setInterval(() =>
        //     {
        //         // settime((timer) => timer + 1);
        //         dispatch(_action.isStepTimer(++selector.initReducer.isStepTimer));
        //     }, 1000);
        //     return dispatch(
        //         _action.changeScreenState({
        //             ...selector.screenState,
        //             // isStepStart: false,
        //             isStepPause: false
        //         })
        //     );
        // }
        // return () => { };
    }, []);

    // ============================================

    // =============================================
    const run = async () =>
    {

        // console.log('dateCreate iss', selector.shoeCurrentWear._id);
        // console.log("runnnnnnnnnnnnnnnnnnnnnnnnnn");
        if (selector.shoeCurrentWear) {
            if (selector.idSession == "" || selector.idSession == undefined || selector.idSession == null) {
                // console.log('==================================== if 1');
                let dataCreate = await createSession(selector.shoeCurrentWear._id);
                // console.log('dataCreate iss code', dataCreate);
                // console.log('dataCreate iss Number(dataCreate.code) == 200', Number(dataCreate.code) == 200);
                if (Number(dataCreate.code) == 200) {
                    // dispatch(_action.idSession(dataCreate.data._id));
                    // console.log('====================================');
                    // console.log('dataCreate.data._id ', dataCreate.data._id);
                    // console.log('====================================');
                    idSs = dataCreate.data._id
                    // console.log(`idSs`, idSs);
                }
            } else {
                // console.log('==================================== if else', selector.idSession);
                idSs = selector.idSession;
                // setIdSs(selector.idSession)
            }

            // console.log(`dataSession iss `, dataSession);

            clearAS = setInterval(async () =>
            {

                let dataSession = await getSession(idSs);
                // console.log('====================================');
                // console.log('dataSession is ', dataSession);
                // console.log('====================================');
                if (dataSession.data.status != "running") {

                    clearInterval(clearAS);
                    run();
                }
                // console.log('======================00000====');
                let EARN_PER_ENERGY_BY_WEEK = selector.getConstShoe.data.EARN_PER_ENERGY_BY_WEEK[selector.shoeCurrentWear.quality][Math.floor((new Date().getTime() - new Date().getTime(selector.shoeCurrentWear.activatedDate)) / (1000 * 60 * 60 * 24 * 7))];

                let KM_PER_ENERGY = selector.getConstShoe.data.KM_PER_ENERGY[selector.shoeCurrentWear.class];
                // console.log('======================1111====', );
                // console.log(`selector.getConstShoe.data.SPEED_RANGE[selector.shoeCurrentWear.class].min`, selector.getConstShoe.data.SPEED_RANGE[selector.shoeCurrentWear.class].min);
                let { min, max } = selector.getConstShoe.data.SPEED_RANGE[selector.shoeCurrentWear.quality];
                // console.log(`min, max`, min, max);
                // console.log("EARN_PER_ENERGY_BY_WEEK", EARN_PER_ENERGY_BY_WEEK);
                // console.log("KM_PER_ENERGY", KM_PER_ENERGY);
                // console.log("receivedUSDT", receivedUSDT);
                // dispatch(_action.changeScreenState({ 16.1 -- 1.2
                //     ...selector.screenState,
                //     distance: Number(dataSession.data.currentDistance).toFixed(2),
                //     receivedUSDT: receivedUSDT,
                // }));
                dispatch(
                    _action.getShoesId({ _id: selector.shoeCurrentWear._id })
                );
                dispatch(
                    _action.shoeCurrentWear(selector.getShoesId.data)
                );
                setEnergy(selector.shoeCurrentWear.energy)
                // let time_ = setInterval(() =>
                // {

                //     if (!selector.getShoesId.isFetching) {
                //         clearInterval(time_)
                //     }
                //     if (selector.getShoesId.isSuccess) {
                //         clearInterval(time_);
                //         dispatch(
                //             _action.shoeCurrentWear(selector.getShoesId.data)
                //         );

                //     }
                // }, 300);

                Geolocation.getCurrentPosition(
                    (position) =>
                    {
                        // console.log(position);
                        let { longitude, latitude, speed } = position.coords;
                        if (speed > 0) {
                            dispatch(
                                _action.changeScreenState({
                                    ...selector.screenState,
                                    dataLocation: [
                                        ...selector.screenState.dataLocation,
                                        {
                                            latitude: Number(latitude),
                                            longitude: Number(longitude)
                                        }
                                    ]
                                })
                            );
                        } else if (selector.screenState.dataLocation.length == 0) {
                            dispatch(
                                _action.changeScreenState({
                                    ...selector.screenState,
                                    dataLocation: [
                                        ...selector.screenState.dataLocation,
                                        {
                                            latitude: Number(latitude),
                                            longitude: Number(longitude)
                                        }
                                    ]
                                })
                            );
                        }


                        // testStop(longitude, latitude, speed, Date.now(), 'sdddsesss')
                        // console.log('====================================');
                        // console.log('chắc chắn đã run', speed);
                        // console.log('====================================');
                        // const newDistance = getPreciseDistance(
                        //     {
                        //         latitude: state.latitude,
                        //         longitude: state.longitude
                        //     },
                        //     {
                        //         latitude: Number(watchId.current.latitude),
                        //         longitude: Number(watchId.current.longitude)
                        //     }
                        // );
                        // ta += Math.floor(speed / 0.5);
                        // tb += (speed / 1000);
                        // tc = (speed * 3.6).toFixed(2);
                        // td = speed;
                        let receivedUSDTt = EARN_PER_ENERGY_BY_WEEK / KM_PER_ENERGY;
                        if (receivedUSDTt > 0) {
                            receivedUSDTt = receivedUSDTt
                        } else {
                            receivedUSDTt = 0
                        }
                        setStepss(a => a + Math.floor(speed / 0.5))
                        setKmh((speed * 3.6))
                        CheckSpeed(idSs, speed, receivedUSDTt, min, max);
                        setTimeShow(a => a + 1)



                        // dispatch(
                        //     _action.changeScreenState({
                        //         ...selector.screenState,
                        //         dataLocation: [
                        //             ...selector.screenState.dataLocation,
                        //             {
                        //                 latitude: Number(latitude),
                        //                 longitude: Number(longitude)
                        //             }
                        //         ],
                        //         steps: selector.screenState.steps + Math.floor(speed / 0.5),
                        //         totalKm: selector.screenState.totalKm + (speed / 1000),
                        //         distance: (speed * 3.6).toFixed(2),
                        //         speed: speed ? speed : 0
                        //     })
                        // );
                        // ta = longitude;
                        // tb = latitude;

                    },
                    (error) =>
                    {
                        // See error code charts below.
                        // testStop('longitude', 'latitude', 'speed', 'Date.now()', 'sdddsesss')
                        console.log(error.code, error.message);
                        setTimeShow(a => a + 1)
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 1000,
                        maximumAge: 1000
                    }
                );
                // tc += 1;
            }, 1000);
            // setInterval(() =>
            // {
            //     putSession(idSs, 0.1);
            // }, 3000);
            // let abcs = await _action.run({ shoesId: selector.shoeCurrentWear._id });
            // console.log(`abcs is `, abcs);
            // dispatch(
            //     _action.run({ shoesId: selector.shoeCurrentWear._id }));
        }

    }


    const putRunningSessionId = (status) =>
    {
        console.log("run updateeeeeeeeeeeeeeeeeeeeeeeeee");

        if (selector.run) {
            dispatch(
                _action.putRunningSessionId({ distance: selector.screenState.distance, status: status, _id: selector.run.data._id }));
        }

    }
    const CheckSpeed = (idSs, speed, receivedUSDTt, min, max) =>
    {
        const CurrentSpeed = (speed * 3.6);//selector.screenState.speed;
        const kmms = speed / 1000;//selector.screenState.distance;
        // const ConstSpeed = getSpeedRange();
        // const min = ConstSpeed && ConstSpeed.min ? ConstSpeed.min : 0
        // const max = ConstSpeed && ConstSpeed.max ? ConstSpeed.max : 0
        console.log("run updateeeeeeeeeeeeeeeeeeeeeeeeee", min, max);
        //
        // console.log(`selector`, selector.getConstShoe.data.SPEED_RANGE[selector.shoeCurrentWear.quality]);
        // let { min, max } = selector.getConstShoe.data.SPEED_RANGE[selector.shoeCurrentWear.quality]
        if (CurrentSpeed >= min && CurrentSpeed <= max) {
            setTotalKm(a => a + (speed / 1000))
            setReciveUsdt(a => a + (receivedUSDTt * (speed / 1000)))
            putSession(idSs, kmms);
            // testStop(idSs, kmms, CurrentSpeed, Date.now(), `${min} -- ${max}`)
            // totalKm = 0;
            //2-7 km/h
            // if (!PutOnlyone) {
            // console.log("Run firsttttttttttttttttttttttttttttttttt")
            // dispatch(
            //     _action.getRunningSessionId({ _id: selector.run.data._id }));

            // console.log("Run selector", selector.run)
            // if (selector.run.data._id) {
            //     dispatch(
            //         _action.putRunningSessionId({ distance: 10, status: "running", _id: selector.run.data._id }));
            //     setPutOnlyone(true)
            // }

            // }

            console.log("min", min);
            console.log("max", max);
            console.log("CurrentSpeed", CurrentSpeed);
        }

    }

    const getSpeedRange = () =>
    {
        let result = '';
        if (selector.getConstShoe) {
            const speedRange = selector.getConstShoe.data.SPEED_RANGE;
            const classShoe = selector.shoeCurrentWear.class;

            const SpeedKey = Object.keys(speedRange);
            const SpeedValue = Object.values(speedRange);

            for (let i = 0; i < SpeedKey.length; i++) {
                const element = SpeedKey[i];
                if (element === "common") {
                    result = SpeedValue[i]
                }
            }
            // console.log(result)
        }
        return result;
    }
    // TIMER
    const formatTime = (timer) =>
    {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
        return timer > 3599
            ? `${getHours}:${getMinutes}:${getSeconds}`
            : `${getMinutes}:${getSeconds}`;
    };
    const handlePause = () =>
    {

        clearInterval(clearAS);
        clearInterval(countRef.current);
        setisPress(false);
        dispatch(
            _action.changeScreenState({
                ...selector.screenState,
                isStepStart: false,
                isStepPause: true
            })
        );
    };
    const handleResume = () =>
    {
        setisPress(false);
        dispatch(
            _action.changeScreenState({
                ...selector.screenState,
                isStepPause: false,
                isStepStart: false
            })
        );
        if (countRef.current) {
            clearTimeout(countRef.current);
        }
        countRef.current = setInterval(() =>
        {
            dispatch(_action.isStepTimer(++selector.initReducer.isStepTimer));
        }, 1000);
    };
    // ===========
    // Geolocation
    // const _getCurrentLocation = useCallback(async () =>
    // {
    //     // 3 số cuối 100 === 1 Meter : latitude: (0.00000001) longitude: (-0.0000001)
    //     watchId.current = await location.getCurrentLocation();
    //     // console.log('watchId.current', watchId.current);

    //     if (watchId.current) {
    //         setstate({
    //             ...state,
    //             latitude: Number(watchId.current.latitude),
    //             longitude: Number(watchId.current.longitude) // + selector.initReducer.isStepTimer / 10000
    //         });
    //         if (Number(state.latitude) > 0) {
    //             // Count distance
    //             const newDistance = getPreciseDistance(
    //                 {
    //                     latitude: state.latitude,
    //                     longitude: state.longitude
    //                 },
    //                 {
    //                     latitude: Number(watchId.current.latitude),
    //                     longitude: Number(watchId.current.longitude)
    //                 }
    //             );

    //             // Geolocation.getCurrentPosition(
    //             //     (position) =>
    //             //     {
    //             //         console.log('====================================');
    //             //         console.log(position);
    //             //         console.log('====================================');
    //             //         let { longitude, latitude, speed } = position.coords;
    //             //         // testStop(longitude, latitude, speed, Date.now(), 'hd')
    //             //     },
    //             //     (error) =>
    //             //     {
    //             //         // See error code charts below.
    //             //         // testStop('longitude', 'latitude', 'speed', 'Date.now()', 'hp')
    //             //         console.log(error.code, error.message);
    //             //     },
    //             //     { enableHighAccuracy: true, timeout: 1000, maximumAge: 50 }
    //             // );

    //             // if (speed > 0) {
    //             //     // Count speed < 20km/h && distance > 10m
    //             //     if (speed < 20 && newDistance > 10) {
    //             //call ở đây---- a=newDistance; b=distance, c=speed; d= Date.now()


    //             dispatch(
    //                 _action.changeScreenState({
    //                     ...selector.screenState,
    //                     dataLocation: [
    //                         ...selector.screenState.dataLocation,
    //                         {
    //                             latitude: Number(watchId.current.latitude),
    //                             longitude: Number(watchId.current.longitude)
    //                         }
    //                     ],
    //                     distance: (newDistance / 1000).toFixed(2),
    //                     speed: newDistance
    //                         ? (Number(newDistance) / selector.initReducer.isStepTimer).toFixed(2)
    //                         : 0
    //                 })
    //             );
    //             // }
    //             // }
    //         }
    //     }
    //     return watchId.current;
    // });
    // ===========

    const handleStepStop = () =>
    {

        clearInterval(clearAS);
        // OnpressLonger out
        setmodalVisible(false);
        setstate({ latitude: 0, longitude: 0 });
        if (countRef.current) {
            clearTimeout(countRef.current);
        }
        clearInterval(countRef.current);
        Geolocation.clearWatch(watchId.current);
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
                isScreenCongrats: false
            })
        );

        navigation.navigate(tabNavigator.TAB_HOME);
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
                        marginHorizontal: getSize.scale(16)
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            clearInterval(countRef.current);
                            setisPress(false);
                            dispatch(
                                _action.changeScreenState({
                                    ...selector.screenState,
                                    isStepStart: false,
                                    isStepPause: true
                                })
                            );
                            // return navigation.goBack();
                            return navigation.navigate(tabNavigator.TAB_HOME);
                        }}
                        style={{ flex: 2, justifyContent: 'center' }}>
                        <Image
                            style={{
                                width: getSize.scale(28),
                                height: getSize.scale(28),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_back' }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                        <View
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 50,
                                height: getSize.scale(8),
                                width: getSize.scale(8),
                                marginRight: getSize.scale(8)
                            }}
                        />
                        <Text
                            style={{
                                fontSize: getSize.scale(18),
                                color: '#000',
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}>
                            {selector.screenState.isStepPause ? 'Pause' : 'Moonwalking'}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(60),
                                height: getSize.scale(60),
                                resizeMode: 'contain'
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
                        flex: 2,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(22),
                                height: getSize.scale(22),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_clock_grey' }}
                        />
                        <Text
                            style={{
                                fontSize: getSize.scale(24),
                                color: '#000',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(11)
                            }}>
                            {`${formatTime(timeShow)}`}
                        </Text>
                        <Text
                            style={{
                                fontSize: getSize.scale(14),
                                color: '#A79BBF',
                                // fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(8)
                            }}>
                            time
                        </Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(24),
                                height: getSize.scale(24),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_fast' }}
                        />
                        <Text
                            style={{
                                fontSize: getSize.scale(24),
                                color: '#000',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(11)
                            }}>
                            {kmh.toFixed(2) || '0.00'}
                        </Text>
                        <Text
                            style={{
                                fontSize: getSize.scale(14),
                                color: '#A79BBF',
                                // fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(8)
                            }}>
                            km/h
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(24),
                                height: getSize.scale(24),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_ray' }}
                        />
                        <Text
                            style={{
                                fontSize: getSize.scale(24),
                                color: '#000',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(11)
                            }}>
                            {energy || 0}
                        </Text>
                        <Text
                            style={{
                                fontSize: getSize.scale(14),
                                color: '#A79BBF',
                                // fontWeight: 'bold',
                                fontStyle: 'italic',
                                marginTop: getSize.scale(8)
                            }}>
                            energy
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 6,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <AnimatedCircularProgress
                        size={getSize.scale(294)}
                        width={18}
                        fill={(kmh * 100) / 20} // {selector.screenState.speed} speedMin:8 - fillMin:0 : speedMax:20 - fillMax:100
                        tintColor="rgba(244, 67, 105, 1)" // "#00e0ff"
                        arcSweepAngle={280}
                        rotation={220}
                        lineCap="round"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="rgba(221, 223, 232, 1)">
                        {(speed) => (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <View
                                    style={{
                                        flex: 2,
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            color: 'rgba(125, 131, 164, 1)',
                                            fontSize: getSize.scale(10),
                                            fontWeight: 'bold'
                                        }}>
                                        {`D I S T A N C E`}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 6,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(64),
                                            color: 'rgba(244, 67, 105, 1)',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic'
                                        }}>
                                        {totalKm.toFixed(4) || 0}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(18),
                                            color: 'rgba(167, 155, 191, 1)',
                                            marginTop: getSize.scale(8),
                                            fontStyle: 'italic'
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
                                        marginBottom: getSize.scale(8)
                                    }}>
                                    <Image
                                        style={{
                                            width: getSize.scale(22),
                                            height: getSize.scale(22),
                                            resizeMode: 'contain'
                                        }}
                                        source={{ uri: 'ic_coin_t' }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: getSize.scale(24),
                                            marginLeft: getSize.scale(8),
                                            color: '#000',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic'
                                        }}>
                                        {`${Number(reciveUsdt).toFixed(2)}`}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </AnimatedCircularProgress>
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
                        justifyContent: 'space-evenly'
                    }}>
                    <TouchableOpacity
                        disabled={
                            Platform.OS === 'ios' && selector.screenState.dataLocation.length < 1
                        }
                        onPress={() => navigation.navigate(stackNavigator.STEP_MAPS)}>
                        <Image
                            style={{
                                width: getSize.scale(42),
                                height: getSize.scale(42),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_run_map' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePause}>
                        <Image
                            style={{
                                width: getSize.scale(64),
                                height: getSize.scale(64),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_pause' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            handlePause();
                            return navigation.navigate(tabNavigator.TAB_BAG);
                        }}>
                        <Image
                            style={{
                                width: getSize.scale(38),
                                height: getSize.scale(38),
                                resizeMode: 'contain'
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
                        justifyContent: 'space-evenly'
                    }}>
                    <TouchableOpacity
                        // onLongPress={handleStepStop}
                        onLongPress={() => setmodalVisible(true)}
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
                                    right: getSize.scale(-8)
                                }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: getSize.scale(10)
                                    }}>
                                    Press Longer
                                </Text>
                            </View>
                        ) : null}
                        <Image
                            style={{
                                width: getSize.scale(64),
                                height: getSize.scale(64),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_stop' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleResume}>
                        <Image
                            style={{
                                width: getSize.scale(64),
                                height: getSize.scale(64),
                                resizeMode: 'contain'
                            }}
                            source={{ uri: 'ic_btn_play' }}
                        />
                    </TouchableOpacity>
                </View>
            )}

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setmodalVisible(false)}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(89, 89, 89, 0.6)'
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
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5
                            }}>
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        flex: 1,
                                        padding: getSize.scale(16)
                                    }}>
                                    <Text
                                        style={{
                                            marginTop: getSize.scale(16),
                                            textAlign: 'center',
                                            fontSize: getSize.scale(18),
                                            fontWeight: 'bold'
                                        }}>
                                        {`Misled`.toUpperCase()}
                                    </Text>
                                    <Text
                                        style={{
                                            marginTop: getSize.scale(18),
                                            textAlign: 'center',
                                            fontSize: getSize.scale(14)
                                        }}>
                                        Are you still running? Please confirm to continue
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'space-evenly',
                                        flexDirection: 'row'
                                    }}>
                                    <TouchableOpacity onPress={() => setmodalVisible(false)}>
                                        <Image
                                            style={{
                                                width: getSize.scale(132),
                                                height: getSize.scale(40),
                                                resizeMode: 'contain'
                                            }}
                                            source={{ uri: 'ic_btn_run_small' }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleStepStop}>
                                        <Image
                                            style={{
                                                width: getSize.scale(132),
                                                height: getSize.scale(40),
                                                resizeMode: 'contain'
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
