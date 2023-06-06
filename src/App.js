
import React, { Component, useEffect, useState } from 'react'
import './App.css';
import { Pagination, Searchbar, UserTable } from './components';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);

  const [form, setForm] = useState({});
  const [edit, setEdit] = useState(null);
  const [usersToDelete, setUsersToDelete] = useState([]);


  const searchTermLowercase = searchTerm ? searchTerm.toLowerCase().trim() : '';

  let filteredUsers = users.filter(({ name, email, role }) =>
    !searchTermLowercase ||
    `${name.toLowerCase().trim()} ${email.toLowerCase().trim()} ${role.toLowerCase().trim()}`.includes(searchTermLowercase)
  );

  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;

  const usersOnCurrentPage = filteredUsers.slice(indexOfFirstPage, indexOfLastPage);



  const handleAllCheckbox = () => {
    if (usersToDelete.length === 10) {
      setUsersToDelete([]);
    } else {
      setUsersToDelete(usersOnCurrentPage.map((item) => item.id));
    }
  };

  const handleCheckbox = (e) => {
    if (usersToDelete.includes(e.currentTarget.id)) {
      setUsersToDelete(
        usersToDelete.filter((user) => user !== e.currentTarget.id)
      );
    } else {
      setUsersToDelete([...usersToDelete, e.currentTarget.id]);
    }
  };

  const handleEdit = (e) => {
    setEdit(e.currentTarget.id);
    const userEdit = usersOnCurrentPage.find(
      (user) => user.id === e.currentTarget.id
    );
    setForm({
      ...form,
      name: userEdit.name,
      email: userEdit.email,
      role: userEdit.role,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    setUsers(
      users.map((user) =>
        user.id === edit
          ? { ...user, name: form.name, email: form.email, role: form.role }
          : user
      )
    );
    setEdit(null);
  };

  const handleDelete = (e) => {
    setUsers(users.filter((user) => user.id !== e.currentTarget.id));
  };


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const fetchData = async () => {
    const URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    try {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data);
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container' >
      <Searchbar handleSearch={handleSearch} searchTerm={searchTerm} />

      <UserTable
        users={users}
        form={form}
        edit={edit}
        usersToDelete={usersToDelete}
        usersOnCurrentPage={usersOnCurrentPage}
        handleAllCheckbox={handleAllCheckbox}
        handleCheckbox={handleCheckbox}
        handleEdit={handleEdit}
        onChange={onChange}
        SubmitForm={SubmitForm}
        handleDelete={handleDelete}
      />

      <Pagination
        users={users}
        setUsers={setUsers}
        usersToDelete={usersToDelete}
        setUsersToDelete={setUsersToDelete}
        userPerPage={userPerPage}
        totalPosts={users.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  )
}

export default App

/*
/src 
  / components 
      -> pagination -> Pagination.jsx -> pagination.css
      -> searchbar -> Searchbar.jsx -> searchbar.css
      -> userTable -> UserTable.jsx 
                   -> userTable.css
                   -> UserDetials.jsx
                   -> UserEdit.jsx
                   -> ACtionButton.jsx
        index.js for importing all the above file
  /utils -> icon.js

  App.css
  App.js
  index.css
  index.js

      */