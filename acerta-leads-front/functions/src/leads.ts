import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const getLeads = functions.https.onRequest(async (request, response) => {
  try {
    const snapshot = await db.collection('leads').get();
    const leads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    response.status(200).json(leads);
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    response.status(500).send(errorMessage);
  }
});

export const createLead = functions.https.onRequest(async (request, response) => {
  try {
    const { name, email, cpf } = request.body;
    const newLead = { name, email, cpf };
    const leadRef = await db.collection('leads').add(newLead);
    response.status(201).json({ id: leadRef.id, ...newLead });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    response.status(500).send(errorMessage);
  }
});
