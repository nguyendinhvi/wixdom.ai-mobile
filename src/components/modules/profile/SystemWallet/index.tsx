import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import TitleSection from '../../../../components/common/TitleSection';
import { useTheme } from '../../../../hooks';
import { systemWalletStyle } from './style';

const tokenUri =
  'https://i.seadn.io/gcs/files/95baafb1cc3b3d35c847b5c0cedaa691.png?auto=format&dpr=1&w=1000';

const SystemWallet = () => {
  const { Images } = useTheme();

  return (
    <View style={systemWalletStyle.container}>
      <TitleSection
        handlePress={() => {}}
        title="System Wallet"
        hasBtnAll={false}
      />

      <View style={systemWalletStyle.card}>
        <View style={systemWalletStyle.chain}>
          <Image source={Images.bnb} style={systemWalletStyle.chainImage} />
          <Text style={systemWalletStyle.chainTitle}>BNB Smart Chain</Text>
        </View>

        <Text style={systemWalletStyle.tokenTitle}>Token</Text>
        <View>
          <FlatList
            data={Array(6).fill(0)}
            renderItem={() => (
              <View style={systemWalletStyle.tokenItem}>
                <View style={systemWalletStyle.tokenCircle} />
                <Text style={systemWalletStyle.tokenItemTitle}>0.5 ETC</Text>
              </View>
            )}
            numColumns={2}
            style={systemWalletStyle.tokenFlatList}
          />
        </View>

        <Text style={systemWalletStyle.nftTitle}>NFT</Text>
        <View style={systemWalletStyle.nftList}>
          <FlatList
            data={Array(2).fill(0)}
            renderItem={() => (
              <View style={systemWalletStyle.nftItem}>
                <Image
                  source={{ uri: tokenUri }}
                  style={systemWalletStyle.nftItemImage}
                />
                <View style={systemWalletStyle.nftItemWrap}>
                  <Text style={systemWalletStyle.nftItemName}>Ken #1</Text>
                  <Text style={systemWalletStyle.nftItemAuthor}>KenKenKen</Text>
                  <Text style={systemWalletStyle.nftItemPrice}>1.02 ETH</Text>
                </View>
              </View>
            )}
            numColumns={2}
            style={systemWalletStyle.tokenFlatList}
          />
        </View>
      </View>
    </View>
  );
};

export default SystemWallet;
