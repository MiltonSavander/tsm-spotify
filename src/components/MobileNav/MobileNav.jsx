import { Home } from '@mui/icons-material';
import ListIcon from '@mui/icons-material/List';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
	const nav = useNavigate();
	const [value, setValue] = useState(0);
	return (
		<Box sx={{ display: { xs: 'block', md: 'none' } }}>
			<BottomNavigation
				sx={{ backgroundColor: 'Background.paper', color: 'text.secondary' }}
				showLabels
				value={value}
				onChange={(_, value) => setValue(value)}
			>
				<BottomNavigationAction label="home" icon={<Home />} onClick={() => nav('/')} />
				<BottomNavigationAction label="Ditt bibliotek" icon={<ListIcon />} onClick={() => nav('/library')} />
			</BottomNavigation>
		</Box>
	);
};

export default MobileNav;
