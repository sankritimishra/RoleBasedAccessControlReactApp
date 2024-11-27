import React from 'react';
import { Button,Table,TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const UserList = ({ users, onEdit, onDelete }) => (
  <Table>
    <TableHead>
  <TableRow style={{ backgroundColor: '#133E87' }}>
    <TableCell sx={{ color: '#fff' }}>ID</TableCell>
    <TableCell sx={{ color: '#fff' }}>Name</TableCell>
    <TableCell sx={{ color: '#fff' }}>Email</TableCell>
    <TableCell sx={{ color: '#fff' }}>Role</TableCell>
    <TableCell sx={{ color: '#fff' }}>Status</TableCell>
    <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
  </TableRow>
</TableHead>
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>
            <Button onClick={() => onEdit(user)}>Edit</Button>
            <Button color="error" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UserList;
