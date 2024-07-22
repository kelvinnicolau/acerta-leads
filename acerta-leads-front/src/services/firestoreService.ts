import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Lead } from '../interfaces/Home/IHome';

// Adicionar um lead
export const addLead = async (lead: { name: string; cpf: string }) => {
  try {
    await addDoc(collection(db, 'leads'), lead);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// Obter todos os leads
export const fetchLeadsFromFirebase = async (): Promise<Lead[]> => {
  const leadsCollection = collection(db, 'leads');
  const leadsSnapshot = await getDocs(leadsCollection);
  const leadsList = leadsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Lead[];
  return leadsList;
};

// Atualizar um lead
// export const updateLead = async (id: string, updatedLead: { name?: string; cpf?: string }) => {
//   try {
//     const leadDoc = doc(db, 'leads', id);
//     await updateDoc(leadDoc, updatedLead);
//   } catch (error) {
//     console.error('Error updating document: ', error);
//   }
// };

// Excluir um lead
export const deleteLeadFromFirebase = async (id: string): Promise<void> => {
  const leadDocRef = doc(db, 'leads', id);
  await deleteDoc(leadDocRef);
};
