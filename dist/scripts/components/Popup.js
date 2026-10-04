import { Base } from './Base.js';
export class Popup extends Base {
    constructor() {
        super('popup_template', 'app', 'popup_container', 'beforeend');
        this._closePopup();
    }
    _closePopup() {
        const buttonClose = this._element.querySelector('.close');
        buttonClose.addEventListener('click', () => {
            this._element.classList.remove('visible_popup');
        });
    }
}
//# sourceMappingURL=Popup.js.map