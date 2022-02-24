const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const app = express();
const port = 3306;

app.use(express.json());

const JWT_KEY = "THIS_IS_TOP_SECRET";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jsonwebtoken.verify(token, JWT_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.use(async (req, res, next) => {   //match login
  global.db = await mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: 'Anch0r07', 
    database: 'bvt_demo', 
    multipleStatements: true 
  });

  global.db.query(`SET time_zone = '-8:00'`);
  await next();
});


app.post('/login', async (req, res) => {
  console.log('login.req.body', req.body);
  // console.log(req.body);

  const  { email, password } = req.body;
  
  const [[user]] = await global.db.query('SELECT * FROM user WHERE email = ? AND password = ?', 
  [email, password])

  if (user) {
    const token = jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_KEY);
    
    res.json({
      jwt: token
    });
  } else {
    res.send('Username or password incorrect');
  }
});

app.get('/', authenticateJWT, async (req, res) => {
  const[data] = await global.db.query('SELECT * FROM car');

  res.send({
    data
  });
});


app.get('/:id', async (req, res) => {
  const [data] = await global.db.query(`SELECT * FROM car WHERE id = ?`, [req.params.id]);

  res.send({
    data
  });
});

app.post('/',  async (req, res) => {
  await global.db.query(`INSERT INTO car (make, color) VALUES (?, ?)`, [
    req.body.makeId, 
    req.body.color
  ]);

  res.send('I am posting data!')
});

app.put('/', (req, res) => {
  // You can pretty much do the same thing with POSTs
});

app.delete('/:id', async (req, res) => {
  await global.db.query(`DELETE FROM car WHERE id = ?`, [req.params.id]);
  res.send('I am deleting data!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
