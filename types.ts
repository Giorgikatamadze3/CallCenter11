
export enum TaskStatus {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

export enum TaskType {
    KeyTask = 'Key Task',
    Deliverable = 'Deliverable',
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
}
