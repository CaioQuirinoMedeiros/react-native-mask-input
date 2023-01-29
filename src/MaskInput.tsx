import * as React from 'react';
import { TextInput } from 'react-native';

import type { MaskInputProps } from './MaskInput.types';
import useMaskedInputProps from './useMaskedInputProps';

export default React.forwardRef(function (
  props: MaskInputProps,
  ref: React.Ref<TextInput>
) {
  const {
    mask,
    value,
    onChangeText,
    placeholderFillCharacter = '_',
    obfuscationCharacter,
    showObfuscatedValue,
    selection,
    maskAutoComplete,
    ...rest
  } = props;

  const maskedInputProps = useMaskedInputProps({
    value,
    mask,
    maskAutoComplete,
    obfuscationCharacter,
    onChangeText,
    placeholderFillCharacter,
    showObfuscatedValue,
  });

  return (
    <TextInput
      placeholder={maskedInputProps.placeholder}
      {...rest}
      selection={maskedInputProps.selection || selection}
      value={maskedInputProps.value}
      onChangeText={maskedInputProps.onChangeText}
      ref={ref}
    />
  );
});
