import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { homeMainStyle } from './styles';
import { useTheme } from '../../hooks';

const HomeMain = () => {
  const { Images } = useTheme();

  return (
    <View style={homeMainStyle.container}>
      <ImageBackground
        source={Images.homeMainBg}
        style={homeMainStyle.backgroundImage}
        resizeMode="cover"
      >
        <View style={homeMainStyle.mainImageWrap}>
          <Image style={homeMainStyle.mainImage} source={Images.mainAsset} />
        </View>
        <Text style={homeMainStyle.noGameTitle}>No games available</Text>
        <Text style={homeMainStyle.noGameDesc}>
          There are currently no game available
        </Text>
      </ImageBackground>
    </View>
  );
};

export default HomeMain;
