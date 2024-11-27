import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Select, MenuItem } from '@mui/material';
import '/Users/sankritimishra/my-app/src/components/UserManagement/UserManagement.css'

const UserForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField className= "email"
        fullWidth
        margin="normal"
        style={{"marginTop" : "8px"}}
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Select className = "admin-user-choice"
        fullWidth
        margin="normal"
        name="role"
        value={formik.values.role}
        onChange={formik.handleChange}
      >
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </Select>
      <Select className = "active-inactive-choice"
        fullWidth
        margin="normal"
        name="status"
        value={formik.values.status}
        onChange={formik.handleChange}
      >
        
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary" style={{"marginTop" : "8px"}}>
        Save
      </Button>
    </form>
  );
};

export default UserForm;
