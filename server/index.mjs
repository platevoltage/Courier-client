import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import data from './db.json' assert { type: 'json' };
import fs from 'fs';
import cors from 'cors';
import { Driver, Tag, Client } from './models/index.mjs';
import { v4 as uuidv4 } from 'uuid';


let count = data.count;
let drivers = data.drivers;


dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const httpApp = express();
const PORT = 3000;


app.use(express.json());

app.use(cors());

// Routes
app.get("/api/tags/:driver", async function(req, res, next) {

  const data = await Tag.findAll({
    where: {assignedTo: req.params.driver},
    include: [{
      model: Client,
      as: "sender",
    },{
      model: Client,
      as: "recipient",
    }]

  })
  for (let tag of data) {

    tag.sender.setDataValue('arrivalWindowStart', tag.get({plain: true}).senderWindowStart);
    tag.sender.setDataValue('arrivalWindowEnd', tag.get({plain: true}).senderWindowEnd);
    tag.sender.setDataValue('isRecipient', false)
    tag.recipient.setDataValue('arrivalWindowStart', tag.get({plain: true}).recipientWindowStart);
    tag.recipient.setDataValue('arrivalWindowEnd', tag.get({plain: true}).recipientWindowEnd);
    tag.recipient.setDataValue('isRecipient', true)
    
  }
  res.json(data);    
});


app.get("/api/drivers", async function(req, res, next) {
  const data = await Driver.findAll({
    
  });
  res.json(data);
  // res.json(data.drivers)
});

app.put("/:id", function(req, res, next) {
  console.log(req.body);
  for (let tag of data.data) {
    if (tag.id === +req.params.id) {
      if (req.body.driver) {
        if (req.body.driver === "") tag.assignedTo = null;
        else tag.assignedTo = +req.body.driver;
      }
      if (req.body.status) {
        tag.status = req.body.status;
      }
      
    }
  }

  res.json(data.data);

  fs.writeFile("./db.json", JSON.stringify({drivers: drivers, count: count, data: data.data}, null, 2), (err) => err ? console.error(err) : console.log("success"));
})

app.post("/api/tags", async function(req, res, next) {

  const sender = {

    "name": "Krumper",
    "address": "44 Montgomery st.",
    "city": "San Francisco",
    "state": "CA",
    "zip": 94104
  }
  const recipient = {

    "name": "Krumper",
    "address": "44 Montgomery st.",
    "city": "San Francisco",
    "state": "CA",
    "zip": 94104
  }

  const createSender = await Client.create(sender);

  const createRecipient = await Client.create(recipient);

  const tag = { 
    ...req.body, 
    status: "ready",
    recipientId: createRecipient.get({plain: true}).id,
    senderId: createSender.get({plain: true}).id,
    senderWindowStart: req.body.senderWindowStart,
    senderWindowEnd: req.body.senderWindowEnd,
    recipientWindowStart: req.body.recipientWindowStart,
    recipientWindowEnd: req.body.recipientWindowEnd,
  }
  
  const createTag = await Tag.create(tag);

  res.json(data);

});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

