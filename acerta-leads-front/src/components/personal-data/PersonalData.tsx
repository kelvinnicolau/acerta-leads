import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface PersonalDataProps {
  onNext: (values: any) => void;
}

const PersonalDataSchema = Yup.object().shape({
  cpf: Yup.string().required('CPF é obrigatório'),
  name: Yup.string().required('Nome é obrigatório'),
  maritalStatus: Yup.string().required('Estado civil é obrigatório'),
  spouseName: Yup.string().notRequired()
});

const PersonalData: React.FC<PersonalDataProps> = ({ onNext }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ cpf: '', name: '', maritalStatus: '', spouseName: '' }}
      validationSchema={PersonalDataSchema}
      onSubmit={(values) => onNext(values)}
    >
      {({ errors, touched }) => (
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
            <Field as="select" name="maritalStatus">
              <option value="">Selecione</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viúvo">Viúvo</option>
            </Field>
            {errors.maritalStatus && touched.maritalStatus ? <div>{errors.maritalStatus}</div> : null}
          </div>
          <div>
            <label htmlFor="spouseName">Nome do Cônjuge</label>
            <Field name="spouseName" type="text" />
            {errors.spouseName && touched.spouseName ? <div>{errors.spouseName}</div> : null}
          </div>
          <button type="button" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit">Próximo</button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalData;
