import * as yup from 'yup';

// Constants
import {
  requiredMessage,
  emailMessage,
  passwordsMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from '../../constants';

const signUpSchema = yup.object({
  firstName: yup.string().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  lastName: yup.string().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  email: yup.string().email(emailMessage).max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
  password: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  confirmPassword: yup.string().oneOf([yup.ref('password')], passwordsMessage),
});

export type SignUpFormDataType = yup.InferType<typeof signUpSchema>;

export default signUpSchema;
