import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PersonalData from "../components/personal-data/PersonalData";
import ContactData from "../components/contact-data/ContactData";
import { addLead } from "../services/firestoreService";
import {
  FormContainer,
  Header,
  Title,
  ContainerMain,
} from "../styles/LeadFormStyles";

const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState<any>(null);
  const navigate = useNavigate();

  const handleNext = (values: any) => {
    setPersonalData(values);
    setStep(2);
  };

  const handleSubmit = async (values: any) => {
    try {
      await addLead({ ...personalData, ...values });
      toast.success("Lead cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000); // Aguarda 2 segundos antes de redirecionar
    } catch (error) {
      console.error("Error adding lead: ", error);
      toast.error("Erro ao cadastrar lead.");
    }
  };

  return (
    <FormContainer>
      <ToastContainer />
      <Header>
        <Title>Cadastro de Leads</Title>
      </Header>
      <ContainerMain>
        <div>
          {step === 1 && <PersonalData onNext={handleNext} />}
          {step === 2 && personalData && (
            <ContactData
              onSubmit={handleSubmit}
              initialValues={{ email: "", phone: "" }}
            />
          )}
        </div>
      </ContainerMain>
    </FormContainer>
  );
};

export default LeadForm;
