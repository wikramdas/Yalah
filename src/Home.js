import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Button from './Button';
export default Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        label={'Get wifi Location'}
        onPress={() => navigation.navigate('MapScreen')}
      />
      <Button
        label={'Get cellular Location'}
        onPress={() => navigation.navigate('MapScreen')}
      />
      <Button
        label={'Get GPS Location'}
        onPress={() => navigation.navigate('MapScreen')}
      />
    </View>
  );
};
