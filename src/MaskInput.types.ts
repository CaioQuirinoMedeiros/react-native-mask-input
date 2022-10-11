import type { TextInputProps } from 'react-native';

import type { Mask } from './formatWithMask.types';

export interface MaskInputProps extends Omit<TextInputProps, 'onChangeText'> {
  /**
   * Mask
   */
  mask?: Mask;

  /**
   * Value for the controlled text input.
   */
  value?: string;

  /**
   * Callback that is called when the text input's text changes.
   * @param masked Masked text
   * @param unmasked Unmasked text
   * @param obfuscated Obfuscated text
   */
  onChangeText?(masked: string, unmasked: string, obfuscated: string): void;

  /**
   * Whether or not to display the obfuscated value on the `TextInput`. Defaults to false
   */
  showObfuscatedValue?: boolean;

  /**
   * Character to be used as the "fill character" on the default placeholder
   */
  placeholderFillCharacter?: string;

  /**
   * Character to be used on the obfuscated characteres. Defaults to "*"
   */
  obfuscationCharacter?: string;
}
