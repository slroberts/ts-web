import { User } from './models/User';

const user = new User({ name: 'testw Name', age: 34 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'newName' });
