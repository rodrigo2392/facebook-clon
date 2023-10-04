import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from '../Views/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

function MyTabBar({state, descriptors, navigation}: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    tabIcon: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let icon;
        let colorMenu = isFocused ? '#0D34F6' : '#787777';
        switch (label) {
          case 'Inicio':
            icon = <Icon name="home" size={30} color={colorMenu} />;
            break;
          case 'Reels':
            icon = <Octicons name="video" size={30} color={colorMenu} />;
            break;
          case 'Amigos':
            icon = <Octicons name="people" size={30} color={colorMenu} />;
            break;
          case 'Marketplace':
            icon = <Icon name="store" size={30} color={colorMenu} />;
            break;
          case 'Notificaciones':
            icon = <Octicons name="bell" size={25} color={colorMenu} />;
            break;
          case 'menu':
            icon = <Icon name="menu" size={30} color={colorMenu} />;
            break;
          default:
            icon = <Icon name="menu" size={30} color={colorMenu} />;
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          navigation.setParams({profileId: null});

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity onPress={onPress} style={styles.tabIcon}>
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      tabBar={MyTabBar}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Reels" component={HomeScreen} />
      <Tab.Screen name="Amigos" component={HomeScreen} />
      <Tab.Screen name="Marketplace" component={HomeScreen} />
      <Tab.Screen name="Notificaciones" component={HomeScreen} />
      <Tab.Screen name="Menu" component={HomeScreen} />
    </Tab.Navigator>
  );
}
