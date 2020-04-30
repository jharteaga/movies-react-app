import React from 'react';

const Select = ({ name, label, error, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        id={name}
        name={name}
        className="form-control"
        value={value.name}
      >
        <option></option>
        {options.map((o) => (
          <option key={o._id} value={o.name}>
            {o.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
