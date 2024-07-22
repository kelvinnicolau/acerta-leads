import React from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  SectionContact,
  SectionNumber,
  SectionTitle,
} from "../../styles/ContactDataStyles";
import number1 from '../../assets/images/parte-1-ok.svg';
import number2 from '../../assets/images/parte-2-selecionada.svg'; 
import data from '../../assets/images/contato.svg'; 
import { ContactDataSchema } from "../../yupSchemas/contactData";

interface ContactDataProps {
  onSubmit: (values: any) => void;
  initialValues: any;
}

const ContactData: React.FC<ContactDataProps> = ({
  onSubmit,
  initialValues,
}) => {
  const navigate = useNavigate();

  return (
    <SectionContact>
      <SectionNumber>
        <span>
          <img src={number1} alt="Fase 1" />
          Dados pessoais
        </span>
        <div></div>
        <span>
          <img src={number2} alt="Fase 2" />
          Contato
        </span>
      </SectionNumber>
      <SectionTitle>
        <img src={data} alt="Contato" />
        <h2>Contato</h2>
      </SectionTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactDataSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email &&
              touched.email &&
              typeof errors.email === "string" ? (
                <div>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <Field name="phone" type="text" />
              {errors.phone &&
              touched.phone &&
              typeof errors.phone === "string" ? (
                <div>{errors.phone}</div>
              ) : null}
            </div>
            <button type="button" onClick={() => navigate("/")}>
              Cancelar
            </button>
            <button type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </SectionContact>
  );
};

export default ContactData;
