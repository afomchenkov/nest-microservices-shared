import { Task } from '../../domain/tasks/entity';

type TaskRepository = {
  getById(id: string): Task;
  save(entity: Task);
}

export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  completeTask(id: string) {
    const task = this.repository.getById(id);

    try {
      task.complete();

      return this.repository.save(task);
    } catch (error) {
      console.log(`[task service]: ${JSON.stringify(error)}`);

      throw error;
    }
  }
}