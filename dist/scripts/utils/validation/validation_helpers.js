export const assignValidationInputs = (titleValue, descValue) => {
    const titleInputRule = {
        type: 'title',
        required: true,
        value: titleValue,
        minLength: 4,
        maxLength: 20,
    };
    const descInputRule = {
        type: 'description',
        value: descValue,
        required: true,
        minLength: 10,
        maxLength: 120,
    };
    return [titleInputRule, descInputRule];
};
export function handleValidationError(inputRule) {
    let errorMessage = '';
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
//# sourceMappingURL=validation_helpers.js.map