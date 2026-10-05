class ProjectState {
  private static _instance: ProjectState;
  constructor() {}

  public static getInstance(): ProjectState {
    if (!this._instance) {
      this._instance = new ProjectState();
      return new ProjectState();
    }

    return this._instance;
  }
}

export const projectState = ProjectState.getInstance();
