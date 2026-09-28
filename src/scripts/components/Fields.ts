export class Fields {
  private _template: HTMLTemplateElement;
  private _form: HTMLFormElement;
  private _hostElement: HTMLDivElement;

  constructor() {
    this._template = <HTMLTemplateElement>document.getElementById('fields')!;
    this._hostElement = <HTMLDivElement>document.getElementById('app')!;
    const templateContent = document.importNode(this._template.content, true);
    this._form = templateContent.firstElementChild! as HTMLFormElement;
    this._hostElement.insertAdjacentElement('afterbegin', this._form);
  }
}
