import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShieldIcon from '@mui/icons-material/Shield';

/**
 * Sticky header with logo, title, and navigation.
 * Mobile: hamburger menu; Desktop: inline nav links.
 */
function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Raise Complaint', path: '/complaint' },
  ];

  const handleNav = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        boxShadow: '0 4px 20px rgba(123, 31, 162, 0.2)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
        {/* Logo + Title */}
        <Box
          component={Link}
          to="/home"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            textDecoration: 'none',
            color: 'inherit',
            minWidth: 0,
            flex: 1,
          }}
        >
          <IconButton color="inherit" size="small" aria-label="Logo" sx={{ p: { xs: 0.5, sm: 1 } }}>
            <ShieldIcon sx={{ fontSize: { xs: 22, sm: 32 } }} />
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '0.75rem', sm: '1.1rem' },
              lineHeight: 1.2,
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
              overflow: 'visible',
              maxWidth: { xs: 'none', sm: 280 },
            }}
          >
            Women's Safety & Community
          </Typography>
        </Box>

        {/* Navigation */}
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenu} aria-label="Open menu" size="large">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{ sx: { mt: 2, minWidth: 180 } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.path} onClick={() => handleNav(item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {navItems.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                variant="body1"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                  transition: 'background 0.2s',
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
