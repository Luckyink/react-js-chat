import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PostMessage = ({ onPostMessage }) => {

  // Initialize a form instance with useFormik hook
  const formik = useFormik({
    // Disable validation onChange and onBlur for keeping validation errors less annoying
    validateOnChange: false,
    validateOnBlur: false,
    // Initial form values
    initialValues: {
      message: '',
    },
    // Form values validation with Yup
    validationSchema: Yup
      .object()
      .shape({
        message: Yup.string()
          .required('message text is required.')
        }
      ),
    onSubmit: (values, { resetForm }) => {
      
      onPostMessage(values.message);

      // Reset the form after submitting successfully
      resetForm();
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="chat-message clearfix">
          <div className="input-group mb-0">
              <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-send"></i></span>
              </div>
              <input className="form-control"
              id="message"
              name="message"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
              autoComplete="off"
              placeholder="What is your message?" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Send</button>
              </div>                                   
          </div>
      </div>
    </form>
    
  )
};

export default React.memo(PostMessage);