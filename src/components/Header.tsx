import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../theme/index';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ColorSchemeButton} from '../components/ThemeButton';
import {useColorScheme} from '../themeProvider';
const {width} = Dimensions.get('screen');

export default function Header() {
  const {colorScheme} = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between',
    },
    title: {
      color: Colors.bue,
      fontSize: 30,
      fontWeight: 'bold',
    },
    iconContainer: {
      flexDirection: 'row',
      width: width * 0.4,
      justifyContent: 'space-between',
    },
    icon: {
      backgroundColor: Colors.gray,
      width: width * 0.1,
      height: width * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: width * 0.3,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>facebook</Text>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Ionicons name="search" size={30} color={Colors.black} />
        </View>
        <View style={styles.icon}>
          <Icon name="message-circle" size={30} color={Colors.black} />
        </View>
        <View style={styles.icon}>
          <ColorSchemeButton />
        </View>
      </View>
    </View>
  );
}
