import { ImageBackground, View } from 'react-native';
import React from 'react';
import CardTournament from '../CardTournament';
import { sectionBannerStyle } from './style';
import { useTheme } from '../../../../hooks';
import { WINDOW_WIDTH } from '../../../../utils/constant';

const SectionBanner = () => {
  const { Images } = useTheme();

  return (
    <ImageBackground
      source={Images.circleBlueBg}
      imageStyle={{
        width: WINDOW_WIDTH,
        top: -200,
      }}
    >
      <View style={sectionBannerStyle.container}>
        <CardTournament />
      </View>
    </ImageBackground>
  );
};

export default SectionBanner;
