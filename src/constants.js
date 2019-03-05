/**
 * React Native Map Link
 */

import { Platform } from 'react-native'

export const isIOS = Platform.OS === 'ios'

export const prefixes = {
  'apple-maps': isIOS ? 'http://maps.apple.com/' : 'applemaps://',
  'google-maps': isIOS ? 'comgooglemaps://' : 'https://maps.google.com/',
  amap: isIOS ? 'iosamap://' : 'androidamap://',
  citymapper: 'citymapper://',
  uber: 'uber://',
  lyft: 'lyft://',
  transit: 'transit://',
  waze: 'waze://',
  yandex: 'yandexnavi://',
  moovit: 'moovit://'
}

export const titles = {
  'apple-maps': 'Apple Maps',
  'google-maps': 'Google Maps',
  amap: '高德Maps',
  citymapper: 'Citymapper',
  uber: 'Uber',
  lyft: 'Lyft',
  transit: 'The Transit App',
  waze: 'Waze',
  yandex: 'Yandex.Navi',
  moovit: 'Moovit'
}

export const icons = {
  'apple-maps': require('./images/apple-maps.png'),
  'google-maps': require('./images/google-maps.png'),
  amap: require('./images/amaps.png'),
  citymapper: require('./images/citymapper.png'),
  uber: require('./images/uber.png'),
  lyft: require('./images/lyft.png'),
  transit: require('./images/transit.png'),
  waze: require('./images/waze.png'),
  yandex: require('./images/yandex.png'),
  moovit: require('./images/moovit.png')
}
