import { User } from './models/User';

const user = new User({ name: 'testw Name', age: 34 });

user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
