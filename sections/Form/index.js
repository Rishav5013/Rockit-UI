import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://localhost:1337/api/form-details`, {
        data: {
          Firstname: firstName,
          Lastname: lastName,
          Email: email,
          Phone: phone,
        },
      })
      .then((value) => {
        alert("Form Submitted");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Lastname:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
