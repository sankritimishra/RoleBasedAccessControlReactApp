// import React from 'react';
// import { Typography, Box } from '@mui/material';
// import './LandingPage.css'; // Import custom CSS for animations

// const LandingPage = () => {
//   return (
//     <Box className="landing-page" textAlign="center" p={4}>
//       <Typography variant="h3" className="fade-in-top" gutterBottom>
//         Welcome to the Role-Based Access Control System
//       </Typography>
//       <Typography variant="body1" className="fade-in-top" paragraph>
//         This application implements Role-Based Access Control (RBAC), a method of restricting system
//         access to authorized users. It enables administrators to assign specific roles to users and
//         define permissions for each role. RBAC ensures security and simplifies management by
//         grouping permissions based on roles rather than individual users.
//       </Typography>
//       <Typography variant="body1" className="fade-in-top" paragraph>
//         Use the navigation links above to manage users and roles within the system.
//       </Typography>
//     </Box>
//   );
// };

// export default LandingPage;
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Particles from 'react-tsparticles'; // Particle animation
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box className="landing-page" textAlign="center" p={4} style={{ position: 'relative' }}>
      {/* Particle Background */}
      <Particles
        options={{
          background: { color: "#f4f4f4" },
          particles: { number: { value: 50 }, size: { value: 3 } },
        }}
        className="particles-bg"
      />

      {/* Content */}
      <Box className="landing-content">
        <Typography variant="h3" className="fade-in-top" gutterBottom>
          Welcome to the Role-Based Access Control System
        </Typography>
        <Typography variant="body1" className="fade-in-top" paragraph>
          This application implements Role-Based Access Control (RBAC) to enhance system security
          and simplify access management. Manage users, assign roles, and define permissions easily.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={() => navigate('/users')} style={{ marginRight: '10px' }}>
            Manage Users
          </Button>
          <Button variant="contained" color="secondary" onClick={() => navigate('/roles')}>
            Manage Roles
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
