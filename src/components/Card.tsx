import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Awesome from 'react-native-vector-icons/FontAwesome';
import {useColorScheme} from '../themeProvider';
const {width} = Dimensions.get('screen');

export default function Card() {
  const {colorScheme} = useColorScheme();
  const [visible, setVisible] = useState(false);

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      marginTop: 20,
      paddingTop: 10,
      paddingBottom: 20,
    },
    imageProfile: {
      width: 45,
      height: 45,
      borderRadius: 25,
    },
    header: {
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 20,
    },
    nameContainer: {
      width: width * 0.6,
    },
    textUserName: {
      fontSize: 17,
      fontWeight: 'bold',
      color: colorScheme === 'light' ? Colors.black : Colors.primary,
    },
    textPostTime: {
      color: Colors.darkGray,
      fontSize: 14,
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 15,
    },
    mainImage: {
      width: width,
      height: width,
      marginTop: 10,
    },
    imageModal: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    likesContainer: {
      paddingTop: 20,
      flexDirection: 'row',
      width: width,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    likesButtonContainer: {
      paddingTop: 20,
      paddingLeft: 15,
      flexDirection: 'row',
      width: width * 0.9,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <TouchableOpacity
          style={styles.imageModal}
          onPress={() => setVisible(false)}>
          <Image
            source={{uri: 'https://i.imgflip.com/809zxf.jpg'}}
            style={styles.imageModal}
          />
        </TouchableOpacity>
      </Modal>
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: 'https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/367716843_10160736210719556_5854308029910467770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHdiyyhXtuzXoXkLb46PTbGDCfinSX7deIMJ-KdJft14tB_bfR4kUIZ3qjEYmLexKM&_nc_ohc=7ZGbTctFn04AX_0u9M-&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfAUlYcz11e3yKfE77Twh2ppI1uy1sPuu1KgWXHgQ-RP6Q&oe=65156359',
            }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.textUserName}>Rodrigo Méndez</Text>
            <Text style={styles.textPostTime}>
              35 min ·{' '}
              <Fontisto name="world-o" size={12} color={Colors.darkGray} />
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="dots-horizontal" color={Colors.darkGray} size={25} />
            <Icon name="close" color={Colors.darkGray} size={25} />
          </View>
        </View>
        <View style={styles.mainImage}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image
              source={{uri: 'https://i.imgflip.com/809zxf.jpg'}}
              style={styles.mainImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.likesContainer}>
          <View>
            <Text>
              <SimpleLineIcons name="like" size={16} color={Colors.darkGray} />{' '}
              <Awesome name="smile-o" color={Colors.darkGray} size={18} />{' '}
              210,267
            </Text>
          </View>
          <View>
            <Text>4,087 comentarios</Text>
          </View>
        </View>
        <View style={styles.likesButtonContainer}>
          <View style={styles.buttonContainer}>
            <SimpleLineIcons name="like" size={20} color={Colors.darkGray} />
            <Text>Me gusta </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Awesome name="comment-o" size={20} color={Colors.darkGray} />
            <Text>Comentar</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Awesome name="share" size={20} color={Colors.darkGray} />
            <Text>Compartir</Text>
          </View>
        </View>
      </View>
    </>
  );
}
