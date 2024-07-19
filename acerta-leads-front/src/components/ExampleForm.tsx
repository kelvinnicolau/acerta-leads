import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ExampleForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  });

  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ExampleForm;
