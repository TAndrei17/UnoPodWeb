import { XMLParser } from 'fast-xml-parser';

const parseXmltoJson = (data: string): any => {
	const parser = new XMLParser({
		ignoreAttributes: false, // Enable attribute processing
		attributeNamePrefix: '',
		allowBooleanAttributes: true,
	});
	const result = parser.parse(data);
	return result;
};

export default parseXmltoJson;
