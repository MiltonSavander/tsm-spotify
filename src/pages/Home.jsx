import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 }}
		>
			<Box sx={{ width: '20vw', height: '20vw', overflow: 'hidden', position: 'relative', borderRadius: '50%' }}>
				<img
					src="/profilbild-croped.jpg"
					alt="Milton"
					style={{
						width: '105%',
						height: '100%',
						objectFit: 'cover',
						position: 'absolute',
						left: '-5%'
					}}
				/>
			</Box>
			<Button size="large" variant="contained" href="mailto:milton.savander@gmail.com">
				kontakta mig
			</Button>
		</Box>
	);
};

export default Home;
