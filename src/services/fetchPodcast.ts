import api from '../api.js';
import { PodcastParams, PodcastResponse } from '../models/Podcast.js';

const fetchPodcast = async (params: PodcastParams) => {
	const { id } = params;

	const path = `/lookup?id=${id}&entity=podcast`;
	const { data }: { data: PodcastResponse } = await api.get(path);
	return data;
};

export default fetchPodcast;
