import { Box, Container, Typography } from '@mui/material';
import ComplaintForm from '../components/ComplaintForm';

/**
 * Standalone Complaint page with form. Same form as in Home tab.
 */
function Complaint() {
  return (
    <Box sx={{ flex: 1, py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight={700} color="text.primary" align="center" gutterBottom>
          Raise a Complaint
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Your report will be forwarded to the concerned team. We take every complaint seriously.
        </Typography>
        <ComplaintForm />
      </Container>
    </Box>
  );
}

export default Complaint;
