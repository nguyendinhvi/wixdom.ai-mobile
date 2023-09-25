import { FlatList, View } from 'react-native';
import React from 'react';
import TitleSection from '../../../../components/common/TitleSection';
import CardCommunity from '../CardCommunity';
import { sectionCommunityStyle } from './style';

const SectionCommunity = () => {
  return (
    <View>
      <TitleSection title="Recommended Communities" handlePress={() => {}} />
      <View style={sectionCommunityStyle.communityWrap}>
        <FlatList
          data={Array(10).fill(0)}
          renderItem={() => (
            <View style={{ marginRight: 10, marginBottom: 10 }}>
              <CardCommunity />
            </View>
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default SectionCommunity;
