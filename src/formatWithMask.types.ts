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
   * Character to be used on the obfuscated characteres. Defaults to "*"
   */
  obfuscationCharacter?: string;
};

export type FormatWithMaskResult = {
  masked: string;
  unmasked: string;
  obfuscated: string;
};
