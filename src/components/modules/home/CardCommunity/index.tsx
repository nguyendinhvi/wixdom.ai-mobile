import { Image, Text, View } from 'react-native';
import React from 'react';
import { cardCommunityStyle } from './style';

const cardImageUri =
  'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80';
const userUri =
  'https://images.unsplash.com/photo-1558624232-75ee22af7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80';

const CardCommunity = () => {
  return (
    <View style={cardCommunityStyle.cardWrap}>
      <View style={cardCommunityStyle.cardInfoWrap}>
        <View style={cardCommunityStyle.cardInfo}>
          <Image
            source={{ uri: cardImageUri }}
            style={cardCommunityStyle.cardImage}
          />
          <View style={cardCommunityStyle.statistical}>
            <Text style={cardCommunityStyle.statisticalText}>0 Tournament</Text>
            <Text style={cardCommunityStyle.statisticalText}>2 Event</Text>
            <Text style={cardCommunityStyle.statisticalText}>30 Mission</Text>
          </View>
        </View>
        <Text style={cardCommunityStyle.cardTitle}>Wixdom Planet</Text>
      </View>

      <View style={cardCommunityStyle.userWrap}>
        <View style={cardCommunityStyle.userList}>
          <View style={cardCommunityStyle.userImageWrap}>
            <Image
              source={{ uri: userUri }}
              style={cardCommunityStyle.userImage}
            />
          </View>
        </View>
        <Text style={cardCommunityStyle.userOtherText}>+246</Text>
      </View>
    </View>
  );
};

export default CardCommunity;
