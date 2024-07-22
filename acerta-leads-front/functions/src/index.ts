import * as admin from 'firebase-admin';
import { getLeads, createLead } from './leads';

admin.initializeApp();

export { getLeads, createLead };

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
