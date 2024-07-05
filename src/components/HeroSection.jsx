import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import ReferralForm from './ReferralForm.jsx';

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex items-center justify-center'>
      <div className="hero-section">
      <Typography variant="h2">Refer & Earn</Typography>
      <div className='flex items-center justify-center'>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      </div>
      
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <ReferralForm />
        </Box>
      </Modal>
    </div>
    </div>
    
  );
};

export default HeroSection;
