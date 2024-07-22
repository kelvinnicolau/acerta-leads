import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Adicionar um lead
export const addLead = async (lead: { name: string; cpf: string }) => {
  try {
    await addDoc(collection(db, 'leads'), lead);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// Obter todos os leads
export const getLeads = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'leads'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting documents: ', error);
    return [];
  }
};

// Atualizar um lead
export const updateLead = async (id: string, updatedLead: { name?: string; cpf?: string }) => {
  try {
    const leadDoc = doc(db, 'leads', id);
    await updateDoc(leadDoc, updatedLead);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

// Excluir um lead
export const deleteLead = async (id: string) => {
  try {
    const leadDoc = doc(db, 'leads', id);
    await deleteDoc(leadDoc);
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
};
