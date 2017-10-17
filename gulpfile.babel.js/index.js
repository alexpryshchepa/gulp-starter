import {
  tasks
} from './config';

for (let key in tasks) {
  if (tasks.hasOwnProperty(key) && tasks[key]) {
    require('./tasks/' + key);
  }
}
