import { name } from 'faker';

const data = {};

function generateUsers() {
  data.users = [];
  for (let i = 1; i <= 100; i++) {
    data.users.push({ id: i, name: name.findName() });
  }
}

export default function generateMockData() {
  generateUsers();
  return data;
}
