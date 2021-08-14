import React, { useContext, useRef, useEffect } from 'react';
import ZoomLevelContext from '../../../../../contexts/MapOptionContext';
import { Maps } from '../styles/MapStyleForModal';

const Map = () => {
	const { state } = useContext(ZoomLevelContext);
	const map = useRef(null);
	
	useEffect(() => {
		window.kakao.maps.load(() => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;

				const options = {
					center: new window.kakao.maps.LatLng(lat, lng),
					level: state.level,
				};
				new window.kakao.maps.Map(map.current, options);
			});
		});
	}, [state]);
	
	return (
		<Maps ref={map} />
	);
};

export default Map;