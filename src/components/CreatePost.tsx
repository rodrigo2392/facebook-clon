import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import Awesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../theme';
import {useColorScheme} from '../themeProvider';

const {width} = Dimensions.get('screen');

export default function CreatePost() {
  const {colorScheme} = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      paddingBottom: 20,
      paddingLeft: 20,
    },
    inputContainer: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      paddingTop: 10,
      paddingLeft: 10,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    actionButton: {
      height: 25,
      borderRightColor: '#D5D3D3',
      borderRightWidth: 1,
      width: (width - 20) / 3,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
    },
    inputText: {
      width: width * 0.5,
      height: width * 0.1,
      fontSize: 18,
      color: '#979797',
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 20,
      marginRight: 5,
    },
    iconText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/367716843_10160736210719556_5854308029910467770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHdiyyhXtuzXoXkLb46PTbGDCfinSX7deIMJ-KdJft14tB_bfR4kUIZ3qjEYmLexKM&_nc_ohc=7ZGbTctFn04AX_0u9M-&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfAUlYcz11e3yKfE77Twh2ppI1uy1sPuu1KgWXHgQ-RP6Q&oe=65156359',
          }}
        />
        <View style={styles.input}>
          <Text style={styles.inputText}>¿Qué estás pensando?</Text>
        </View>
        <View style={styles.actionButton}>
          <Awesome name="picture-o" color={Colors.green} size={25} />
        </View>
      </View>
    </View>
  );
}
