/* eslint-disable react/require-default-props */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { titleSectionStyle } from './styles';
import { useTheme } from '../../../hooks';

interface TitleWrapProps {
  title: string;
  handlePress?: () => void;
  hasBtnAll?: boolean;
}

const TitleSection = ({
  title,
  handlePress,
  hasBtnAll = true,
}: TitleWrapProps) => {
  const { Images } = useTheme();

  return (
    <View style={titleSectionStyle.wrap}>
      <Text style={titleSectionStyle.title}>{title}</Text>
      {hasBtnAll && (
        <TouchableOpacity
          style={titleSectionStyle.button}
          onPress={handlePress}
        >
          <Text>All</Text>
          <Image
            source={Images.arrowRight}
            style={titleSectionStyle.iconRight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleSection;
