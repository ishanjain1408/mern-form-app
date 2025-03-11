import React, { useState } from 'react';
import '../styles/FormViewer.css';

const FormViewer = ({ form, onSubmit }) => {
  const [responses, setResponses] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(responses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form.title}</h2>
      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {field.type === 'text' && (
            <input
              type="text"
              onChange={(e) => setResponses({ ...responses, [field.label]: e.target.value })}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormViewer;