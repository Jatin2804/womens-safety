import { Box, Container, Typography } from '@mui/material';
import CarouselSection from '../components/CarouselSection';
import TabsSection from '../components/TabsSection';

/**
 * Home page: Carousel at top, then Tabs (Safety, Community, Helplines, Complaint).
 */
function Home() {
  return (
    <Box sx={{ flex: 1, minHeight: '100%' }}>
      <CarouselSection />
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Typography variant="h5" fontWeight={700} color="text.primary" align="center" gutterBottom>
          Resources & Support
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
          India-focused safety tips, community links, helplines, and complaint form
        </Typography>
        <TabsSection />
      </Container>
    </Box>
  );
}

export default Home;
