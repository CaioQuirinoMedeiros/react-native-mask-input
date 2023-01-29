export type MaskItem = string | RegExp | [RegExp];

export type MaskArray = Array<MaskItem>;

export type Mask = MaskArray | ((value?: string) => MaskArray);

export type FormatWithMaskProps = {
  /**
   * Text to be formatted with the mask.
   */
  text?: string;

  /**
   * Mask
   */
  mask?: Mask;

  /**
   * Character to be used on the obfuscated characters. Defaults to `"*"`
   */
  obfuscationCharacter?: string;

  /** Add next mask characters at the end of the value. Defaults to `false`.
   *
   * Example: In a date mask, a input value of `"15/10"` will result:
   * - When set to false: `"15/10"`
   * - When set to true: `"15/10/"`
   */
  maskAutoComplete?: boolean;
};

export type FormatWithMaskResult = {
  masked: string;
  unmasked: string;
  obfuscated: string;
};
