import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useTheme } from '@mui/material/styles';

/**
 * About page: Purpose, India focus, community-driven support, awareness & reporting.
 */
function About() {
  const theme = useTheme();

  const sections = [
    {
      icon: <ShieldIcon sx={{ fontSize: 48 }} />,
      title: 'Purpose of the Platform',
      text: "Women's Safety & Community is a frontend resource hub dedicated to empowering women across India with information, tools, and support. We aim to centralise safety tips, helplines, and community links so that anyone can quickly find help and stay informed.",
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 48 }} />,
      title: 'Focus on Women Safety in India',
      text: 'Our content is tailored for India: national helplines (1091, 112, 100), transport safety (Ola, Uber, Rapido), and India-specific NGOs and campaigns. We believe access to reliable, local information can make a real difference in everyday safety.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: 'Community-Driven Support',
      text: 'We highlight community platforms—Instagram pages, YouTube channels, Facebook groups, and NGOs—where women can connect, share experiences, and support each other. Safety is stronger when we stand together.',
    },
    {
      icon: <CampaignIcon sx={{ fontSize: 48 }} />,
      title: 'Encourage Awareness & Reporting',
      text: 'We encourage awareness through tips and quick safety hacks, and provide a simple way to raise a complaint. Reporting helps create accountability and can lead to better support from authorities. Your voice matters.',
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} color="text.primary" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Women's Safety & Community — India
        </Typography>

        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              borderLeft: 4,
              borderColor: theme.palette.primary.main,
              '&:hover': { boxShadow: 4 },
              transition: 'box-shadow 0.3s',
            }}
          >
            <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <Box sx={{ color: theme.palette.primary.main }}>{section.icon}</Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {section.text}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default About;
