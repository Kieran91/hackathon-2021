import { name, internet, datatype, company, finance } from 'faker';

const data = {};

function generateUsers() {
  data.users = [];
  for (let i = 1; i <= 4; i++) {
    data.users.push({
      id: i,
      username: `user${i}`,
      firstname: name.firstName(),
      lastname: name.lastName(),
      email: internet.email()
    });
  }
}

function generateBonds() {
  data.bonds = [];
  for (let i = 1; i <= 4; i++) {
    data.bonds.push({
      id: i,
      name: `${company.companyName()} ${finance.creditCardCVV()}`,
      size: datatype.number(10000000)
    });
  }
}

function generateTrades() {
  data.trades = [];
  for (let i = 1; i <= 4; i++) {
    data.trades.push({
      id: i,
      bond: `user${i}`,
      firstname: name.firstName(),
      lastname: name.lastName(),
      email: internet.email()
    });
  }
  // data.trades.push({ id: 1, portfolioCode: 'pCode', portfolioName: 'pName' });
}

export default function generateMockData() {
  generateUsers();
  generateBonds();
  // generateTrades();
  return data;
}
