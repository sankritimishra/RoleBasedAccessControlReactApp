import React, { useState } from 'react';
import UserList from './UserList';
import Modal from '../Shared/Modal';
import UserForm from './UserForm';
import '/Users/sankritimishra/my-app/src/components/UserManagement/UserManagement.css';

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [nextUserId, setNextUserId] = useState(3); // Start from 3 since 1 and 2 are already used
  const [nextRoleId, setNextRoleId] = useState(3);

  const handleAddUser = () => {
    setCurrentUser(null);
    setModalOpen(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (user) => {
    if (user.id) {
        setUsers(users.map((u) => (u.id === user.id ? user : u)));
      } else {
        setUsers([...users, { ...user, id: nextUserId }]);
        setNextUserId(nextUserId + 1);
      }
    setModalOpen(false);
  };

  return (
    <div>
      <div className = "user-management">
      <h1>User Management</h1>
      <button className = "add-user-button"onClick={handleAddUser}>Add User</button>
      </div>
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentUser ? 'Edit User' : 'Add User'}
        onSave={() => {}}
      >
        <UserForm
          initialValues={currentUser || { name: '', email: '', role: '', status: 'Active' }}
          onSubmit={(values) => handleSaveUser(values)}
        />
      </Modal>
    </div>
  );
};

export default UserManagementPage;
