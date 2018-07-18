export const cssClasses = (names) => {
  return Object.keys(names).filter(key => names[key]).join(' ');
};
