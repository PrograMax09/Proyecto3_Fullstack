import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ForumIcon from '@mui/icons-material/Forum';

 const SimpleBottomNavigation = ( ) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'fixed',
        bottom: '70px',
        width: '100vw'
        
      }}
    >
    <Box sx={{ width: 800 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
           backgroundColor: 'rgb(234, 219, 255)',
           color: '#ffff'
        }}
      >
        <BottomNavigationAction onClick={() => navigate("/forums")} label="Forums" icon={<ForumIcon />} sx={{ color: '#ffff'}} />
        <BottomNavigationAction label="Friends" icon={<Diversity2Icon />} />
      </BottomNavigation>
    </Box>
  </Box>
  );
}

export default SimpleBottomNavigation