import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {View, Text, Button} from 'react-native';
import {useStore} from '../Store';
export default (props: NavigationStackScreenProps<{name: string}>) => {
  const {navigate} = props.navigation;
  const [store, setPersistStore] = useStore();
  function removePersist() {
    setPersistStore('');
  }
  function navigateTo() {
    navigate('Home', {name: 'John'});
  }
  return (
    <View style={{flex: 1}}>
      <Text>Detail Screen</Text>
      <Text>와라!!</Text>
      <Text>{JSON.stringify(store)}</Text>
      <Text style={{flex: 1}}>{props.navigation.getParam('name')}</Text>
      <Button title="removePersist" onPress={removePersist} />
      <Button title="navigateTo" onPress={navigateTo} />
    </View>
  );
};
