import type { MaskArray } from './formatWithMask.types';

import type { Mask } from './formatWithMask.types';
import type { CreateNumberMaskProps } from './createNumberMask.types';

export default function createNumberMask(props?: CreateNumberMaskProps): Mask {
  const { delimiter = '.', precision = 2, prefix = [], separator = ',' } = props || {};

  return (value?: string) => {
    const numericValue = value?.replace(/\D+/g, '') || '';

    let mask: MaskArray = numericValue.split('').map(() => /\d/);

    if (mask.length > precision && precision && separator) {
      mask.splice(-precision, 0, separator);
    }

    const delimiters = Math.ceil((numericValue.length - precision) / 3) - 1;

    if (delimiter) {
      for (let i = 0; i < delimiters; i++) {
        const precisionOffset = precision;
        const separatorOffset = separator ? 1 : 0;
        const thousandOffset = 3 + (delimiter ? 1 : 0);
        const position = -precisionOffset - separatorOffset - i * thousandOffset - 3;
        mask.splice(position, 0, delimiter);
      }
    }

    return [...prefix, ...mask];
  };
}
