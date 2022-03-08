const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const app = express();
//const port = 3000;
const crypto = require('crypto');
const { ErrorHandler } = require('@angular/core');

app.use(express.json());

 


require('dotenv').config();

const port = process.env.PORT;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


app.use(async function mysqlCommection( req, res, next) {
  try {
    req.db - await pool.getConnection();
    req.db.connection.config.namedPlacehonders = true;

    await req.db.query('SET SESSION sql_mode = "TRADITIONAL"');
    await req.db.query(`SET time_zone = '-8:00'`);

    await next();

    req.db.release();
  } catch (err) {
    console.log(err)
    if (req.db) req.db.release();
    throw err;
  }
});

app.use(cors());
app.use(bodyParser.json()); 



const JWT_KEY = process.env.JWT_KEY;


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

// app.use(async (req, res, next) => {   //match login
//   global.db = await mysql.createConnection({ 
//     host: '127.0.0.1', 
//     user: 'root', 
//     password: 'Anch0r07', 
//     database: 'angular_final', 
//     multipleStatements: true 
//   });

//   global.db.query(`SET time_zone = '-8:00'`);
//   await next();
// });


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
   } else {     res.send('Username or password incorrect');
   }
 });



 app.get('/',  async (req, res) => {

   const authHeader = req.headers.authorization;
  
   //console.log(req);
   const[data] = await global.db.query( "SELECT date, entry FROM entrys");

   res.send({
     data
   });
 });



app.get('/:id', async (req, res) => {
  const [data] = await global.db.query(`SELECT * FROM entrys WHERE id = ?`, 
  [req.params.id]);

  res.send({
    data
  });
});


app.post('/new',  async (req, res) => {
  
  const  { id, entry } = req.body;
  
  
  const authHeader = req.headers.authorization;


   await global.db.query(`Insert into entrys values (?, now(), ?)`, [
     req.body.id,
     req.body.entry

  
   ]);
   res.send('I am posting data!')
 });




app.put('/edit',  async (req, res) => {
  
  const  { id, entry } = req.body;
  
  
  const authHeader = req.headers.authorization;


   await global.db.query(`update entrys set entry = (?) where id = (?)`, [
     req.body.entry,
     req.body.id

  
   ]);
   res.send('I am posting data!')
 });



app.delete('/delete',  async (req, res) => {
  
  const  { id } = req.body;
  console.log("req.body = " + req.body.entry);
  
  const authHeader = req.headers.authorization;

  await global.db.query(`delete from entrys where id = (?)`, [
    req.body.id

  ]);

  res.send('I am posting data!')
});




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

