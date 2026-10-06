import { ProjectStatus } from '../utils/project-status.js';
import { ProjectRules } from './projectRules.js';

class ProjectState {
  private static _instance: ProjectState;
  private _projects: ProjectRules[] = [];
  private _listeners: Function[] = [];
  constructor() {
    console.log(this._listeners);
  }

  public static getInstance(): ProjectState {
    if (!this._instance) {
      this._instance = new ProjectState();
      return new ProjectState();
    }

    return this._instance;
  }

  public createProject(title: string, desc: string) {
    const newProject = new ProjectRules(
      Math.random().toString(),
      title,
      desc,
      ProjectStatus.Active,
    );

    this._projects.push(newProject);
    this._runListeners();
  }

  private _runListeners(): void {
    for (const listener of this._listeners) {
      listener([...this._projects]);
    }
  }

  public pushListener(listener: Function): void {
    this._listeners.push(listener);
  }
}

export const projectState = ProjectState.getInstance();
