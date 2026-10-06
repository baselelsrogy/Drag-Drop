import { projectState } from '../store/projectState.js';
import { Base } from './Base.js';
export class ProjectList extends Base {
    _status;
    constructor(_status) {
        super('project-list', 'app', `${_status}-projects`, 'beforeend');
        this._status = _status;
        this.renderProjectList();
        projectState.pushListener((projects) => {
            this._renderProjects(projects);
        });
    }
    renderProjectList() {
        const title = this._element.querySelector('.title');
        const list = this._element.querySelector('.projects-list');
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status} Projects`;
    }
    _renderProjects(projects) {
        const projectsList = document.querySelector(`.${this._status}-list`);
        for (const porject of projects) {
            const content = this._createProjectElement(porject);
            projectsList.innerHTML += content;
        }
    }
    _createProjectElement(project) {
        const content = `
    <div class="project" draggable="true">
      <h2 class="project_title" id="project_title">${project.title}</h2>
      <p class="project_desc" id="project_desc">${project.desc}</p>
    </div>
    `;
        return content;
    }
}
//# sourceMappingURL=ProjectList.js.map