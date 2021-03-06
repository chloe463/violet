export const cssClasses = (names) => {
  return Object.keys(names).filter(key => names[key]).join(' ');
};

export const padZeros = (digit: string): string => {
  return ('00' + digit).substr(-2);
};

export const dateFormat = (date: Date, format: string): string => {
  return format
    .replace(/yyyy/, date.getFullYear().toString())
    .replace(/yy/, date.getFullYear().toString().substr(-2))
    .replace(/MMM/,
      ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]
    )
    .replace(/MM/, padZeros((date.getMonth() + 1).toString()))
    .replace(/M(?!a)/, (date.getMonth() + 1).toString())
    .replace(/dd/, padZeros(date.getDate().toString()))
    .replace(/d/, date.getDate().toString())
    .replace(/HH/, padZeros(date.getHours().toString()))
    .replace(/H/, date.getHours().toString())
    .replace(/hh/, padZeros((date.getHours() % 12).toString()))
    .replace(/h/, (date.getHours() % 12).toString())
    .replace(/mm/, padZeros(date.getMinutes().toString()))
    .replace(/m/, date.getMinutes().toString())
    .replace(/ss/, padZeros(date.getSeconds().toString()))
    .replace(/s/, date.getSeconds().toString())
    .replace(/EEE|EE|E/,
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
    )
    .replace('aaa', date.getHours() < 12 ? 'AM' : 'PM');
};

export const timer = (milliseconds): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

export const calculateRipplePosition = (event) => {
  const nativeEvent = event.nativeEvent;

  const target = nativeEvent.target;
  const radius = Math.sqrt((target.clientWidth ** 2) + (target.clientHeight ** 2)) * 2;

  // Calcurate coodinates
  const rect = target.getBoundingClientRect();
  const top  = nativeEvent.pageY - rect.top - window.pageYOffset - (radius / 2);
  const left = nativeEvent.pageX - rect.left - window.pageXOffset - (radius / 2);

  return { top, left, radius };
};
