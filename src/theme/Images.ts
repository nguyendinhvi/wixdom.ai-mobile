import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo.png'),
    mainAsset: require('./assets/images/main_asset.png'),
    homeMainBg: require('./assets/images/home-main-bg.png'),
    circleBlueBg: require('./assets/images/circle-blue-bg.png'),
    bnb: require('./assets/images/bnb.png'),
    calendar: require('./assets/images/calendar.png'),
    qrButton: require('./assets/images/qr-button.png'),
    event: require('./assets/images/event.png'),
    arrowRight: require('./assets/images/arrow-right.png'),
    ellipse: require('./assets/images/ellipse.png'),
    back: require('./assets/images/back.png'),
    profileBg: require('./assets/images/profile-bg.png'),
    profileCover: require('./assets/images/profile-cover.png'),
    profileAvatar: require('./assets/images/profile-avatar.png'),
    twitter: require('./assets/images/twitter.png'),
    sparkles: {
      topLeft: require('./assets/images/sparkles-top-left.png'),
      top: require('./assets/images/sparkles-top.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
    },
  };
}
