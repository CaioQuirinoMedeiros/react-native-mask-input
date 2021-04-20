import type { MaskArray } from './formatWithMask.types';

import type { Mask } from './formatWithMask.types';
import type { CreateNumberMaskProps } from './createNumberMask.types';

export default function createNumberMask(props?: CreateNumberMaskProps): Mask {
  const { delimiter = '.', precision = 2, prefix = ['R', '$', ' '], separator = ',' } =
    props || {};

  return (value?: string) => {
    const numericValue = value?.replace(/\D+/g, '') || '';

    let mask: MaskArray = numericValue.split('').map(() => /\d/);

    if (mask.length > precision) {
      mask.splice(-precision, 0, separator);
    }

    const delimiters = Math.ceil((numericValue.length - precision) / 3) - 1;

    for (let i = 1; i <= delimiters; i++) {
      const position = -precision - i * 3 - i;
      mask.splice(position, 0, delimiter);
    }

    return [...prefix, ...mask];
  };
}
