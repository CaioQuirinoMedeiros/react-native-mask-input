import * as React from 'react';
import { TextInput } from 'react-native';

import type { MaskInputProps } from './MaskInput.types';
import formatWithMask from './formatWithMask';

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
    ...rest
  } = props;

  const maskArray = React.useMemo(
    () => (typeof mask === 'function' ? mask(value) : mask),
    [mask, value]
  );

  const formattedValueResult = React.useMemo(() => {
    return formatWithMask({ text: value || '', mask, obfuscationCharacter });
  }, [mask, obfuscationCharacter, value]);

  const maskHasObfuscation = React.useMemo(
    () => maskArray && !!maskArray.find((maskItem) => Array.isArray(maskItem)),
    [maskArray]
  );

  const isValueObfuscated = React.useMemo(
    () => !!maskHasObfuscation && !!showObfuscatedValue,
    [maskHasObfuscation, showObfuscatedValue]
  );

  const handleChangeText = React.useCallback(
    (text: string) => {
      let textToFormat = text;

      if (isValueObfuscated) {
        textToFormat = formattedValueResult.masked || '';

        if (textToFormat.length > text.length) {
          textToFormat = textToFormat.slice(0, -1);
        } else if (textToFormat.length < text.length) {
          textToFormat = textToFormat + text[text.length - 1];
        }
      }

      const result = formatWithMask({ text: textToFormat, mask, obfuscationCharacter });

      onChangeText && onChangeText(result.masked, result.unmasked, result.obfuscated);
    },
    [
      isValueObfuscated,
      mask,
      obfuscationCharacter,
      onChangeText,
      formattedValueResult.masked,
    ]
  );

  const defaultPlaceholder = React.useMemo(() => {
    if (maskArray) {
      return maskArray
        .map((maskChar) => {
          if (typeof maskChar === 'string') {
            return maskChar;
          } else {
            return placeholderFillCharacter;
          }
        })
        .join('');
    } else {
      return undefined;
    }
  }, [maskArray, placeholderFillCharacter]);

  const inputValue = isValueObfuscated
    ? formattedValueResult.obfuscated
    : formattedValueResult.masked;

  return (
    <TextInput
      placeholder={defaultPlaceholder}
      {...rest}
      value={inputValue}
      selection={
        isValueObfuscated
          ? { start: inputValue.length, end: inputValue.length }
          : selection
      }
      onChangeText={handleChangeText}
      ref={ref}
    />
  );
});
