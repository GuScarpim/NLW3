import express from 'express';

const app = express();

app.get("/user", (request, response) => {
  return response.send({ message: 'Hellow World' })
})

app.listen(3333);