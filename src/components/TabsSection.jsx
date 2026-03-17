import { useState } from 'react';
import { Box, Tabs, Tab, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import AccordionItem from './AccordionItem';
import ComplaintForm from './ComplaintForm';
import QuickSafetyHacks from './QuickSafetyHacks';
import {
  safetyAccordions,
  communityAccordions,
  helplineAccordions,
} from '../data/staticData';

const tabIdToSection = {
  safety: 'safety',
  community: 'community',
  helplines: 'helplines',
  complaint: 'complaint',
};

/**
 * Tabs: Safety | Community | Helplines | Complaint
 * Renders accordions for first three and ComplaintForm for the fourth.
 */
function TabsSection() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="tabs-section" sx={{ py: 3 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          borderBottom: 2,
          borderColor: 'divider',
          mb: 3,
          '& .MuiTab-root': { fontWeight: 600, textTransform: 'none', minHeight: 48 },
        }}
      >
        <Tab label="Safety" id="tab-safety" />
        <Tab label="Community" id="tab-community" />
        <Tab label="Helplines" id="tab-helplines" />
        <Tab label="Complaint" id="tab-complaint" />
      </Tabs>

      {/* Tab 1: Safety */}
      {value === 0 && (
        <Box id="safety">
          {safetyAccordions.map((item, index) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              image={item.image}
              fallbackText={item.fallbackText}
              defaultExpanded={index === 0}
            >
              <List dense disablePadding>
                {item.content.map((line, i) => (
                  <ListItem key={i} sx={{ py: 0.25, display: 'list-item', listStyleType: 'disc', ml: 2 }}>
                    <ListItemText primary={line} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                ))}
              </List>
            </AccordionItem>
          ))}
          <QuickSafetyHacks />
        </Box>
      )}

      {/* Tab 2: Community */}
      {value === 1 && (
        <Box id="community">
          {communityAccordions.map((acc, index) => (
            <AccordionItem
              key={acc.id}
              title={acc.title}
              defaultExpanded={index === 0}
            >
              <List dense disablePadding>
                {acc.items.map((item, i) => (
                  <ListItem key={i} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={
                        item.link ? (
                          <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover">
                            {item.name}
                          </Link>
                        ) : (
                          item.name
                        )
                      }
                      secondary={item.desc}
                      primaryTypographyProps={{ fontWeight: 500 }}
                      secondaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionItem>
          ))}
        </Box>
      )}

      {/* Tab 3: Helplines */}
      {value === 2 && (
        <Box id="helplines">
          {helplineAccordions.map((acc, index) => (
            <AccordionItem key={acc.id} title={acc.title} defaultExpanded={index === 0}>
              <List dense disablePadding>
                {acc.items.map((item, i) => (
                  <ListItem key={i} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={
                        item.number ? (
                          <Typography component="span" fontWeight={600} color="primary">
                            {item.number}
                          </Typography>
                        ) : item.link ? (
                          <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover">
                            {item.name}
                          </Link>
                        ) : (
                          item.name
                        )
                      }
                      secondary={item.desc}
                      primaryTypographyProps={{ variant: 'body1' }}
                      secondaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionItem>
          ))}
        </Box>
      )}

      {/* Tab 4: Complaint form */}
      {value === 3 && (
        <Box id="complaint">
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Submit your complaint below. We will forward it to the concerned team.
          </Typography>
          <ComplaintForm />
        </Box>
      )}
    </Box>
  );
}

export default TabsSection;
