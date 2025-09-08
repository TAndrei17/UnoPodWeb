import axios from 'axios';

// https://axios-http.com/ru/docs/config_defaults
const apiItunes = axios.create({
	baseURL: 'https://itunes.apple.com',
	timeout: 5000,
});

const apiMarketingtools = axios.create({
	baseURL: 'https://rss.marketingtools.apple.com',
	timeout: 5000,
});

export default apiItunes;
export { apiMarketingtools };
