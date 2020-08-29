function newTask(title, description) {
  const task = {
    title: title,
    complete: false,
    description: description,
    markComplete: function () {
      this.complete = true;
    },
    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task
}

const task1 = newTask('Clean Cat LItter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do laundry', '😨');
const tasks = [task1, task2]

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logTaskState(); // Clean Cat Litter has been completed
