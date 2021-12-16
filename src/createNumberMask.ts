import type { MaskArray } from './formatWithMask.types';

import type { Mask } from './formatWithMask.types';
import type { CreateNumberMaskProps } from './createNumberMask.types';

export default function createNumberMask(props?: CreateNumberMaskProps): Mask {
  const { delimiter = '.', precision = 2, prefix = [], separator = ',' } = props || {};

  return (value?: string) => {
    const numericValue = value?.replace(/\D+/g, '') || '';

    let mask: MaskArray = numericValue.split('').map(() => /\d/);

    const shouldAddSeparatorOnMask = precision > 0 && !!separator;

    if (mask.length > precision && shouldAddSeparatorOnMask) {
      mask.splice(-precision, 0, separator);
    }

    const amountOfDelimiters = Math.ceil((numericValue.length - precision) / 3) - 1;

    if (delimiter) {
      for (let i = 0; i < amountOfDelimiters; i++) {
        const precisionOffset = precision;
        const separatorOffset = shouldAddSeparatorOnMask ? 1 : 0;
        const thousandOffset = 3 + (delimiter ? 1 : 0);
        const delimiterPosition =
          -precisionOffset - separatorOffset - i * thousandOffset - 3;

        mask.splice(delimiterPosition, 0, delimiter);
      }
    }

    return [...prefix, ...mask];
  };
}
