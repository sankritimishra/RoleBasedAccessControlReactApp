// import React, { useState } from 'react';
// import AppLayout from './components/AppLayout';
// import UserList from './components/UserManagement/UserList';
// import RoleList from './components/RoleManagement/RoleList';
// import Modal from './components/Shared/Modal';
// import UserForm from './components/UserManagement/UserForm';
// import RoleForm from './components/RoleManagement/RoleForm';

// const App = () => {
//   // States for Users
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
//   ]);
//   const [userModalOpen, setUserModalOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [nextUserId, setNextUserId] = useState(3); // Start from 3 since 1 and 2 are already used
//   const [nextRoleId, setNextRoleId] = useState(3);
//   // States for Roles
//   const [roles, setRoles] = useState([
//     { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
//     { id: 2, name: 'User', permissions: ['Read'] },
//   ]);
//   const [roleModalOpen, setRoleModalOpen] = useState(false);
//   const [currentRole, setCurrentRole] = useState(null);

//   // User Management Handlers
//   const handleAddUser = () => {
//     setCurrentUser(null);
//     setUserModalOpen(true);
//   };

//   const handleEditUser = (user) => {
//     setCurrentUser(user);
//     setUserModalOpen(true);
//   };

//   const handleDeleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const handleSaveUser = (user) => {
//     if (user.id) {
//       setUsers(users.map((u) => (u.id === user.id ? user : u)));
//     } else {
//       setUsers([...users, { ...user, id: nextUserId }]);
//       setNextUserId(nextUserId + 1);
//     }
//     setUserModalOpen(false);
//   };

//   // Role Management Handlers
//   const handleAddRole = () => {
//     setCurrentRole(null);
//     setRoleModalOpen(true);
//   };

//   const handleEditRole = (role) => {
//     setCurrentRole(role);
//     setRoleModalOpen(true);
//   };

//   const handleDeleteRole = (id) => {
//     setRoles(roles.filter((role) => role.id !== id));
//   };

//   const handleSaveRole = (role) => {
//     if (role.id) {
//       setRoles(roles.map((r) => (r.id === role.id ? role : r)));
//     } else {
//       setRoles([...roles, { ...role, id: nextRoleId }]);
//       setNextRoleId(nextRoleId + 1);
//     }
//     setRoleModalOpen(false);
//   };

//   return (
//     <AppLayout>
//       <div className="container">
//         {/* User Management */}
//         <section>
//           <h1>User Management</h1>
//           <button onClick={handleAddUser}>Add User</button>
//           <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
//         </section>

//         {/* Role Management */}
//         <section style={{ marginTop: '40px' }}>
//           <h1>Role Management</h1>
//           <button onClick={handleAddRole}>Add Role</button>
//           <RoleList roles={roles} onEdit={handleEditRole} onDelete={handleDeleteRole} />
//         </section>
//       </div>

//       {/* User Modal */}
//       <Modal
//         open={userModalOpen}
//         onClose={() => setUserModalOpen(false)}
//         title={currentUser ? 'Edit User' : 'Add User'}
//         onSave={() => {}}
//       >
//         <UserForm
//           initialValues={currentUser || { name: '', email: '', role: '', status: 'Active' }}
//           onSubmit={(values) => handleSaveUser(values)}
//         />
//       </Modal>

//       {/* Role Modal */}
//       <Modal
//         open={roleModalOpen}
//         onClose={() => setRoleModalOpen(false)}
//         title={currentRole ? 'Edit Role' : 'Add Role'}
//         onSave={() => {}}
//       >
//         <RoleForm
//           initialValues={currentRole || { name: '', permissions: [] }}
//           onSubmit={(values) => handleSaveRole(values)}
//         />
//       </Modal>
//     </AppLayout>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import LandingPage from './components/LandingPage';
import UserManagementPage from './components/UserManagement/UserManagementPage';
import RoleManagementPage from './components/RoleManagement/RoleManagementPage';

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* User Management Page */}
          <Route path="/users" element={<UserManagementPage />} />
          
          {/* Role Management Page */}
          <Route path="/roles" element={<RoleManagementPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
