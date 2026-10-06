import { projectState } from '../store/projectState.js';
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
            projectState.createProject(titleValue, descValue);
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
        const popup = document.querySelector('.popup_container');
        const descPopup = document.querySelector('.desc_popup');
        if (titleErrorMsg.length) {
            popup.classList.add('visible_popup');
            descPopup.textContent = titleErrorMsg;
            return false;
        }
        else if (descErrorMsg.length) {
            popup.classList.add('visible_popup');
            descPopup.textContent = descErrorMsg;
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=Fields.js.map