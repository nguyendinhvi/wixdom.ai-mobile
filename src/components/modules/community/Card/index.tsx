import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { cardStyle } from './styles';

const mainUri =
  'https://images.unsplash.com/photo-1689878210188-da9ac2da32d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
const timeUri =
  'data:image/png;base64,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';
const authorUri =
  'https://images.unsplash.com/photo-1691145697744-ba94b6950592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

const Card = () => {
  const { Images } = useTheme();

  return (
    <View style={cardStyle.container}>
      {/* main image */}
      <View style={cardStyle.mainImageWrap}>
        <Image source={{ uri: mainUri }} style={cardStyle.mainImage} />
      </View>

      {/* author */}
      <View style={cardStyle.authorWrap}>
        <Image source={{ uri: authorUri }} style={cardStyle.authorImage} />
        <Text style={cardStyle.author}>ok</Text>
      </View>

      {/* title */}
      <Text style={cardStyle.title}>AIDRHNPlanet Tournament Event</Text>

      {/* time */}
      <View style={cardStyle.timeWrap}>
        <Image source={{ uri: timeUri }} style={cardStyle.timeImage} />
        <Text style={cardStyle.time}>09/06/2023 ~ 30/06/2023</Text>
      </View>

      {/* tags */}
      <View style={cardStyle.tags}>
        <View style={cardStyle.tagWrap}>
          <Image source={Images.logo} style={cardStyle.tagImage} />
          <Text style={cardStyle.tagLabel}>150 JADE</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
