import { useState, useEffect } from 'react';
import { Box, Typography, ButtonBase, useTheme, useMediaQuery } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import PhoneIcon from '@mui/icons-material/Phone';
import ReportIcon from '@mui/icons-material/Report';
import { carouselSlides } from '../data/staticData';

const iconMap = {
  shield: ShieldIcon,
  people: GroupsIcon,
  phone: PhoneIcon,
  report: ReportIcon,
};

/**
 * Carousel at top of Home. Each slide is clickable and scrolls to the corresponding section.
 */
function CarouselSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 0,
        minHeight: { xs: 200, sm: 260 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" color="white" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          {carouselSlides[activeIndex].title}
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.9)" sx={{ mb: 2 }}>
          {carouselSlides[activeIndex].subtitle}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {carouselSlides.map((slide, index) => {
            const Icon = iconMap[slide.icon] || ShieldIcon;
            return (
              <ButtonBase
                key={slide.id}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToSection(slide.id);
                }}
                sx={{
                  borderRadius: 2,
                  p: 1.5,
                  bgcolor: activeIndex === index ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  transition: 'background 0.2s',
                }}
                aria-label={`Go to ${slide.title}`}
              >
                <Icon sx={{ color: 'white', fontSize: isMobile ? 28 : 36 }} />
              </ButtonBase>
            );
          })}
        </Box>
      </Box>
      {/* Dots indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 0.5,
        }}
      >
        {carouselSlides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: activeIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CarouselSection;
