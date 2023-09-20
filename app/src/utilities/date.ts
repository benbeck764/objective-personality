export const toLocalDateTimeString = (
  date: Date | string,
  separator = ' '
): string => {
  if (!date) return 'N/A';

  const localDate = new Date(date);
  return (
    localDate.toLocaleDateString([], {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    }) +
    separator +
    localDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  );
};

export const toLocalFullDateString = (
  date: Date | string,
  offset?: boolean
): string => {
  if (!offset)
    return new Date(date).toLocaleDateString([], {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  else {
    const dt = new Date(date);
    dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
    return dt.toLocaleDateString([], {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }
};

export const toLocalDateStringShort = (
  date: Date | string | undefined,
  offset?: boolean
): string => {
  if (!date) return '';
  if (!offset)
    return new Date(date).toLocaleDateString([], {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  else {
    const dt = new Date(date);
    dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
    return dt.toLocaleDateString([], {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  }
};

export const toLocalDateStringLong = (
  date: Date | string,
  offset?: boolean
): string => {
  if (!offset)
    return new Date(date).toLocaleDateString([], {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
  else {
    const dt = new Date(date);
    dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
    return dt.toLocaleDateString([], {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
  }
};

export const fromNow = (input: Date): string | undefined => {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const ranges: Record<string, number> = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(
        Math.round(delta),
        key as Intl.RelativeTimeFormatUnit
      );
    }
  }

  return 'just now';
};
