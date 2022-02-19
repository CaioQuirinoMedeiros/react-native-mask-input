import createNumberMask from './createNumberMask';
import type { Mask, MaskArray } from './formatWithMask.types';

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

const DATE_DDMMYYYY: Mask = (text = '') => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(0) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '3') {
    secondDigitDayMask = /[01]/;
  }

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(2) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  return [
    /[0-3]/,
    secondDigitDayMask,
    '/',
    /[0-1]/,
    secondDigitMonthMask,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};

const DATE_MMDDYYYY: Mask = (text = '') => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(0) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(0) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(2) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(2) === '3') {
    secondDigitDayMask = /[01]/;
  }

  return [
    /[0-1]/,
    secondDigitMonthMask,
    '/',
    /[0-3]/,
    secondDigitDayMask,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};

const DATE_YYYYMMDD: Mask = (text = '') => {
  const cleanText = text.replace(/\D+/g, '');

  let secondDigitMonthMask = /\d/;

  if (cleanText.charAt(4) === '0') {
    secondDigitMonthMask = /[1-9]/;
  }
  if (cleanText.charAt(4) === '1') {
    secondDigitMonthMask = /[012]/;
  }

  let secondDigitDayMask = /\d/;

  if (cleanText.charAt(6) === '0') {
    secondDigitDayMask = /[1-9]/;
  }
  if (cleanText.charAt(6) === '3') {
    secondDigitDayMask = /[01]/;
  }

  return [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '/',
    /[0-1]/,
    secondDigitMonthMask,
    '/',
    /[0-3]/,
    secondDigitDayMask,
  ];
};

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
