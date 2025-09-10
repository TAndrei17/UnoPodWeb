const createDate = (date: string): string => {
	const myDate = new Date(date);

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	return myDate.toLocaleString('en-US', options);
};

export default createDate;
