export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');

  return `${formattedMonth}.${formattedDay}.${year}`;
};
