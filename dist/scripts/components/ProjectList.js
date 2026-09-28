export class ProjectList {
    _status;
    _template;
    _projects;
    _hostElement;
    constructor(_status) {
        this._status = _status;
        this._template = document.getElementById('project-list');
        this._hostElement = document.getElementById('app');
        const contentProjects = document.importNode(this._template.content, true);
        this._projects = contentProjects.firstElementChild;
        this.renderProjectList();
        this._hostElement.insertAdjacentElement('beforeend', this._projects);
    }
    renderProjectList() {
        const title = this._projects.querySelector('.title');
        const list = this._projects.querySelector('.projects-list');
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status} Projects`;
    }
}
//# sourceMappingURL=ProjectList.js.map