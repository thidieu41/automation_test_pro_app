import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const menuList = [
  {
    name: 'Courses',
    url: ''
  },
  {
    name: 'LMS',
    url: ''
  },
  {
    name: 'Blog',
    url: ''
  }
];

const Header = () => {
  return (
    <Stack
      direction={'row'}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: '7px 30px'
      }}
    >
      <Box>
        <img
          src="https://automationtestpro.com/wp-content/uploads/2022/01/logo_update_1010.png"
          alt="logo"
          style={{
            maxHeight: 60
          }}
        />
      </Box>
      <Stack
        direction={'row'}
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {menuList.map((item, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: 15,
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': {
                color: '#3BBBA7'
              }
            }}
          >
            {item.name}
          </Typography>
        ))}

        <Button
            component={RouterLink}
            to="/dashboards/crypto"
            size="medium"
            variant="outlined"
            sx={{
              borderRadius:0
            }}
          >
            Login
          </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
