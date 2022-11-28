import { Box, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../../../components';
import { useNavigate } from 'react-router-dom';

const NeedLogin = ()  => {
  const nav = useNavigate();

  return (
    <Box my={4} textAlign='center' minHeight='calc(100vh - 328px)'
      display={'flex'} justifyContent='center' alignItems='center'
    >
      <Box>
        <Typography variant='h4' sx={{marginBottom: 2}}>
        Bạn phải đăng nhập để xem được giỏ hàng
        </Typography>

        <CustomButton text='Đăng nhập' event={()=> nav('/login')}/>
      </Box>
    </Box>
  );
};

export default NeedLogin;
