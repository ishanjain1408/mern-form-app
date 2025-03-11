import React from 'react';
import '../styles/FormList.css';

const FormList = ({ forms, onEdit, onDelete }) => {
  return (
    <div>
      {forms.map((form) => (
        <div key={form._id}>
          <h3>{form.title}</h3>
          <button onClick={() => onEdit(form._id)}>Edit</button>
          <button onClick={() => onDelete(form._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FormList;