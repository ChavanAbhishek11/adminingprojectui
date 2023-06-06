import React from 'react';
import './userTable.css';
import { Save } from '../../utils/icon';

const UserEdit = ({ onChange, SubmitForm, form: { email, name, role } }) => {
  return (
    <form onSubmit={SubmitForm} className="UserEdit">
      <span />
      <input onChange={onChange} value={name} type="text" name="name" />
      <input onChange={onChange} value={email} type="email" name="email" />
      <input onChange={onChange} value={role} type="text" name="role" />
      <button type="submit">
        <Save /> Save
      </button>
    </form>
  );
};

export default UserEdit;
