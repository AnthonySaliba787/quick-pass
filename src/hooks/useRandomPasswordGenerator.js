import { ref } from "vue";

export const useRandomPasswordGenerator = () => {
  const generatedPassword = ref("");
  const minLength = 8;
  const maxLength = 64;
  const passwordLength = ref(minLength);

  const includeUpperCase = ref(false);
  const includeNumbers = ref(false);
  const includeSymbols = ref(false);

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-={}[]|:;''<>,.?/";

  const generatedRandomPassword = () => {
    generatedPassword.value = "";

    let baseChars = lowercaseChars;

    if (includeUpperCase.value) {
      baseChars += uppercaseChars;
    }

    if (includeNumbers.value) {
      baseChars += numberChars;
    }

    if (includeSymbols.value) {
      baseChars += symbolChars;
    }

    for (let i = 0; i < passwordLength.value; i++) {
      const randomIndex = Math.floor(Math.random() * baseChars.length);
      generatedPassword.value += baseChars[randomIndex];
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword.value);
  };

  return {
    generatedPassword,
    minLength,
    maxLength,
    includeNumbers,
    includeSymbols,
    includeUpperCase,
    passwordLength,
    copyPassword,
    generatedRandomPassword,
  };
};
