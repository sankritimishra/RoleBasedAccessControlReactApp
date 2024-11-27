import React, { useState } from 'react';
import RoleList from './RoleList';
import Modal from '../Shared/Modal';
import RoleForm from './RoleForm';
import '/Users/sankritimishra/my-app/src/components/RoleManagement/RoleManagement.css';

const RoleManagementPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const [nextUserId, setNextUserId] = useState(3); // Start from 3 since 1 and 2 are already used
  const [nextRoleId, setNextRoleId] = useState(3);

  const handleAddRole = () => {
    setCurrentRole(null);
    setModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setModalOpen(true);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSaveRole = (role) => {
    if (role.id) {
        setRoles(roles.map((r) => (r.id === role.id ? role : r)));
      } else {
        setRoles([...roles, { ...role, id: nextRoleId }]);
        setNextRoleId(nextRoleId + 1);
      }
    setModalOpen(false);
  };

  return (
    <div>
        <div className = "role-management">
      <h1>Role Management</h1>
      <button className = "add-role-button" onClick={handleAddRole}>Add Role</button>
      </div>
      <RoleList roles={roles} onEdit={handleEditRole} onDelete={handleDeleteRole} />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentRole ? 'Edit Role' : 'Add Role'}
        onSave={() => {}}
      >
        <RoleForm
          initialValues={currentRole || { name: '', permissions: [] }}
          onSubmit={(values) => handleSaveRole(values)}
        />
      </Modal>
    </div>
  );
};

export default RoleManagementPage;
