import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Header from './Header';

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%'
      }}
    >
      <Header />
      {children || <Outlet />}
    </Box>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
