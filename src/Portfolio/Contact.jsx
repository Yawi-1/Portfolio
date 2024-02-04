import React, { useState } from "react";
import './Css/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value   
    }));
  };

  const handleSubmit = async (event) => {
    setSubmitted(!submitted)
    event.preventDefault();
    const submitData = { ...formData, access_key: "19c2f795-3464-491b-ae84-589794559686" };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitData)
      });
      
      const data = await res.json();
      if (data.success) {
        console.log("Success", data);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error scenarios if needed
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Let's Connect</h1>
    {submitted ?<><form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <textarea
      name="message"
      placeholder="Write a Message"
      value={formData.message}
      onChange={handleChange}
    ></textarea>
    <button type="submit" className="submit-button">
      Submit Form
    </button>
  </form>
  </> : <p className="submit">Thank you for your message!</p>}
     </div>
  );
}

export default Contact;
