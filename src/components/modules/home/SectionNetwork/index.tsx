import React from 'react';

import { FlatList, View } from 'react-native';

import TitleSection from '../../../../components/common/TitleSection';

import { sectionNetworkStyle } from './style';
import CardNetwork from '../CardNetwork';

const SectionNetwork = () => {
  return (
    <View style={sectionNetworkStyle.container}>
      <TitleSection title="Network" handlePress={() => {}} />
      <FlatList
        data={Array(4).fill(0)}
        renderItem={() => <CardNetwork />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={sectionNetworkStyle.flatListWrap}
      />
    </View>
  );
};

export default SectionNetwork;
