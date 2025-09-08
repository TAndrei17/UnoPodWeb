const createArrayPodcastsTop = (podcasts) => {
	if (!podcasts || podcasts.length < 1) {
		throw new Error('Failed to get top podcasts');
	}

	const podcastsTop = podcasts.map((podcast) => {
		const { id, artworkUrl100, artistName, genres, name } = podcast;
		const podcastItem = {
			id,
			image: artworkUrl100,
			author: artistName,
			podcast: name,
			label: genres[0].name,
		};
		return podcastItem;
	});

	return podcastsTop;
};

export default createArrayPodcastsTop;
