import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.string()
    .matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"')
    .required('This field is required!'),
});
export const ContactForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, actions) => {
        onAdd(values)
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
