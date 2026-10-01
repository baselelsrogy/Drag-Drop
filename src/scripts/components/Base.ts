export class Base<T extends HTMLElement> {
  private _template!: HTMLTemplateElement;
  private _hostElement!: HTMLDivElement;
  public _element: T;

  constructor(
    private _templateId: string,
    private _hostId: string,
    private elementId: string,
    private positionElement: 'afterbegin' | 'beforeend',
  ) {
    const [template, _] = this.targetElement(this._templateId, this._hostId);
    const content = document.importNode(template.content, true);
    this._element = content.firstElementChild! as T;
    if (this.elementId) {
      this._element.id = this.elementId;
    }
    this.insertElement();
  }

  private targetElement(tamplateId: string, hostId: string): [HTMLTemplateElement, HTMLDivElement] {
    this._template = document.getElementById(tamplateId)! as HTMLTemplateElement;
    this._hostElement = document.getElementById(hostId)! as HTMLDivElement;

    return [this._template, this._hostElement];
  }

  private insertElement(): void {
    this._hostElement.insertAdjacentElement(this.positionElement, this._element);
  }
}
