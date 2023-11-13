import express from 'express';

const routes = (app) => {
  app.route('/').get(
    (req, res) => {
      res.status(200).send('API Rest com Express e MongoDB');
    },
  );

  app.use(
    express.json(),
  );
};

export default routes;
