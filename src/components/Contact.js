import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [display, setDisplay] = useState("none");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [username_style, setUsername_style] = useState("");
  const [email_style, setEmail_style] = useState("");
  const [message_style, setMessage_style] = useState("");

  const [sendMessage, setSendMessage] = useState(
    "Your Message send with success ): have a nice day Thanks."
  );

  const [isEnabled, setEnabled] = useState(true);
  //username.length > 0 && email.length > 0 && message.length > 0;
  // username === "" && email === "" && message === ""

  const sendEmail = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || message === "") {
      setSendMessage("All input is required");
      setDisplay("block");
    } else {
      emailjs
        .sendForm(
          "service_um0yrya",
          "template_b9cghoe",
          e.target,
          "Wk8Uwe-3yAJsMsLDu"
        )
        .then((res) => {
          console.log(res);
          setSendMessage(
            "Your Message send with success ): have a nice day Thanks..."
          );
          setDisplay("block");

          setUsername("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    } // end else
  }; // end send email

  useEffect(() => {}, [sendMessage]);

  return (
    <div className="d-flex justify-content-center">
      <div className="card card-primary d-flex justify-content-center">
        <form onSubmit={sendEmail}>
          <div className="form-group d-flex justify-content-center">
            <h2 className="text-success my-2"> Contact me </h2>
          </div>
          <div
            className="alert alert-primary my-2 border-danger"
            style={{ display: display }}
          >
            {sendMessage}
          </div>

          <div className="form-group starlabel">
            <label>Username</label>
            <input
              type="text"
              style={{ width: "400px" }}
              name="username"
              className="form-control"
              placeholder="Enter Uesrname"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
          </div>

          <div className="form-group starlabel">
            <label>Email</label>
            <input
              type="email"
              style={{ width: "400px" }}
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="form-group starlabel">
            <label>Message</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Enter Message"
              rows="6"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>
          </div>

          <div className="form-group d-flex justify-content-center">
            <button /* disabled={isEnabled} */ className="btn btn-primary my-5">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
