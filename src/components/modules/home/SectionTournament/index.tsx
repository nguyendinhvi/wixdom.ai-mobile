import React from 'react';

import { View } from 'react-native';

import Slider from '../../../../components/common/Slider';
import TitleSection from '../../../../components/common/TitleSection';
import CardTournament from '../CardTournament';
import { sectionTournamentStyle } from './style';

const SectionTournament = () => {
  return (
    <View style={sectionTournamentStyle.container}>
      <TitleSection title="Recommended Tournaments" handlePress={() => {}} />
      <Slider
        data={Array(5).fill(0)}
        item={
          <View style={sectionTournamentStyle.cardWrap}>
            <CardTournament />
          </View>
        }
      />
    </View>
  );
};

export default SectionTournament;
