
class InvalidStatusTransitionError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InvalidStatusTransitionError';
    Object.setPrototypeOf(this, InvalidStatusTransitionError.prototype);
  }
}

export class Task {
  id: string;
  status: string;
  ownerId: string;

  constructor(id: string, status: string, ownerId: string) {
    this.id = id;
    this.status = status;
    this.ownerId = ownerId;
  }

  complete() {
    if (this.status !== 'in_progress') {
      new InvalidStatusTransitionError('Cannot complete the task, status is not `in_progress`');
    }

    return this.markCompleted();
  }

  markCompleted() {
    return new Task(this.id, 'completed', this.ownerId);
  }
}
