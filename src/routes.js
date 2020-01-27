import { Router } from 'express';

const routes = new Router();

routes.get('/users', (req, res) => {
  return res.send({ message: 'Está Funcionando' });
});

export default routes;
