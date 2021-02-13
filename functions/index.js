const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Filter = require('bad-words');

const app = express();

admin.initializeApp();

const db = admin.firestore();
const filter = new Filter();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get('/list', async (req, res) => {
  const postId = req.query.id || 'NO_ID';
  const comments = await db
    .collection('comments')
    .where('postId', '==', postId)
    .get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const { name, time, comment } = doc.data();
        data.push({ name, time, comment });
      });
      return data;
    })
    .catch(() => {
      return [];
    });

  res.json(comments);
});

app.post('/add', async (req, res) => {
  const postId = req.query.id;
  let { name, comment } = req.body;
  name = filter.clean(name.substring(0, 64));
  comment = filter.clean(comment.substring(0, 1024));

  if (!postId || !name || !comment) {
    res.json({ status: 'fail' });
    return;
  }

  const time = Date.now();

  const status = await db
    .collection('comments')
    .doc()
    .set({ postId, name, comment, time })
    .then(() => 'success')
    .catch(() => 'fail');

  res.json({ status });
});

exports.comments = functions.https.onRequest(app);
