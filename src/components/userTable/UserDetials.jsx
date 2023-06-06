import React from 'react';
import './userTable.css';

const UserDetials = ({ className, checkBox, name, email, role, action }) => (
  <div className={className}>
    <span>{checkBox}</span>
    <span>{name}</span>
    <span>{email}</span>
    <span>{role}</span>
    <span>{action}</span>
  </div>
);

export default UserDetials;
