export const getFormattedDate = (days = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export const getTodayDate = () => getFormattedDate(0);
export const getTomorrowDate = () => getFormattedDate(1);