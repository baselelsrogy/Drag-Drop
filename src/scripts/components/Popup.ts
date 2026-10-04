import { Base } from './Base.js';

export class Popup extends Base<HTMLDivElement> {
  constructor() {
    super('popup_template', 'app', 'popup_container', 'beforeend');
    this._closePopup();
  }

  private _closePopup() {
    const buttonClose = this._element.querySelector('.close')! as HTMLButtonElement;

    buttonClose.addEventListener('click', () => {
      this._element.classList.remove('visible_popup');
    });
  }
}
