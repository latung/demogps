import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  Platform,
} from 'react-native';
import {getSize, Colors} from '../../../common';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {stackNavigator} from '../../../navigation/nameNavigator';
import * as _action from '../../../redux/action/ActionHandle';
import {color} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ItemShoeBoxes({item, index}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalBuy, setmodalBuy] = useState(false);

  const [modalTransfer, setmodalTransfer] = useState(false);

  const image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogMFHOw0CKtwUvuJmhgcSi18GmfqlCxUI6g&usqp=CAU';
  const imageSneakers =
    'https://stepn-simulator.xyz/static/simulator/img/sneakers.jpeg';

  return (
    <View
      key={index}
      style={{
        width: getSize.Width / 2.09,
        height: getSize.Width / 1.5,
        marginTop: index === 0 || index === 1 ? getSize.scale(16) : 0,
        marginVertical: getSize.scale(4),
      }}>
      <ImageBackground
        source={{uri: 'ic_tabbag_items'}}
        style={{
          width: '100%',
          height: getSize.scale(250),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: '70%',
              position: 'relative',
            }}>
            <ImageBackground
              source={{uri: 'ic_head_frame_shoe'}}
              style={{
                width: '100%',
                height: getSize.scale(30),
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: getSize.scale(-16),
              }}>
              <View
                style={{
                  width: '100%',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontSize: getSize.scale(12),
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: '#2C2C2C',
                    }}>
                    {item.classify}
                  </Text>
                  <View
                    style={{
                      marginLeft: getSize.scale(5),
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={{uri: 'ic_ray'}}
                      style={{
                        width: getSize.scale(12),
                        height: getSize.scale(12),
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      source={{uri: 'ic_ray'}}
                      style={{
                        width: getSize.scale(12),
                        height: getSize.scale(12),
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      source={{uri: 'ic_ray'}}
                      style={{
                        width: getSize.scale(12),
                        height: getSize.scale(12),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>

            <View style={{flex: 6}}>
              <TouchableOpacity
                disabled
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 20
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      backgroundColor: '#565874',
                      paddingHorizontal: getSize.scale(8),
                      paddingVertical: getSize.scale(2),
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginLeft: getSize.scale(2),
                        fontSize: getSize.scale(12),
                      }}>
                      {`# ${item?._id}`}
                    </Text>
                  </View>
                </View>
                <Image
                  source={{uri: 'ic_git'}}
                  style={{
                    flex: 7,
                    width: getSize.scale(105),
                    height: getSize.scale(101),
                    resizeMode: 'contain',
                  }}
                />
                <TouchableOpacity style={styles.open}>
                  <Text style={styles.openText}>OPEN</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: getSize.scale(16),
    marginVertical: getSize.moderateScale(8),
    backgroundColor: Colors.WHITE,
    borderRadius: 7,
    resizeMode: 'cover',
    overflow: 'hidden',
    // android
    elevation: 3,
    // ios
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  open: {
    backgroundColor: '#3EF1F2',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  openText:{
    color: 'white',
    fontWeight: 'bold',
  }
});
