/**
 * The tasks manager utility
 */
class TasksManager {
  /**
   * Registered tasks
   * 
   * @private
   * @var {Array<Archos/Saved/Tasks/Task>}
   */
  _registered = [];

  /**
   * Register a task
   * 
   * @param {Archos/Saved/Tasks/Task} task
   * @return {void}
   */
  register(task) {
    this._registered.push(task)
  }
}

module.exports = new TasksManager();