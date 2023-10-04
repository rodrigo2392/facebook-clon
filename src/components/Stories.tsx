import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useColorScheme} from '../themeProvider';
import {Colors} from '../theme';

interface Story {
  image: string;
  name: string;
}

const {width} = Dimensions.get('screen');

const stories = [
  {
    image:
      'https://i.pinimg.com/1200x/ff/90/7e/ff907ec0a04433ddba8a985a5cb9a194.jpg',
    name: 'Wanessa J',
  },
  {
    image:
      'https://e1.pxfuel.com/desktop-wallpaper/190/503/desktop-wallpaper-tumblr-mountains-iphone-mountain-iphone-thumbnail.jpg',
    name: 'Regi P',
  },
  {
    image:
      'https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/88883/Lionel-Messi-Top-Free-Lionel-Messi-Backgrounds-iphone-11-wallpaper-ilikewallpaper_com.jpg',
    name: 'Donald M',
  },
  {
    image:
      'https://w0.peakpx.com/wallpaper/47/882/HD-wallpaper-animated-universe-man-dog-cartoon-background-ios-android-apple.jpg',
    name: 'Arthur W',
  },
];

const CreateStory = () => {
  const {colorScheme} = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      marginTop: 20,
      paddingVertical: 20,
      paddingLeft: 15,
    },
    image: {
      width: width * 0.4,
      height: width * 0.6,
      marginRight: 15,
      borderRadius: 15,
    },
    imageCreate: {
      width: width * 0.4,
      height: width * 0.4,
      marginRight: 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    text: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: 20,
    },
    textContainer: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 10,
      backgroundColor: 'rgba(0,0,0,0.3)',
      width: width * 0.4,
      paddingVertical: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    textContainerCreate: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 10,
      backgroundColor: Colors.gray,
      height: width * 0.25,
      width: width * 0.4,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      gap: 5,
    },
    textCreate: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 13,
    },
    addButton: {
      backgroundColor: Colors.bue,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBottom: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    createCard: {
      width: width * 0.4,
      height: width * 0.6,
      marginRight: 15,
    },
  });
  return (
    <View style={styles.createCard}>
      <Image
        style={styles.imageCreate}
        source={{
          uri: 'https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/367716843_10160736210719556_5854308029910467770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHdiyyhXtuzXoXkLb46PTbGDCfinSX7deIMJ-KdJft14tB_bfR4kUIZ3qjEYmLexKM&_nc_ohc=7ZGbTctFn04AX_0u9M-&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfAUlYcz11e3yKfE77Twh2ppI1uy1sPuu1KgWXHgQ-RP6Q&oe=65156359',
        }}
      />
      <View style={styles.textContainerCreate}>
        <View style={styles.addButton}>
          <Icon name="plus" size={20} color={Colors.primary} />
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.textCreate}>Crear</Text>
          <Text style={styles.textCreate}>Historia</Text>
        </View>
      </View>
    </View>
  );
};

export default function Stories() {
  const {colorScheme} = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'light' ? Colors.primary : Colors.black,
      marginTop: 20,
      paddingVertical: 20,
      paddingLeft: 15,
    },
    image: {
      width: width * 0.4,
      height: width * 0.6,
      marginRight: 15,
      borderRadius: 15,
    },
    imageCreate: {
      width: width * 0.4,
      height: width * 0.4,
      marginRight: 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    text: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: 20,
    },
    textContainer: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 10,
      backgroundColor: 'rgba(0,0,0,0.3)',
      width: width * 0.4,
      paddingVertical: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    textContainerCreate: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 10,
      backgroundColor: Colors.gray,
      height: width * 0.25,
      width: width * 0.4,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      gap: 5,
    },
    textCreate: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 13,
    },
    addButton: {
      backgroundColor: Colors.bue,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBottom: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    createCard: {
      width: width * 0.4,
      height: width * 0.6,
      marginRight: 15,
    },
  });
  const renderItem = ({item}: {item: Story}) => {
    return (
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        overScrollMode="never"
        data={stories}
        renderItem={renderItem}
        ListHeaderComponent={CreateStory}
      />
    </View>
  );
}
