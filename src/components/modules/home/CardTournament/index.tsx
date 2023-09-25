import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../../../hooks';
import { cardTournamentStyle } from './style';

const mainUri =
  'https://images.unsplash.com/photo-1689878210188-da9ac2da32d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
const authorUri =
  'https://images.unsplash.com/photo-1691145697744-ba94b6950592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const tagUri = 'https://cdn-icons-png.flaticon.com/512/217/217853.png';

const CardTournament = () => {
  const { Images } = useTheme();

  return (
    <View style={cardTournamentStyle.container}>
      {/* main image */}
      <View style={cardTournamentStyle.mainImageWrap}>
        <Image
          source={{ uri: mainUri }}
          style={cardTournamentStyle.mainImage}
        />
        <Image source={Images.qrButton} style={cardTournamentStyle.qrButton} />
      </View>

      {/* author */}
      <View style={cardTournamentStyle.authorWrap}>
        <Image
          source={{ uri: authorUri }}
          style={cardTournamentStyle.authorImage}
        />
        <Text style={cardTournamentStyle.author}>ok</Text>
      </View>

      {/* title */}
      <Text style={cardTournamentStyle.title}>
        AIDRHNPlanet Tournament Event
      </Text>

      {/* event */}
      <View style={cardTournamentStyle.eventWrap}>
        <Image source={Images.event} style={cardTournamentStyle.eventImage} />
        <Text style={cardTournamentStyle.event}>45 events</Text>
      </View>

      {/* time */}
      <View style={cardTournamentStyle.timeWrap}>
        <Image source={Images.calendar} style={cardTournamentStyle.timeImage} />
        <Text style={cardTournamentStyle.time}>09/06/2023 ~ 30/06/2023</Text>
      </View>

      {/* tags */}
      <View style={cardTournamentStyle.tags}>
        <View style={cardTournamentStyle.tagWrap}>
          <Image
            source={{ uri: tagUri }}
            style={cardTournamentStyle.tagImage}
          />
          <Text style={cardTournamentStyle.tagLabel}>150 JADE</Text>
        </View>
        <View style={cardTournamentStyle.tagWrap}>
          <Image
            source={{ uri: tagUri }}
            style={cardTournamentStyle.tagImage}
          />
          <Text style={cardTournamentStyle.tagLabel}>150 JADE</Text>
        </View>
      </View>
    </View>
  );
};

export default CardTournament;
