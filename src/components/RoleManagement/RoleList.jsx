import React from 'react';
import { Button,Table,TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const RoleList = ({ roles, onEdit, onDelete }) => (
  <Table>
    <TableHead>
  <TableRow style={{ backgroundColor: '#133E87' }}>
    <TableCell sx={{ color: '#fff' }}>ID</TableCell>
    <TableCell sx={{ color: '#fff' }}>Name</TableCell>
    <TableCell sx={{ color: '#fff' }}>Email</TableCell>
    <TableCell sx={{ color: '#fff' }}>Role</TableCell>
  </TableRow>
</TableHead>
    <TableBody>
      {roles.map((role) => (
        <TableRow key={role.id}>
          <TableCell>{role.id}</TableCell>
          <TableCell>{role.name}</TableCell>
          <TableCell>{role.permissions.join(', ')}</TableCell>
          <TableCell>
            <Button onClick={() => onEdit(role)}>Edit</Button>
            <Button color="error" onClick={() => onDelete(role.id)}>
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default RoleList;
