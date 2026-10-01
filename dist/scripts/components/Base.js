export class Base {
    _templateId;
    _hostId;
    elementId;
    positionElement;
    _template;
    _hostElement;
    _element;
    constructor(_templateId, _hostId, elementId, positionElement) {
        this._templateId = _templateId;
        this._hostId = _hostId;
        this.elementId = elementId;
        this.positionElement = positionElement;
        const [template, _] = this.targetElement(this._templateId, this._hostId);
        const content = document.importNode(template.content, true);
        this._element = content.firstElementChild;
        if (this.elementId) {
            this._element.id = this.elementId;
        }
        this.insertElement();
    }
    targetElement(tamplateId, hostId) {
        this._template = document.getElementById(tamplateId);
        this._hostElement = document.getElementById(hostId);
        return [this._template, this._hostElement];
    }
    insertElement() {
        this._hostElement.insertAdjacentElement(this.positionElement, this._element);
    }
}
//# sourceMappingURL=Base.js.map