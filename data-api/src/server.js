import jsonServer from 'json-server';
import generateMockData from './generate_mock_data';

const port = process.env.PORT || 3001;
const data = generateMockData();
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running: \nhttp://localhost:${port}\n`);
});
