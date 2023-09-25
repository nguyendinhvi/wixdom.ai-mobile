import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { homeStyle } from './styles';
import { useTheme } from '../../../../hooks';

import SectionBanner from '../SectionBanner';
import SectionTournament from '../SectionTournament';
import SectionCommunity from '../SectionCommunity';
import SectionEvent from '../SectionEvent';
import SectionNetwork from '../SectionNetwork';

const HomeModule = () => {
  const { Images } = useTheme();

  return (
    <ScrollView style={homeStyle.container}>
      <View style={homeStyle.logoWrap}>
        <Image source={Images.logo} />
      </View>

      <SectionBanner />
      <SectionTournament />
      <SectionEvent />
      <SectionCommunity />
      <SectionNetwork />
    </ScrollView>
  );
};

export default HomeModule;
