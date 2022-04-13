const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const crypto = require('crypto');
const { stringify } = require('querystring');
const { convertCompilerOptionsFromJson } = require('typescript');


app.use(express.json(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const JWT_KEY = "THIS_IS_TOP_SECRET";
const current_user_email = '';
const current_user_passwordHash = '';
const current_user_id = '';


const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log("line 25 token:", token)

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
    host: '127.0.0.1', 
    user: 'root', 
    password: 'Anch0r07', 
    database: 'angular_final', 
    multipleStatements: true 
  });

  global.db.query(`SET time_zone = '-8:00'`);
  await next();
});


//public endpoints
app.post('/register',  async (req, res) => {
  
  const { email, password } = req.body;


  passwordHash = crypto.createHash('sha256')
    .update(password)
    .digest('hex');


  

  await global.db.query(`INSERT INTO users (email, password) VALUES (?, ?)`, [
    email,
    passwordHash
  ]);

  res.send('I am posting data!')
});




app.post('/login', async (req, res) => {
  const  { email, password } = req.body;

  this.user_email = email;
  console.log("email:", this.user_email)
  
  passwordHash = crypto.createHash('sha256')
    .update(password)
    .digest('hex');
 
  this.current_user_passwordHash = this.passwordHash;
  
  const [[user]] = await global.db.query('SELECT * FROM users WHERE email = ? AND password = ?', 
  [email, passwordHash])
  console.log("user", user);
  this.current_user_id = user.id;
  console.log("id", this.current_user_id)

  if (user) {
    //console.log('yay, logged in');
    const token = jsonwebtoken.sign({user: user.id, email: user.email, password: user.password }, JWT_KEY);
    res.json({
      jwt: token, //assigns the token    
      return: user, 
    })
  } else {
    res.send('Username or password incorrect');
    console.log("damn")
  }

});




//these below require authentication

 app.get('/', authenticateJWT, async (req, res) => {


   await global.db.query( 
     'set @row_num = -1;'
     ); 
     
    global.db.query( 
      'update entrys set id = (@row_num:=@row_num +1) where user_id = ? order by date desc;',[
        this.current_user_id
       ]
      );
     const[data] = await global.db.query(
      `SELECT id, date, entry FROM entrys where user_id = ? order by date desc `, [
       this.current_user_id
      ]);
   res.json(data);
  
   
 });




app.get('/:id', authenticateJWT, async (req, res) => {
  const [data] = await global.db.query(
    `SELECT * FROM entrys where id = ?`,
    [req.params.id]
    );
    res.json(data);
    
  
});


app.post('/new', async (req, res) => {

   const user = await global.db.query('SELECT id FROM users WHERE email = ? AND password = ?', 
   [this.current_user_email, this.current_user_passwordHash]);
  

   global.db.query('Insert into entrys (date, entry, user_id) values (now(), ?, ?)', [
    req.body.entry,
    this.current_user_id
  ]);

  global.db.query( 
    'set @row_num = -1;'
    ); 
    
   global.db.query( 
     'update angular_final.entrys set id = (@row_num:=@row_num +1) order by date desc;'
     );
  

  //res.send('I am posting data!')  //was causing a promise error



});


app.put('/:id/edit',  async (req, res) => {

  //console.log("id",req.params.id)
  await global.db.query(`update entrys set date = now(), entry = (?) where id = (?)`, 
  [
    req.body.entry,
    req.params.id
  ]);

  //res.send('I am posting data!')
});



app.delete('/:id', async (req, res) => {

  await global.db.query(`delete from entrys where id = ? and user_id = ?`, 
  [
    req.params.id,     //using params not .body will now delete the journal, still has promise error and doesnt reload page. 
    this.current_user_id
  ]);
  global.db.query( 
    'set @row_num = -1;'
    ); 
    
   global.db.query( 
     'update angular_final.entrys set id = (@row_num:=@row_num +1) order by date desc;'
     );

  //res.send('I am posting data!')
});






app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
