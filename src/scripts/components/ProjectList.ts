import type { ProjectRules } from '../store/projectRules.js';
import { projectState } from '../store/projectState.js';
import { Base } from './Base.js';

export class ProjectList extends Base<HTMLDivElement> {
  constructor(private _status: 'Initial' | 'Active' | 'Finished') {
    super('project-list', 'app', `${_status}-projects`, 'beforeend');
    this.renderProjectList();
    projectState.pushListener((projects: ProjectRules[]) => {
      this._renderProjects(projects);
    });
  }

  private renderProjectList(): void {
    const title = this._element.querySelector('.title')! as HTMLHeadingElement;
    const list = this._element.querySelector('.projects-list')! as HTMLDivElement;
    list.classList.add(`${this._status}-list`);
    title.textContent = `${this._status} Projects`;
  }

  private _renderProjects(projects: ProjectRules[]): void {
    const projectsList = document.querySelector(`.${this._status}-list`) as HTMLDivElement;
    for (const porject of projects) {
      const content = this._createProjectElement(porject);
      projectsList.innerHTML += content;
    }
  }

  private _createProjectElement(project: ProjectRules): string {
    const content = `
    <div class="project" draggable="true">
      <h2 class="project_title" id="project_title">${project.title}</h2>
      <p class="project_desc" id="project_desc">${project.desc}</p>
    </div>
    `;

    return content;
  }
}
