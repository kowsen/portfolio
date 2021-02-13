import functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const getComments = functions.https.onRequest(
  async (request, response) => {
    const comments = await db
      .collection('comments')
      .where('postId', '==', request.query.id)
      .get();
    response.json(comments);
  }
);
