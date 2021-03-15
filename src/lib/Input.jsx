import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      color="secondary"
      {...props}
    />
  );
});

export default Input;
