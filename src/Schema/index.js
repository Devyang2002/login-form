import * as Yup from 'yup';

// define the user schema as a yup object

export const signupSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your First Name"),
    lastname: Yup.string().min(1).max(25).required("Please enter your Last Name"),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string()
    .matches(/[A-Za-z]+.*\d+|\d+.*[A-Za-z]+/, 'Address must contain both street name and number')
    .required('Please enter your address'),
    password: Yup.string()
  .min(5, 'Password must be at least 6 characters')
  .matches(
    /.*[@$!%*#?&].*/,
    'Password must contain at least one special character'
  )
  .required('Please enter your Password'),
    confirm_password: Yup.string().required("Password Confirmation is must").oneOf([Yup.ref("password"),null], "Password must match"),
})