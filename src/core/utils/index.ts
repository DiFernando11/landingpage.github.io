export const generateRandomId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const generateRandomNumber = (number: number) => {
  return Math.floor(Math.random() * number) + 1;
};
