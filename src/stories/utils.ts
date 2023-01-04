export const generateRandomNumber = (min: number = 0, max: number) =>
  Math.floor(Math.random() * max) + min;

export const generateRandomDate = (withinNDaysFromNow: number) => {
  const today = new Date();
  let randomDayNDaysFromNow = new Date();
  randomDayNDaysFromNow.setDate(
    today.getDate() + generateRandomNumber(0, withinNDaysFromNow)
  );
  return randomDayNDaysFromNow;
};
