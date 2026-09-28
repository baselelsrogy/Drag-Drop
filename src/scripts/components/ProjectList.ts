export class ProjectList {
  private _template: HTMLTemplateElement;
  private _projects: HTMLDivElement;
  private _hostElement: HTMLDivElement;

  constructor(private _status: 'Initial' | 'Active' | 'Finished') {
    this._template = document.getElementById('project-list')! as HTMLTemplateElement;
    this._hostElement = document.getElementById('app')! as HTMLDivElement;
    const contentProjects = document.importNode(this._template.content, true);
    this._projects = contentProjects.firstElementChild! as HTMLDivElement;
    this.renderProjectList();
    this._hostElement.insertAdjacentElement('beforeend', this._projects);
  }

  private renderProjectList(): void {
    const title = this._projects.querySelector('.title')! as HTMLHeadingElement;
    const list = this._projects.querySelector('.projects-list')! as HTMLDivElement;
    list.classList.add(`${this._status}-list`);
    title.textContent = `${this._status} Projects`;
  }
}
