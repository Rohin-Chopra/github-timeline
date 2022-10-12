const parseDate = (dateString: string): string => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  return `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
};

export default parseDate;
