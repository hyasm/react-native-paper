import { I18nManager, I18nManagerStatic, Platform } from 'react-native';

const rtlLangs = new Set([
  'ae', // Avestan
  'ar', // Arabic
  'arc', // Aramaic
  'bcc', // Southern Balochi
  'bqi', // Bakthiari
  'ckb', // Sorani
  'dv', // Dhivehi
  'fa',
  'far', // Persian
  'glk', // Gilaki
  'he',
  'iw', // Hebrew
  'khw', // Khowar
  'ks', // Kashmiri
  'ku', // Kurdish
  'mzn', // Mazanderani
  'nqo', // N'Ko
  'pnb', // Western Punjabi
  'ps', // Pashto
  'sd', // Sindhi
  'ug', // Uyghur
  'ur', // Urdu
  'yi', // Yiddish
]);

/**
 * Return the current locale.
 *
 * On web, `doLeftAndRightSwapInRTL` is false and `allowRTL`, `forceRTL` and `swapLeftAndRightInRTL` don't do anything.
 *
 * @returns current locale
 */
const Locale = (): I18nManagerStatic => {
  const props = { ...I18nManager };

  if (Platform.OS === 'web') {
    const locale = new Intl.Locale(navigator.language);

    props.isRTL = rtlLangs.has(locale.language);
    props.getConstants = () => ({
      isRTL: rtlLangs.has(locale.language),
      doLeftAndRightSwapInRTL: false,
      localeIdentifier: locale.baseName,
    });
  }

  return props;
};

export default Locale;
