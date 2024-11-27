import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';

const Modal = ({ open, onClose, title, children, onSave }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
    </DialogActions>
  </Dialog>
);

export default Modal;
