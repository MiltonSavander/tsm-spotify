import './App.css';
import * as React from 'react';
import { Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login';
import { getAccessToken } from './utils/getAccesToken';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage());

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage() || getAccessToken();

		if (accessToken) {
			setToken(accessToken);
			sessionStorage.setItem('spotifyToken', accessToken);
			window.location.hash = '';
		}
	}, []);

	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;
