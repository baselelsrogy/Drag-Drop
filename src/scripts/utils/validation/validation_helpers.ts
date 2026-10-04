import type { Validation } from './validation_types.js';

export const assignValidationInputs = (titleValue: string, descValue: string) => {
  const titleInputRule: Validation = {
    type: 'title',
    required: true,
    value: titleValue,
    minLength: 4,
    maxLength: 20,
  };

  const descInputRule: Validation = {
    type: 'description',
    value: descValue,
    required: true,
    minLength: 10,
    maxLength: 120,
  };

  return [titleInputRule, descInputRule];
};

export function handleValidationError(inputRule: Validation): string {
  let errorMessage: string = '';
  if (inputRule.required && inputRule.value.trim().length === 0) {
    errorMessage = `${inputRule.type} is required`;
  }

  if (inputRule.minLength && inputRule.minLength > inputRule.value.trim().length) {
    errorMessage = `${inputRule.type} must be at least ${inputRule.minLength} characters.`;
  }

  if (inputRule.maxLength && inputRule.maxLength < inputRule.value.trim().length) {
    errorMessage = `${inputRule.type} must be ${inputRule.maxLength} characters.`;
  }

  return errorMessage;
}
