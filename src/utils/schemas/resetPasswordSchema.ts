import * as yup from 'yup';

// Constants
import {
  requiredMessage,
  passwordsMessage,
  validationLength,
  minValidationLength,
  minLengthMessage,
  maxLengthMessage,
} from '../../constants';

const resetPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .min(minValidationLength.base, minLengthMessage.base)
    .max(validationLength.base, maxLengthMessage.base)
    .required(requiredMessage),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword')], passwordsMessage),
});

export type ResetPasswordFormDataType = yup.InferType<typeof resetPasswordSchema>;

export default resetPasswordSchema;
