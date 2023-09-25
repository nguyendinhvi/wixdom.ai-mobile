import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../../hooks';
import { headerBarStyle } from './style';

interface HeaderBarProps {
  handleBack: () => void;
  title: string;
}

const HeaderBar = ({ handleBack, title }: HeaderBarProps) => {
  const { Images } = useTheme();

  return (
    <View style={headerBarStyle.wrap}>
      <TouchableOpacity style={headerBarStyle.button} onPress={handleBack}>
        <Image source={Images.back} style={headerBarStyle.imageBack} />
      </TouchableOpacity>
      <Text style={headerBarStyle.title}>{title}</Text>
      <View style={headerBarStyle.viewRight} />
    </View>
  );
};

export default HeaderBar;
