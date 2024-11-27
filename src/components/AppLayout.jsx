// import React from 'react';
// import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';

// const AppLayout = ({ children }) => {
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             User and Role Management
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="lg" style={{ marginTop: '20px' }}>
//         {children}
//       </Container>
//     </div>
//   );
// };

// export default AppLayout;
// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const AppLayout = ({ children }) => {
//   return (
//     <div>
//       {/* Navbar */}
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
//             Role-Based Access Control System
//           </Typography>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/users">
//             Users
//           </Button>
//           <Button color="inherit" component={Link} to="/roles">
//             Roles
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Main Content */}
//       <Container maxWidth="lg" style={{ marginTop: '20px' }}>
//         {children}
//       </Container>
//     </div>
//   );
// };

// export default AppLayout;

import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Person, Security } from '@mui/icons-material';

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            RBAC System
          </Typography>
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/users" startIcon={<Person />}>
            Users
          </Button>
          <Button color="inherit" component={Link} to="/roles" startIcon={<Security />}>
            Roles
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </div>
  );
};

export default AppLayout;
