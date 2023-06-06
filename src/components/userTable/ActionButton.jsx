import React from 'react';

import './userTable.css';
import { Delete, Edit } from '../../utils/icon';

const ActionButton = ({ id, handleEdit, handleDelete }) => {
  return (
    <div className="Action">
      <Edit id={id} handleClick={handleEdit} />
      <Delete id={id} handleClick={handleDelete} />
    </div>
  );
};

export default ActionButton;
