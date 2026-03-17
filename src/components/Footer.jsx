import { Box, Typography, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

/**
 * Footer with tagline and social link placeholders
 */
function Footer() {
  const theme = useTheme();

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
    { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
    { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1rem', sm: '1.15rem' } }}
        >
          Stay Safe. Stay Strong.
        </Typography>
        <Typography variant="body2" align="center" sx={{ opacity: 0.9, mb: 2 }}>
          Women's Safety & Community — India
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
          {socialLinks.map(({ icon, label, href }) => (
            <IconButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
