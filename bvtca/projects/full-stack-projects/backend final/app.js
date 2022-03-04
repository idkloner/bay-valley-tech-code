const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const app = express();
const port = 3306;
const crypto = require('crypto');

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
    database: 'backend_final', 
    multipleStatements: true 
  });

  global.db.query(`SET time_zone = '-8:00'`);
  await next();
});


app.post('/login', async (req, res) => {
  console.log('login.req.body', req.body);
  // console.log(req.body);
  
  
  const  { email, password } = req.body;

  passwordHash = crypto.createHash('sha256')
    .update(req.body.password)
    .digest('hex');
  console.log(passwordHash);
  
  const [[user]] = await global.db.query('SELECT * FROM users WHERE email = ? AND password = ?', 
  [email, passwordHash])

  if (user) {
    const token = jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_KEY);
  
    res.json({
      jwt: token
    });
  } else {
    res.send('Username or password incorrect');
  }
});

// app.get('/', authenticateJWT, async (req, res) => {

//   const authHeader = req.headers.authorization;
//   const token = authHeader.split(' ')[1];
//   //console.log(req);
//   const[data] = await global.db.query('SELECT * FROM car Where user_id = ?', 
//   [token]);

//   res.send({
//     data
//   });
// });

app.get('/',  async (req, res) => {

  const authHeader = req.headers.authorization;
  
  //console.log(req);
  const[data] = await global.db.query( "SELECT name as product, description, brand_name as brand, category_name as category FROM products INNER JOIN product_brands ON products.brand_id = product_brands.brand_id INNER JOIN product_categories ON products.category_id = product_categories.category_id");

  

  res.send({
    data
  });
});

app.get('/brands',  async (req, res) => {

  
  
  //console.log(req);
  const[data] = await global.db.query("SELECT * from product_brands");

  

  res.send({
    data
  });
});

app.get('/categories',  async (req, res) => {
  
  //console.log(req);
  const[data] = await global.db.query("SELECT * from product_categories");

  

  res.send({
    data
  });
});


app.get('/:id', async (req, res) => {
  const [data] = await global.db.query(`SELECT * FROM products WHERE id = ?`, [req.params.id]);

  res.send({
    data
  });
});

app.post('/new_fav', authenticateJWT,  async (req, res) => {
  
  const  { notes } = req.body;
  console.log("req.body = " + req.body);
  
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  await global.db.query(`INSERT INTO favorite_products ( notes, jwt) VALUES (?, ?)`, [

    req.body.notes,
    token
  
    
  ]);

  res.send('I am posting data!')
});


app.post('/new_user',  async (req, res) => {
  
  const  { name, email, password } = req.body;
  console.log(req.body)
  //console.log(make, color);

  passwordHash = crypto.createHash('sha256')
    .update(password)
    .digest('hex');
  console.log(passwordHash);

  await global.db.query(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [
    req.body.name,
    req.body.email, 
    passwordHash
  ]);

  res.send('I am posting data!')
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

