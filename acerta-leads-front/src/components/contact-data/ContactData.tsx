import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface ContactDataProps {
  onSubmit: (values: any) => void;
  initialValues: any;
}

const ContactDataSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório')
});

const ContactData: React.FC<ContactDataProps> = ({ onSubmit, initialValues }) => {
  const navigate = useNavigate();

  return (
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
            {errors.email && touched.email && typeof errors.email === 'string' ? (
              <div>{errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <Field name="phone" type="text" />
            {errors.phone && touched.phone && typeof errors.phone === 'string' ? (
              <div>{errors.phone}</div>
            ) : null}
          </div>
          <button type="button" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit">Cadastrar</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactData;
