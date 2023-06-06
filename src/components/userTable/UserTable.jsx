import React from 'react';
import UserDetials from './UserDetials';
import UserEdit from './UserEdit';
import ActionButton from './ActionButton';
import './userTable.css';

const UserTable = ({
  users,
  usersOnCurrentPage,
  form,
  edit,
  usersToDelete,
  handleAllCheckbox,
  handleCheckbox,
  handleEdit,
  onChange,
  SubmitForm,
  handleDelete,
}) => {
  return (
    <div className="table">
      <UserDetials
        className={'table-head'}
        checkBox={
          <input
            type="checkbox"
            onChange={handleAllCheckbox}
            checked={usersToDelete.length === 10}
          />
        }
        name={'Name'}
        email={'Email'}
        role={'Role'}
        action={'Action'}
      />

      {usersOnCurrentPage.map((user) => {
        return edit === user.id ? (
          <UserEdit key={user.id} {...{ SubmitForm, onChange }} form={form} />
        ) : (
          <UserDetials
            key={user.id}
            className={'table-body'}
            checkBox={
              <input
                id={user.id}
                className="pointer"
                checked={usersToDelete.includes(user.id)}
                onChange={handleCheckbox}
                type="checkbox"
              />
            }
            name={user.name}
            email={user.email}
            role={user.role}
            action={
              <ActionButton
                id={user.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            }
          />
        );
      })}
    </div>
  );
};

export default UserTable;
