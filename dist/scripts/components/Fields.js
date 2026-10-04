import { assignValidationInputs, handleValidationError, } from '../utils/validation/validation_helpers.js';
import { Base } from './Base.js';
export class Fields extends Base {
    constructor() {
        super('fields', 'app', 'form', 'afterbegin');
        this._addProject();
    }
    _addProject() {
        this._element.addEventListener('submit', this._handleAddProject.bind(this));
    }
    _handleAddProject(e) {
        e.preventDefault();
        const [titleInput, descInput] = this._targetInputs();
        const [titleValue, descValue] = this._getInputsValue(titleInput, descInput);
        if (this._validateInputsValue(titleValue, descValue)) {
            console.log('Valid');
        }
    }
    _targetInputs() {
        const titleInput = document.getElementById('title');
        const descInput = document.getElementById('desc');
        return [titleInput, descInput];
    }
    _getInputsValue(titleInput, descInput) {
        const inputValue = titleInput.value;
        const descValue = descInput.value;
        return [inputValue, descValue];
    }
    _validateInputsValue(titleInput, descInput) {
        const [titleInputRule, descInputRule] = assignValidationInputs(titleInput, descInput);
        const titleErrorMsg = handleValidationError(titleInputRule);
        const descErrorMsg = handleValidationError(descInputRule);
        if (titleErrorMsg.length) {
            alert(titleErrorMsg);
        }
        else if (descErrorMsg.length) {
            alert(descErrorMsg);
        }
        return true;
    }
}
//# sourceMappingURL=Fields.js.map