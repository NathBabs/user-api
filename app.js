const express = require('express');
const { Sequelize } = require('sequelize');
const db = require('./config/db');
const User = require('./models/User');
const { response } = require('express');

const app = express();
const conn =  db();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

const PORT = process.env.PORT;



  //Test db
  try {
      const res = conn.authenticate();
      console.log('Database Connected');
  } catch (error) {
      console.log('Error: ' + error);
  }

// Get user
app.get('/users', async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        res.status(200).send(response);
    } catch (e) {
        res.status(404).send(e);
    }
});

app.post('/users',async (req, res) => {
    //const user = new User(req.body);

    try {
        const response = await User.create(req.body);
        console.log(`the user with the name ${req.body.fname} has been saved`);
        res.status(200).send({
            response: response
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
  });


  app.patch('/users', async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.body.id
                }
            });

            if(!user) {
                throw new Error('No user found');
            }
            console.log(`retrieved record ${JSON.stringify(user,null,2)}`);
            let { fname, lname, phone, email } = req.body;
            let values = {
                fname,
                lname,
                phone,
                email
            };

            console.log(values);
            const record = await user.update(values);
            if(record) {
                console.log(`updated record ${JSON.stringify(record,null,2)}`);
                res.status(200).send(record);
            }
        } catch (e) {
            res.status(400).send(e);
        }
  });

  app.delete('/users', async (req, res) => {
      try {
          const response = await User.destroy({ 
              where: {
                  email: req.body.email
              }});
              console.log(`${response} record has been deleted`);
            res.status(200).send({
                response: response
            });
      } catch (error) {
          console.log(e);
      }
  });

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
