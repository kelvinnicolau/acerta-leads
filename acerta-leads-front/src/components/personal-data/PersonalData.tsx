import React from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  MARITAL_STATUS,
  MARITAL_STATUS_OPTIONS,
} from "../../interfaces/PersonalData/enums/maritalStatus";
import {
  Input,
  SectionData,
  SectionNumber,
  SectionTitle
} from "../../styles/PersonalDataStyles";
import { PersonalDataSchema } from "../../yupSchemas/personalData";
import number1 from '../../assets/images/parte-1-selecionada.svg';
import number2 from '../../assets/images/parte-2.svg'; 
import data from '../../assets/images/dados-pessoais.svg'; 


interface PersonalDataProps {
  onNext: (values: any) => void;
}

const PersonalData: React.FC<PersonalDataProps> = ({ onNext }) => {
  const navigate = useNavigate();

  return (
    <SectionData>
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
        <img src={data} alt="Dados Pessoais" />
        <h2>Dados Pessoais</h2>
      </SectionTitle>
      <Formik
        initialValues={{ cpf: "", name: "", maritalStatus: "", spouseName: "" }}
        validationSchema={PersonalDataSchema}
        onSubmit={(values) => onNext(values)}
      >
        {({ errors, touched, values, setFieldValue }) => {
          const isSpouseNameDisabled =
            values.maritalStatus !== MARITAL_STATUS.MARRIED;

          return (
            <Form>
              <div>
                <label htmlFor="cpf">CPF</label>
                <Field name="cpf" type="text" />
                {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
              </div>
              <div>
                <label htmlFor="name">Nome do Cliente</label>
                <Field name="name" type="text" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>
              <div>
                <label htmlFor="maritalStatus">Estado Civil</label>
                <Field
                  as="select"
                  name="maritalStatus"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const value = e.target.value;
                    setFieldValue("maritalStatus", value);

                    if (value !== MARITAL_STATUS.MARRIED) {
                      setFieldValue("spouseName", "");
                    }
                  }}
                >
                  <option value="">Selecione</option>
                  {MARITAL_STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                {errors.maritalStatus && touched.maritalStatus ? (
                  <div>{errors.maritalStatus}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="spouseName">Nome do Cônjuge</label>
                <Input
                  name="spouseName"
                  type="text"
                  disabled={isSpouseNameDisabled}
                />
                {errors.spouseName && touched.spouseName ? (
                  <div>{errors.spouseName}</div>
                ) : null}
              </div>
              <button type="button" onClick={() => navigate("/")}>
                Cancelar
              </button>
              <button type="submit">Próximo</button>
              
            </Form>
          );
        }}
      </Formik>
    </SectionData>
  );
};

export default PersonalData;
