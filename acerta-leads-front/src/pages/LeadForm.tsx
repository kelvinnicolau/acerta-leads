import React, { useState } from "react";
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

  const handleNext = (values: any) => {
    setPersonalData(values);
    setStep(2);
  };

  const handleSubmit = async (values: any) => {
    try {
      await addLead({ ...personalData, ...values });
      alert("Lead cadastrado com sucesso!");
    } catch (error) {
      console.error("Error adding lead: ", error);
      alert("Erro ao cadastrar lead.");
    }
  };

  return (
    <FormContainer>
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
