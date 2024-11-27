import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import '/Users/sankritimishra/my-app/src/components/RoleManagement/RoleManagement.css';

const RoleForm = ({ initialValues, onSubmit }) => {
  const permissionsList = ['Read', 'Write', 'Delete'];

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        label="Role Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <div>
        <h3>Permissions</h3>
        {permissionsList.map((permission) => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={formik.values.permissions.includes(permission)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  formik.setFieldValue(
                    'permissions',
                    checked
                      ? [...formik.values.permissions, permission]
                      : formik.values.permissions.filter((p) => p !== permission)
                  );
                }}
              />
            }
            label={permission}
          />
        ))}
        <Button className = "save-button" type="submit" variant="contained" color="primary">
        Save
      </Button>
      </div>
    </form>
  );
};

export default RoleForm;
