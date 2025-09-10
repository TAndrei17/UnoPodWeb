export interface EpisodeItem {
	id: string;
	title: string;
	description: string;
	duration: string;
	numEpisode: string;
	author: string;
	release: string;
	urlEpisode: string;
	mp3Url: string;
	podcast_id: string;
	podcast_description: string;
}

export interface EpisodesParams {
	url: string;
	podcast_id: string;
}
