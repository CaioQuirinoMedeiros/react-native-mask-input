import createNumberMask from './createNumberMask';
import type { MaskArray } from './formatWithMask.types';

const BRL_CAR_PLATE = [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/, '-', /\d/, /\w/, /\d/, /\d/];

const BRL_CNPJ = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const BRL_CPF = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const BRL_CPF_CNPJ = (text?: string) => {
  const rawValue = text?.replace(/\D+/g, '') || '';
  return rawValue.length <= 11 ? BRL_CPF : BRL_CNPJ;
};

const BRL_CURRENCY = createNumberMask({
  prefix: ['R', '$', ' '],
  separator: ',',
  delimiter: '.',
  precision: 2,
});

const BRL_PHONE = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const CREDIT_CARD = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
] as MaskArray;

const DATE_DDMMYYYY = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
const DATE_MMDDYYYY = [/[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
const DATE_YYYYMMDD = [/\d/, /\d/, /\d/, /\d/, '/', /[0-1]/, /\d/, '/', /[0-3]/, /\d/];
const ZIP_CODE = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

export default {
  BRL_CAR_PLATE,
  BRL_CNPJ,
  BRL_CPF,
  BRL_CPF_CNPJ,
  BRL_CURRENCY,
  BRL_PHONE,
  CREDIT_CARD,
  DATE_DDMMYYYY,
  DATE_MMDDYYYY,
  DATE_YYYYMMDD,
  ZIP_CODE,
};
