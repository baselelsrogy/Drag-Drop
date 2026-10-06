import { ProjectStatus } from '../utils/project-status.js';
import { ProjectRules } from './projectRules.js';
class ProjectState {
    static _instance;
    _projects = [];
    _listeners = [];
    constructor() {
        console.log(this._listeners);
    }
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
        this._runListeners();
    }
    _runListeners() {
        for (const listener of this._listeners) {
            listener([...this._projects]);
        }
    }
    pushListener(listener) {
        this._listeners.push(listener);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=projectState.js.map