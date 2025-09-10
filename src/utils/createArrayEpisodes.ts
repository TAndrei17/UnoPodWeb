import cleanTags from './cleanTags.js';
import createDate from './createDate.js';
import generateUniqueId from './generateUniqueId.js';
import parseXmltoJson from './parseXmlToJson.js';

import { EpisodeItem } from '../models/EpisodesItem.js';

const createArrayEpisodes = (xmlData: string, podcastId: string): EpisodeItem[] => {
	const data = parseXmltoJson(xmlData);
	const episodes: EpisodeItem[] = [];

	// If XML parsing fails, an error is thrown,
	// and the getEpisodes middleware sets the state to rejected,
	// which is handled appropriately
	if (!data?.rss?.channel?.item) {
		throw new Error('Invalid XML structure');
	}

	const channelDescription = cleanTags(data.rss.channel.description);
	const items = Array.isArray(data.rss.channel.item) ? data.rss.channel.item : [];

	// get episodes data
	items.forEach((item: any) => {
		const { pubDate, title: episodeTitle, description: episodeDescription, link, enclosure } = item;

		// Extracting the MP3 URL from the <enclosure> tag
		const getMp3Url = enclosure ? enclosure.url : null;
		const [mp3Url] = getMp3Url.split('?');

		const result: EpisodeItem = {
			id: generateUniqueId(episodeTitle),
			title: episodeTitle as string,
			description: cleanTags(episodeDescription).trim(),
			duration: item['itunes:duration'] as string,
			numEpisode: item['itunes:episode'] as string,
			author: item['itunes:author'] as string,
			release: createDate(pubDate),
			urlEpisode: link,
			mp3Url: getMp3Url ? mp3Url : '',
			podcast_id: podcastId,
			podcast_description: channelDescription,
		};
		episodes.push(result);
	});

	return episodes;
};

export default createArrayEpisodes;
