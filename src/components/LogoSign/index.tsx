import { styled, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 100%;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

function Logo() {
  return (
    <Stack
      sx={{
        textAlign: 'center'
      }}
      spacing={1}
    >
      <LogoWrapper to="/overview">
        <img
          src="/asset/images/logo.png"
          style={{
            maxHeight: 50,
            maxWidth: 50,
            margin: 'auto'
          }}
        />
      </LogoWrapper>

      <Typography
        style={{
          fontWeight: 700,
          color: '#3BBBA7'
        }}
      >
        AUTOMATION TEST PRO
      </Typography>
    </Stack>
  );
}

export default Logo;
