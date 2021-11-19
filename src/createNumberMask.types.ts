import type { MaskArray } from './formatWithMask.types';

export type CreateNumberMaskProps = {
  /** Character for thousands delimiter. Defaults to `"."` */
  delimiter?: string;
  /** Decimal precision. Defaults to `2` */
  precision?: number;
  /** Decimal separator character. Defaults to `","`  */
  separator?: string;
  /** Mask to be prefixed on the mask result */
  prefix?: MaskArray;
};
