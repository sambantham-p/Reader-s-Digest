import * as React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import {Box} from '@mui/material';
import { Paper } from '@mui/material';


function AppForm(props) {
  const { children } = props;

  return (
    <Box
     
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            background="light"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

AppForm.propTypes = {
  children: PropTypes.node,
};

export default AppForm;