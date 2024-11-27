import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@mui/material';

const PermissionsTable = ({ permissions, onToggle }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Permission</TableCell>
        <TableCell>Read</TableCell>
        <TableCell>Write</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {permissions.map((perm, index) => (
        <TableRow key={index}>
          <TableCell>{perm.name}</TableCell>
          <TableCell>
            <Checkbox
              checked={perm.read}
              onChange={() => onToggle(index, 'read')}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={perm.write}
              onChange={() => onToggle(index, 'write')}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={perm.delete}
              onChange={() => onToggle(index, 'delete')}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default PermissionsTable;
