import { v4 as uuid } from 'uuid';

export default class Task {
  constructor(name, done) {
    this.name = name;
    this.done = done;
    this.id = uuid();
  }
}
