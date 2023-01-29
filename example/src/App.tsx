import * as React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import MaskInput, { Masks, useMaskedInputProps } from 'react-native-mask-input';

export default function App() {
  const [cpfCnpj, setCpfCnpj] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [carPlate, setCarPlate] = React.useState('');
  const [creditCard, setCreditCard] = React.useState('');
  const [money, setMoney] = React.useState('');
  const [date, setDate] = React.useState('');

  const phoneMaskedInputProps = useMaskedInputProps({
    value: phone,
    onChangeText: setPhone,
    mask: Masks.BRL_PHONE,
    placeholderFillCharacter: '0',
  });

  return (
    <KeyboardAvoidingView style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>MaskInput Examples</Text>

        <MaskInput
          mask={Masks.BRL_CPF_CNPJ}
          value={cpfCnpj}
          onChangeText={setCpfCnpj}
          keyboardType="numeric"
          placeholder="CPF/CNPJ"
          style={styles.inputBasic}
        />

        <TextInput
          {...phoneMaskedInputProps}
          keyboardType="numeric"
          style={styles.inputBasic}
        />

        <MaskInput
          mask={Masks.CREDIT_CARD}
          keyboardType="numeric"
          value={creditCard}
          showObfuscatedValue
          style={styles.inputBasic}
          onChangeText={(formatted) => {
            setCreditCard(formatted);
          }}
        />

        <MaskInput
          mask={Masks.DATE_DDMMYYYY}
          keyboardType="numeric"
          value={date}
          style={styles.inputBasic}
          maskAutoComplete
          onChangeText={setDate}
          maxLength={undefined}
        />

        <MaskInput
          mask={Masks.BRL_CURRENCY}
          keyboardType="numeric"
          value={money}
          style={styles.inputBasic}
          onChangeText={(_, unmasked) => {
            setMoney(unmasked);
          }}
          maxLength={undefined}
        />

        <MaskInput
          mask={Masks.BRL_CAR_PLATE}
          value={carPlate}
          autoCapitalize="characters"
          style={styles.inputBasic}
          onChangeText={setCarPlate}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 8,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputBasic: {
    marginVertical: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    paddingHorizontal: 12,
    height: 54,
  },
  inputMask: {
    fontSize: 18,
  },
  inputMaskContainer: {
    borderColor: '#cdcdcd',
    height: 54,
    marginVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
  screenContainer: {
    flex: 1,
  },
});
