import { AppBar, Toolbar, Box, Button, TextField, Typography } from '@mui/material';
import { Search as SearchIcon, Headset as HeadsetIcon, Person as PersonIcon, ArrowForward as ArrowForwardIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import logo from '../assets/logo.png';

export const HeaderSection = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        fontFamily: 'Nunito', 
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f5f6f7',
          padding: '8px 16px',  
        }}
      >
        <Box>
          <Button
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '0.875rem', 
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '260px', 
                height: '32px', 
                borderRadius: '20px',
                border: '2px solid #2f3eff',
                overflow: 'hidden',
                padding: '3px',
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  backgroundColor: '#2f3eff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '20px 0 0 20px',
                }}
              >
                <Typography sx={{ fontSize: '0.75rem' }}>TekGro Insight</Typography> 
              </Box>
              <Box
                sx={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '0 20px 20px 0',
                  paddingLeft: '10px',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#2f3eff', fontSize: '0.75rem' }}>
                  TekGro Products
                </Typography> 
              </Box>
            </Box>
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}> 
          <Button
            startIcon={<ExpandMoreIcon />}
            sx={{
              textTransform: 'none',
              color: '#4a4a4a',
              fontSize: '0.75rem', 
              '&:hover': {
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            Get in Touch
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#4a4a4a',
              fontSize: '0.75rem', 
              '&:hover': {
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            Pricing
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#4a4a4a',
              fontSize: '0.75rem', 
              '&:hover': {
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            Events
          </Button>
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            InputProps={{
              endAdornment: <SearchIcon sx={{ fontSize: '1rem' }} />, 
            }}
            sx={{
              borderRadius: '50px',
              height: '28px', 
              width: '180px', 
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
              },
              '& .MuiInputBase-input': {
                fontSize: '0.75rem', 
              },
            }}
          />

          <Button
            startIcon={<PersonIcon sx={{ fontSize: '1rem' }} />} 
            endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem' }} />} 
            sx={{
              textTransform: 'none',
              color: '#4a4a4a',
              fontSize: '0.75rem', 
              '&:hover': {
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            My Account
          </Button>
        </Box>
      </Toolbar>

      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fffff0',
          minHeight: '48px', 
          padding: '8px 16px', 
        }}
      >
        <Box>
          <img src={logo} alt="Logo" style={{ height: '60px' }} /> 
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {['Solutions', 'Products', 'Technology', 'Resources', 'Company'].map((menu) => (
            <Button
            key={menu}
            sx={{
              color: '#000000',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.05em', 
              '&:hover': {
                backgroundColor: '#e6f7e6',
              },
            }}
            endIcon={<ExpandMoreIcon sx={{ fontSize: '1rem' }} />}
          >
            {menu}
          </Button>
          
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            startIcon={<HeadsetIcon sx={{ fontSize: '1rem' }} />} 
            sx={{
              border: '2px solid #4ffd3f',
              color: '#1a75bb',
              fontWeight: 'bold',
              borderRadius: '10px',
              textTransform: 'none',
              fontSize: '0.75rem', 
              '&:hover': {
                borderColor: '#4ffd3f',
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            Tech Support
          </Button>
          <Button
            sx={{
              border: '2px solid #4ffd3f',
              color: '#1a75bb',
              fontWeight: 'bold',
              borderRadius: '10px',
              textTransform: 'none',
              fontSize: '0.75rem', 
              '&:hover': {
                borderColor: '#4ffd3f',
                backgroundColor: '#e6f7e6',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>

      <Box
        sx={{
          backgroundColor: '#1a75bb',
          padding: 1,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: 'white', fontSize: '0.75rem' }}> 
          All the events and notices related to TekGro will be available here
        </Typography>
      </Box>
    </AppBar>
  );
};
