import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contact_number: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
