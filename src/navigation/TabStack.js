import {View, Text, Image} from 'react-native';
import React from 'react';
import {Home, Profile, Books, Videos} from '../Screens';
// import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import navigationStrings from './navigationStrings';
import imagePath from '../constants/imagePath';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const switchTabs = ({focused, color, size}) => {
    console.log({focused, color, size}, 'switch tabs');
    // if (name === navigationStrings.HOME) {
    //   if (focused) {
    //     return (
    //       <View
    //         style={{
    //           width: moderateScaleVertical(25),
    //           height: moderateScaleVertical(25),
    //           backgroundColor: '#FFF',
    //           borderRadius: moderateScaleVertical(25),
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           marginBottom: moderateScaleVertical(5),
    //         }}>
    //         <Text
    //           style={{
    //             fontSize: moderateScaleVertical(10),
    //             color: '#000',
    //           }}>
    //           {'Home'}
    //         </Text>
    //       </View>
    //     );
    //   } else {
    //     return (
    //       <View
    //         style={{
    //           width: moderateScaleVertical(25),
    //           height: moderateScaleVertical(25),
    //           backgroundColor: '#FFF',
    //           borderRadius: moderateScaleVertical(25),
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           marginBottom: moderateScaleVertical(5),
    //         }}>
    //         <Text
    //           style={{
    //             fontSize: moderateScaleVertical(10),
    //             color: '#000',
    //           }}>
    //           {'Home'}
    //         </Text>
    //       </View>
    //     );
    //   }
    // }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: switchTabs,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: moderateScaleVertical(60),
          paddingBottom: moderateScaleVertical(5),
          // paddingTop: moderateScaleVertical(10),
        },
        // tabBarLabel: none,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.home}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(28) : moderateScale(23),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.book}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(30) : moderateScale(25),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.BOOKS}
        component={Books}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.video}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(30) : moderateScale(25),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.VIDEOS}
        component={Videos}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.profile}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(30) : moderateScale(25),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
