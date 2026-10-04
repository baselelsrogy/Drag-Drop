import {
  assignValidationInputs,
  handleValidationError,
} from '../utils/validation/validation_helpers.js';
import { Base } from './Base.js';
export class Fields extends Base<HTMLFormElement> {
  constructor() {
    super('fields', 'app', 'form', 'afterbegin');
    this._addProject();
  }

  private _addProject(): void {
    this._element.addEventListener('submit', this._handleAddProject.bind(this));
  }

  private _handleAddProject(e: Event): void {
    e.preventDefault();
    const [titleInput, descInput] = this._targetInputs();
    const [titleValue, descValue] = this._getInputsValue(titleInput!, descInput!);
    if (this._validateInputsValue(titleValue!, descValue!)) {
      console.log('Valid');
    }
  }

  private _targetInputs(): HTMLInputElement[] {
    const titleInput = document.getElementById('title')! as HTMLInputElement;
    const descInput = document.getElementById('desc')! as HTMLInputElement;

    return [titleInput, descInput];
  }

  private _getInputsValue(titleInput: HTMLInputElement, descInput: HTMLInputElement): string[] {
    const inputValue = titleInput.value;
    const descValue = descInput.value;

    return [inputValue, descValue];
  }

  private _validateInputsValue(titleInput: string, descInput: string) {
    const [titleInputRule, descInputRule] = assignValidationInputs(titleInput, descInput);

    const titleErrorMsg = handleValidationError(titleInputRule!);
    const descErrorMsg = handleValidationError(descInputRule!);

    const popup = <HTMLDivElement>document.querySelector('.popup_container')!;
    const descPopup = <HTMLParagraphElement>document.querySelector('.desc_popup')!;

    if (titleErrorMsg.length) {
      popup.classList.add('visible_popup');
      descPopup.textContent = titleErrorMsg;
      return false;
    } else if (descErrorMsg.length) {
      popup.classList.add('visible_popup');
      descPopup.textContent = descErrorMsg;
      return false;
    }

    return true;
  }
}
