import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { cardEventStyle } from './style';

const mainUri =
  'https://images.unsplash.com/photo-1689878210188-da9ac2da32d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
const authorUri =
  'https://images.unsplash.com/photo-1691145697744-ba94b6950592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const tagUri = 'https://cdn-icons-png.flaticon.com/512/217/217853.png';

const CardEvent = () => {
  const { Images } = useTheme();

  return (
    <View style={cardEventStyle.container}>
      {/* main image */}
      <View style={cardEventStyle.mainImageWrap}>
        <Image source={{ uri: mainUri }} style={cardEventStyle.mainImage} />
        <Image source={Images.qrButton} style={cardEventStyle.qrButton} />
      </View>

      {/* author */}
      <View style={cardEventStyle.authorWrap}>
        <Image source={{ uri: authorUri }} style={cardEventStyle.authorImage} />
        <Text style={cardEventStyle.author}>ok</Text>
      </View>

      {/* title */}
      <Text style={cardEventStyle.title}>AIDRHNPlanet Tournament Event</Text>

      {/* time */}
      <View style={cardEventStyle.timeWrap}>
        <Image source={Images.calendar} style={cardEventStyle.timeImage} />
        <Text style={cardEventStyle.time}>09/06/2023 ~ 30/06/2023</Text>
      </View>

      {/* tags */}
      <View style={cardEventStyle.tags}>
        <View style={cardEventStyle.tagWrap}>
          <Image source={{ uri: tagUri }} style={cardEventStyle.tagImage} />
          <Text style={cardEventStyle.tagLabel}>150 JADE</Text>
        </View>
      </View>
    </View>
  );
};

export default CardEvent;
