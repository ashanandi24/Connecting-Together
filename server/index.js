const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const authRoutes = require('./routes/auth.js');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/auth', authRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).array('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    const dir = __dirname + `/${req.body.channelName}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    req.files.forEach((file) => {
      const pathToFile = path.join(__dirname, 'public', `${file.originalname}`);
      const pathToNewDestination = path.join(
        __dirname,
        `${req.body.channelName}`,
        `${Date.now() + '-' + file.originalname}`
      );

      fs.copyFile(pathToFile, pathToNewDestination, (err) => {
        if (err) throw err;
      });
    });
    return res.status(200).send(req.files);
  });
});

app.post('/', (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if(type === 'message.new') {
      members
          .filter((member) => member.user_id !== sender.id)
          .forEach(({ user }) => {
              if(!user.online) {
                  twilioClient.messages.create({
                      body: `You have a new message from ${message.user.fullName} - ${message.text}`,
                      messagingServiceSid: messagingServiceSid,
                      to: user.phoneNumber
                  })
                      .then(() => console.log('Message sent!'))
                      .catch((err) => console.log(err));
              }
          })

          return res.status(200).send('Message sent!');
  }

  return res.status(200).send('Not a new message request');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));