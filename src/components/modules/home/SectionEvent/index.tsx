import React from 'react';

import { Image, View } from 'react-native';

import Slider from '../../../../components/common/Slider';
import TitleSection from '../../../../components/common/TitleSection';
import { sectionEventStyle } from './style';
import CardEvent from '../CardEvent';
import { useTheme } from '../../../../hooks';

const SectionEvent = () => {
  const { Images } = useTheme();
  return (
    <View style={sectionEventStyle.container}>
      <TitleSection title="Recommended Events" handlePress={() => {}} />
      <Image source={Images.ellipse} style={sectionEventStyle.ellipseImage} />
      <Slider
        data={Array(5).fill(0)}
        item={
          <View style={sectionEventStyle.cardWrap}>
            <CardEvent />
          </View>
        }
      />
    </View>
  );
};

export default SectionEvent;
