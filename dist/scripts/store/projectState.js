import { ProjectStatus } from '../utils/project-status.js';
import { ProjectRules } from './projectRules.js';
class ProjectState {
    static _instance;
    _projects = [];
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
            return new ProjectState();
        }
        return this._instance;
    }
    createProject(title, desc) {
        const newProject = new ProjectRules(Math.random().toString(), title, desc, ProjectStatus.Active);
        this._projects.push(newProject);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=projectState.js.map