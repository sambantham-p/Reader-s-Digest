
import {Toolbar} from '@mui/material';
import {Box} from '@mui/material';
import {Link} from '@mui/material';
import { AppBar } from '@mui/material';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
  };
  
  function AppAppBar() {
    return (
      <div>
       
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1 }} />
            
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/signin"
                sx={rightLink}
              >
                {'Sign In'}
              </Link>
              <Link
                variant="h6"
                underline="none"
                href="/signup"
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
               
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    );
  }
  
  export default AppAppBar;