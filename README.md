<h1 align="center">React Native Mask Input</h1>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-brightgreen" />
  <img src="https://img.shields.io/npm/dm/react-native-mask-input" />
  <img src="https://img.shields.io/github/issues-closed-raw/CaioQuirinoMedeiros/react-native-mask-input" />
  <img src="https://img.shields.io/bundlephobia/min/react-native-mask-input" />
  <img src="https://img.shields.io/npm/types/react-native-mask-input" />
  <img src="https://img.shields.io/npm/v/react-native-mask-input" />
  <img src="https://img.shields.io/github/license/CaioQuirinoMedeiros/react-native-mask-input" />
</p>

A simple and effective Text Input with mask for ReactNative on iOS and Android. No fancy stuff, it's basically a JavaScript function that allow you to use custom masks easily.

<p align="center">
  <img src="https://media.giphy.com/media/6CUiN9vx6RjbZUBd2p/giphy.gif" />
</p>

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Mask](#mask)
- [Example](#example)
- [formatWithMask](#formatwithmaskoptions)

<br>

## Features

- Highly custom masks with the use of `RegExp`
- **Characteres obfuscation!**
- It's just a [`<TextInput/>`](https://facebook.github.io/react-native/docs/textinput.html) component, as I said, no fancy stuff
- Use React Native ES6 and React Hooks
- Exports the function that do all the magic: [`formatWithMask`](#formatwithmaskoptions)

<br>

## Installation

```sh
npm install react-native-mask-input
```

or

```sh
yarn add react-native-mask-input
```

<br>

## Usage

```javascript
import MaskInput from 'react-native-mask-input';

function MyComponent() {
  const [phone, setPhone] = React.useState('');

  return (
    <MaskInput
      value={phone}
      onChangeValue={(masked, unmasked) => {
        setPhone(masked); // you can use the unmasked value as well

        // assuming you type "9" all the way, in example:
        console.log(masked); // (99) 99999-9999
        console.log(unmasked); // 99999999999
      }}
      mask={[
        '(',
        /\d/, // that's because I want it to be a digit (0-9)
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
      ]}
    />
  );
}
```

<br>

## Props

| Prop                             | Type          | Default | Description                                                                                                                                                                                     |
| -------------------------------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **...TextInputProps**            |               |         | Inherit all [props of `TextInput`](https://reactnative.dev/docs/textinput#props).                                                                                                               |
| **`value`**                      | number        |         | The value for controlled input. **REQUIRED**                                                                                                                                                    |
| **`onChangeText`**               | function      |         | Callback that is called when the input's text changes. differently of the default function, this one receive three arguments: `(maskedText, unmaskedText, obfuscatedText) => void` **REQUIRED** |
| **`mask`**                       | [Mask](#mask) |         | An array where each item defines one character of the value. If the item is a string, that string will be used, if it is an RegExp, it will validate the input on it.                           |
| **`showObfuscatedValue`**        | boolean       | false   | Whether or not to display the obfuscated value on the `TextInput`.                                                                                                                              |
| **`placeholderFillCharacter`\*** | string        | "\_"    | Character to be used as the "fill character" on the default placeholder value.                                                                                                                  |
| **`obfuscationCharacter`**       | string        | "\*"    | Character to be used on the obfuscated characteres.                                                                                                                                             |

<br>

## Mask

An array where each item defines one character of the value. If the item is a string, that string will be used, if it is an RegExp, it will validate the input on it.

**To be clear:** All the characters you want to be inputed by the user must be a `Regex` in your mask.

If you want a mask for Zip Code, for example, you'd do like this:

```javascript
const mask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
```

That's because the RegExp `/\d/` accepts any digit character (0-9)

<br>

## Example

See [EXAMPLE](example)

```sh
git clone https://github.com/caioquirinomedeiros/react-native-mask-input.git
cd react-native-mask-input/example
yarn
yarn android / yarn ios
```

<br>

## `formatWithMask(options)`

```javascript
import { formatWithMask, Masks } from 'react-native-mask-input';

const creditCard = '9999999999999999';

const { masked, unmasked, obfuscated } = formatWithMask({
  text: phone,
  mask: Masks.CREDIT_CARD,
  obfuscationCharacter: '-',
});

console.log(masked); // 9999 9999 9999 9999
console.log(unmasked); // 9999999999999999
console.log(obfuscated); // 9999 ---- ---- 9999
```

### `options`

| Name                       | Type          | Default | Description                                                                                                                                                           |
| -------------------------- | ------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`text`**                 | string        |         | Text to be formatted with the mask.                                                                                                                                   |
| **`mask`**                 | [Mask](#mask) |         | An array where each item defines one character of the value. If the item is a string, that string will be used, if it is an RegExp, it will validate the input on it. |
| **`obfuscationCharacter`** | string        | "\*"    | Character to be used on the obfuscated characteres.                                                                                                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

react-native-mask-input is released under the MIT license. See [LICENSE](LICENSE) for details.

Any question or support will welcome.
