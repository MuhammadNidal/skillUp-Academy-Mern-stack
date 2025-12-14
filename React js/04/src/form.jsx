import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [fathername, setfathername] = useState("");
  const [age, setage] = useState("");
  const [educatin, seteducatin] = useState("");
  const [schoolname, setschoolname] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
      <br />
      <br />
      <input
        type="text"
        value={fathername}
        onChange={(e) => setfathername(e.target.value)}
      />
      <p>Name: {fathername}</p>

      <br />
      <br />
      <input type="text" value={age} onChange={(e) => setage(e.target.value)} />
      <input
        type="text"
        value={schoolname}
        onChange={(e) => setschoolname(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={educatin}
        onChange={(e) => seteducatin(e.target.value)}
      />
    </div>
  );
};

export default Form;
