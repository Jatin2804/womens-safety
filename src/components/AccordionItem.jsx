import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * Reusable accordion with optional image and fallback text if image fails to load.
 * Used for Safety, Community, and Helplines tabs.
 */
function AccordionItem({ title, image, fallbackText, children, defaultExpanded = false }) {
  const theme = useTheme();
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <Accordion defaultExpanded={defaultExpanded} sx={{ borderRadius: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 56 }}>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {showImage && (
          <Box
            component="img"
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 2,
              mb: 2,
            }}
          />
        )}
        {image && imgError && (
          <Box
            sx={{
              width: '100%',
              height: 120,
              borderRadius: 2,
              bgcolor: theme.palette.primary.light + '20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {fallbackText || 'Image unavailable'}
            </Typography>
          </Box>
        )}
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
