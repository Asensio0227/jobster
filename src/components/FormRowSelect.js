import React from 'react'

const FormRowSelect = ({ type, name, value, handleChange, labelText, list }) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select
        type={type}
        name={name}
        id={name}
        value={value}
        className='form-select'
        onChange={handleChange}>
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>{itemValue}</option>
          )
        })}
      </select>
    </div>
  )
};

export default FormRowSelect