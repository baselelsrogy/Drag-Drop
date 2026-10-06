import type { ProjectRules } from '../store/projectRules.js';
import { projectState } from '../store/projectState.js';
import { Base } from './Base.js';

export class ProjectList extends Base<HTMLDivElement> {
  constructor(private _status: 'Initial' | 'Active' | 'Finished') {
    super('project-list', 'app', `${_status}-projects`, 'beforeend');
    this.renderProjectList();
    projectState.pushListener((projects: ProjectRules[]) => {});
  }

  private renderProjectList(): void {
    const title = this._element.querySelector('.title')! as HTMLHeadingElement;
    const list = this._element.querySelector('.projects-list')! as HTMLDivElement;
    list.classList.add(`${this._status}-list`);
    title.textContent = `${this._status} Projects`;
  }
}
