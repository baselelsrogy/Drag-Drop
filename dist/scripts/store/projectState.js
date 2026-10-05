class ProjectState {
    static _instance;
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
            return new ProjectState();
        }
        return this._instance;
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=projectState.js.map