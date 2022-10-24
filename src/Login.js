import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({loginHandler, peopleList}) => {
  const [status, setStatus] = useState(null);
  // Initialize a form instance with useFormik hook
  const formik = useFormik({
    // Disable validation onChange and onBlur for keeping validation errors less annoying
    validateOnChange: false,
    validateOnBlur: false,
    // Initial form values
    initialValues: {
      username: '',
    },
    // Form values validation with Yup
    validationSchema: Yup
      .object()
      .shape({
        username: Yup.string()
          .min(3, 'Username text is too short.')
          .max(20, 'Username text is too long.')
          .required('Username text is required.')
          
        }
      ),
    onSubmit: (values, { resetForm }) => {
      setStatus(null);

      if(!peopleList.includes(values.username))
      {
        loginHandler(values.username);
      }
      else
      {
        setStatus("Username Exists")
      }

      resetForm();
    },
  })

  const errorKeys = Object.keys(formik.errors);

  const aFormikError = errorKeys.length > 0 ? formik.errors[errorKeys[0]] : null;

  const error = aFormikError

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div className="loginbox bg-white">
            <div className="loginbox-title">JOIN CHAT</div>
            <div className="loginbox-textbox">
            <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              autoComplete="off"
              placeholder="What is your username?"
            />
            </div>
            
            {error && <div className="loginbox-textbox text-danger">{error}</div>}
            {status && <div className="loginbox-textbox text-danger">{status}</div>}
            <div className="loginbox-submit">
                <input type="submit" className="btn btn-primary btn-block" value="Join" />
            </div>
        </div>
    </div>
    </form>
    </>
  )
};

export default React.memo(Login);