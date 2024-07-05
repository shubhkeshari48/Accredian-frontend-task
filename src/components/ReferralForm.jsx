import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Modal, Box } from '@mui/material';

const ReferralForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(true); // Set open to true initially

  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    try {
      const response = await fetch('http://localhost:3000/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.error}`);
      }
  
      const result = await response.json();
      console.log('Success:', result);
      alert('Referral submitted successfully!');
      handleClose();
    } catch (error) {
      console.error('Submission Error:', error);
      alert(`There was a problem with your submission: ${error.message}`);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box 
        component="form" 
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <TextField
          label="Your Name"
          {...register('referrerName', { required: true })}
          error={!!errors.referrerName}
          helperText={errors.referrerName ? 'This field is required' : ''}
        />
        <TextField
          label="Your Email"
          {...register('referrerEmail', { required: true })}
          error={!!errors.referrerEmail}
          helperText={errors.referrerEmail ? 'This field is required' : ''}
        />
        <TextField
          label="Friend's Name"
          {...register('refereeName', { required: true })}
          error={!!errors.refereeName}
          helperText={errors.refereeName ? 'This field is required' : ''}
        />
        <TextField
          label="Friend's Email"
          {...register('refereeEmail', { required: true })}
          error={!!errors.refereeEmail}
          helperText={errors.refereeEmail ? 'This field is required' : ''}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ReferralForm;
