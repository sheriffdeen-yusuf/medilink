export const FormatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const FormatDay = ({ dateString }) => {
  const date = new Date(dateString);
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const formatTime = (date) => {
  if (date) {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    };

    const dateTime = new Date(date).toLocaleString('en-US', options);
    return dateTime;
  } else {
    return '';
  }
};

export const FormatTime = ({ dateString }) => {
  const date = new Date(dateString);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleTimeString('en-US', options);
};

export const MinDate = (newDate) => {
  const date = new Date(newDate) || new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (newDate) {
    const nextDay = date;
    nextDay.setDate(nextDay.getDate() + 1);
    day = nextDay.getDate();
    month = nextDay.getMonth() + 1;
  }
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

export const TimeConverter = ({ time }) => {
  const timeInHrs = time / (60 * 60);
  return timeInHrs;
};

export const Currency = (currency) => {
  const formattedCurrency = Number(currency).toLocaleString();
  return 'NGN' + ' ' + formattedCurrency;
};
