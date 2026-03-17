import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import { quickSafetyHacks } from '../data/staticData';
import { useTheme } from '@mui/material/styles';

const iconMap = {
  phone: PhoneIcon,
  warning: WarningAmberIcon,
  settings: SettingsIcon,
  people: PeopleIcon,
};

/**
 * Quick Safety Hacks section: fake call, SOS, emergency settings, trusted contacts.
 */
function QuickSafetyHacks() {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" fontWeight={700} color="text.primary" gutterBottom>
        Quick Safety Hacks
      </Typography>
      <Grid container spacing={2}>
        {quickSafetyHacks.map((hack) => {
          const Icon = iconMap[hack.icon] || PhoneIcon;
          return (
            <Grid item xs={12} sm={6} key={hack.id}>
              <Card
                sx={{
                  height: '100%',
                  borderLeft: 4,
                  borderColor: theme.palette.secondary.main,
                  '&:hover': { borderColor: theme.palette.primary.main },
                  transition: 'border-color 0.2s',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Icon color="secondary" />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {hack.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {hack.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default QuickSafetyHacks;
