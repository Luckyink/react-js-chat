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
      <div class="chat-message clearfix">
          <div class="input-group mb-0">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-send"></i></span>
              </div>
              <input className="form-control"
              id="message"
              name="message"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
              autoComplete="off"
              placeholder="What is your message?" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">Send</button>
              </div>                                   
          </div>
      </div>
    </form>
    
  )
};

export default React.memo(PostMessage);