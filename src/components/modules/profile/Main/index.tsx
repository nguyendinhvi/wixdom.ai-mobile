import React from 'react';

import { View, ImageBackground, ScrollView } from 'react-native';

import { useTheme } from '../../../../hooks';

import HeaderBar from '../../../../components/common/HeaderBar';
import UserInfo from '../UserInfo';
import SystemWallet from '../SystemWallet';
import ClaimRewards from '../ClaimRewards';

import { profileModuleStyle } from './style';

const ProfileModule = () => {
  const { Images } = useTheme();

  return (
    <ScrollView style={profileModuleStyle.container}>
      <View style={profileModuleStyle.imageBackgroundWrap}>
        <ImageBackground
          source={Images.profileBg}
          style={profileModuleStyle.imageBackground}
        >
          <HeaderBar handleBack={() => {}} title="Profile" />
          <UserInfo />
        </ImageBackground>
      </View>

      <SystemWallet />
      <ClaimRewards />
    </ScrollView>
  );
};

export default ProfileModule;
