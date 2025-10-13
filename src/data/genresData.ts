type Genre = { id: number; image: string; name_en: string; name_es: string; name_ru: string };

const genres: Genre[] = [
	{
		id: 1301,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/arts.jpg',
		name_en: 'Arts',
		name_es: 'Artes',
		name_ru: 'Искусство',
	},
	{
		id: 1302,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/audioblogs.jpg',
		name_en: 'Audioblogs',
		name_es: 'Audioblogs',
		name_ru: 'Аудиоблоги',
	},
	{
		id: 1303,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/comedy.jpg',
		name_en: 'Comedy',
		name_es: 'Comedia',
		name_ru: 'Юмор',
	},
	{
		id: 1304,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/education.jpg',
		name_en: 'Education',
		name_es: 'Educación',
		name_ru: 'Образование',
	},
	{
		id: 1305,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/family.jpg',
		name_en: 'Kids and Family',
		name_es: 'Niños y Familia',
		name_ru: 'Семья и дети',
	},
	{
		id: 1306,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/hobbies.jpg',
		name_en: 'Games and Hobbies',
		name_es: 'Juegos y Pasatiempos',
		name_ru: 'Развлечения и хобби',
	},
	{
		id: 1309,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/films.jpg',
		name_en: 'TV and Films',
		name_es: 'TV y Cine',
		name_ru: 'Кино и телевидение',
	},
	{
		id: 1310,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/music.jpg',
		name_en: 'Music',
		name_es: 'Música',
		name_ru: 'Музыка',
	},
	{
		id: 1314,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/religion.jpg',
		name_en: 'Religion',
		name_es: 'Religión',
		name_ru: 'Религия',
	},
	{
		id: 1318,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/technology.jpg',
		name_en: 'Technology',
		name_es: 'Tecnología',
		name_ru: 'Технологии',
	},
	{
		id: 1321,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/business.jpg',
		name_en: 'Business',
		name_es: 'Negocios',
		name_ru: 'Бизнес',
	},
	{
		id: 1324,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/society.jpg',
		name_en: 'Society and Culture',
		name_es: 'Sociedad y Cultura',
		name_ru: 'Культура и общество',
	},
	{
		id: 1482,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/literature.jpg',
		name_en: 'Literature',
		name_es: 'Literatura',
		name_ru: 'Литература',
	},
	{
		id: 1487,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/history.jpg',
		name_en: 'History',
		name_es: 'Historia',
		name_ru: 'История',
	},
	{
		id: 1488,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/crime.jpg',
		name_en: 'True Crime',
		name_es: 'Crímenes reales',
		name_ru: 'Криминальные истории',
	},
	{
		id: 1489,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/news.jpg',
		name_en: 'News',
		name_es: 'Noticias',
		name_ru: 'Новости',
	},
	{
		id: 1512,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/health.jpg',
		name_en: 'Health',
		name_es: 'Salud',
		name_ru: 'Здоровье',
	},
	{
		id: 1525,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/radio.jpg',
		name_en: 'Talk and Radio',
		name_es: 'Charlas y Radio',
		name_ru: 'Радио и интервью',
	},
	{
		id: 1527,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/goverment.jpg',
		name_en: 'Politics',
		name_es: 'Política',
		name_ru: 'Политика',
	},
	{
		id: 1530,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/local.jpg',
		name_en: 'Local',
		name_es: 'Local',
		name_ru: 'Местное',
	},
	{
		id: 1533,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/science.jpg',
		name_en: 'Science and Medicine',
		name_es: 'Ciencia y Medicina',
		name_ru: 'Наука и медицина',
	},
	{
		id: 1545,
		image: 'https://tandrei17.github.io/UnoPodAssets/images/sports.jpg',
		name_en: 'Sports and Recreation',
		name_es: 'Deportes y Recreación',
		name_ru: 'Спорт и отдых',
	},
];

export type { Genre };
export default genres;

/* 
1301 arts +
1302 Personal Journals + (личные дневники)
1303 Comedy +
1304 education +
1305 kids family +
1306 Food +! хобби нужно
1309 TV Films +
1310 Music +
1314 Religion +
1318 Technology +
1321 Business +
1324 society&culture +
1412 Investing
1443 Philosophy
1482 books +
1487 History +
1488 True crime +
1489 news +
1496 Comedy Interviews
1497 Stand Up
1500 Self-Improvement
1512 Health & Fitness +
1516 Sexuality
1517 Mental Health
1519 Education for Kids
1521 parenting
1524 Music history
1525 Music Interviews +! радио нужно
1527 Politics +
1530 News Commentary +
1533 Science +
1541 Life Sciences
1543 Documentary
1544 Relationships
1545 Sport +
1547 Football
*/
