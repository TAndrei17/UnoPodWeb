import { PodcastItem, PodcastItemByTerm } from '../models/PodcastItem.js';

const createArrayPodcasts = (data: any): PodcastItem[] => {
	const podcasts: { id: string; image: string; author: string; podcast: string; label: string }[] =
		[];

	data.forEach((item: any) => {
		const id = item.id.attributes['im:id'];
		const author = item['im:artist'].label;
		const podcast = item['im:name'].label;
		const image = item['im:image'][2].label;
		const label = item.category.attributes.label;

		podcasts.push({ id, author, podcast, image, label });
	});
	return podcasts as PodcastItem[];
};

const createArrayPodcastsByTerm = (data: PodcastItemByTerm[]): PodcastItem[] => {
	const podcastsByTerm = data.map((podcast: PodcastItemByTerm) => {
		const { collectionId, collectionName, artistName, genres, artworkUrl100 } = podcast;
		return {
			id: collectionId.toString(),
			image: artworkUrl100,
			author: artistName,
			podcast: collectionName,
			label: genres[0] ?? '',
		};
	});
	return podcastsByTerm;
};

export { createArrayPodcasts, createArrayPodcastsByTerm };
