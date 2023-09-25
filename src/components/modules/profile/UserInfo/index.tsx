import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../../../hooks';
import { userInfoStyle } from './style';

const UserInfo = () => {
  const { Images } = useTheme();

  return (
    <View style={userInfoStyle.container}>
      <View style={userInfoStyle.imageWrap}>
        <Image source={Images.profileCover} style={userInfoStyle.imageCover} />
        <View style={userInfoStyle.imageAvatarWrap}>
          <Image
            source={Images.profileAvatar}
            style={userInfoStyle.imageAvatar}
          />
        </View>
      </View>
      <Text style={userInfoStyle.title}>Vi Nguyen</Text>
      <View style={userInfoStyle.socialWrap}>
        {Array(4)
          .fill(0)
          .map(e => (
            <TouchableOpacity style={userInfoStyle.socialButton}>
              <Image
                source={Images.twitter}
                style={userInfoStyle.socialImage}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default UserInfo;
