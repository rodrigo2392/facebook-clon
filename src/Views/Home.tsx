import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Card from '../components/Card';
import {Colors} from '../theme';
import {useColorScheme} from '../themeProvider';

export default function Home() {
  const {colorScheme} = useColorScheme();
  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={
          colorScheme === 'light' ? Colors.primary : Colors.black
        }
      />
      <View
        style={{
          backgroundColor: colorScheme === 'light' ? '#CFCECE' : '#2E2E2E',
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={() => <Card />}
          overScrollMode="never"
          ListHeaderComponent={
            <>
              <Header />
              <CreatePost />
              <Stories />
            </>
          }
        />
      </View>
    </>
  );
}
