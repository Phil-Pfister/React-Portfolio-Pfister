import { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "user_fname") {
      setFirstName(inputValue);
    } else if (inputType === "user_lname") {
      setLastName(inputValue);
    } else if (inputType === "user_email") {
      setEmail(inputValue);
    } else {
      setComment(inputValue);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("invalid email address");
      return;
    }
    if (!firstName || !lastName) {
      setErrorMessage("Both name fields are required");
      return;
    }
    if (!comment) {
      setErrorMessage("comment field required");
      return;
    }
    emailjs
      .sendForm(
        "service_46k70br",
        "template_k1cleqb",
        form.current,
        "AE8TQiyGL4yYkSkuo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFirstName("");
    setLastName("");
    setEmail("");
    setComment("");
    setErrorMessage("");
    alert(`Thank you ${firstName} ${lastName} for your submission`);
  };

  return (
    <div className="container contact mt-5 min-vh-100">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info">
            <i className="bi bi-envelope contact-icon"></i>
            <h2>Contact Me</h2>
            <h4>I would love to hear from you!</h4>
          </div>
        </div>
        <div className="col-md-9">
          <p>
            <i className="bi bi-envelope"></i>{" "}
            <a href="mailto:salshouse@gmail.com">salshouse@gmail.com</a>
          </p>
          <p>
            <i className="bi bi-linkedin"></i>{" "}
            <a href="https://www.linkedin.com/in/phil-pfister-4b75335/">
              LinkedIn Profile
            </a>
          </p>

          <form onSubmit={handleFormSubmit} ref={form} className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="fname">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  value={firstName}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="user_fname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="lname">
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  value={lastName}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Last Name"
                  name="user_lname"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  value={email}
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="user_email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="comment">
                Comment:
              </label>
              <div className="col-sm-10">
                <textarea
                  value={comment}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div>
                <p className="error-message">{errorMessage}</p>
              </div>
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-outline-secondary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
