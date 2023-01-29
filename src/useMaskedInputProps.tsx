import * as React from 'react';

import formatWithMask from './formatWithMask';
import type { UseMaskedInputProps } from './useMaskedInputProps.types';

export default (props: UseMaskedInputProps) => {
  const {
    value,
    mask,
    onChangeText,
    placeholderFillCharacter = '_',
    obfuscationCharacter,
    showObfuscatedValue,
    maskAutoComplete,
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

      const result = formatWithMask({
        text: textToFormat,
        mask,
        obfuscationCharacter,
        maskAutoComplete:
          maskAutoComplete && textToFormat.length > formattedValueResult.masked.length,
      });

      onChangeText && onChangeText(result.masked, result.unmasked, result.obfuscated);
    },
    [
      isValueObfuscated,
      mask,
      obfuscationCharacter,
      onChangeText,
      formattedValueResult.masked,
      maskAutoComplete,
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

  return {
    onChangeText: handleChangeText,
    value: inputValue,
    selection: isValueObfuscated
      ? { start: inputValue.length, end: inputValue.length }
      : undefined,
    placeholder: defaultPlaceholder,
  };
};
