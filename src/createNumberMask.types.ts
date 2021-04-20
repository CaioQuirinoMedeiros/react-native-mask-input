import type { MaskArray } from './formatWithMask.types';

export type CreateNumberMaskProps = {
  delimiter?: string;
  precision?: number;
  separator?: string;
  prefix?: MaskArray;
};
