import { Image, Text, View } from 'react-native';
import React from 'react';
import { cardNetworkStyle } from './style';
import { useTheme } from '../../../../hooks';

const CardNetwork = () => {
  const { Images } = useTheme();

  return (
    <View style={cardNetworkStyle.wrap}>
      <Image source={Images.bnb} style={cardNetworkStyle.image} />
      <Text style={cardNetworkStyle.title}>BNB Smart Chain</Text>
    </View>
  );
};

export default CardNetwork;
