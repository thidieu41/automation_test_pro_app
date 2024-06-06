import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingPageComponent from '../landingpage';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);



function Overview() {
  return (
    <OverviewWrapper>
     <LandingPageComponent/>
    </OverviewWrapper>
  );
}

export default Overview;
