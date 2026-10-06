import { projectState } from '../store/projectState.js';
import { Base } from './Base.js';
export class ProjectList extends Base {
    _status;
    constructor(_status) {
        super('project-list', 'app', `${_status}-projects`, 'beforeend');
        this._status = _status;
        this.renderProjectList();
        projectState.pushListener((projects) => { });
    }
    renderProjectList() {
        const title = this._element.querySelector('.title');
        const list = this._element.querySelector('.projects-list');
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status} Projects`;
    }
}
//# sourceMappingURL=ProjectList.js.map