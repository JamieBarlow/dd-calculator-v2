import { dateUtils } from "./dateUtils";
const { namedDaysOfWeek } = dateUtils;

export default function getWeekends(year) {
  let daysOfYear = [];
  // get all days of year, with extra 15 days from previous and subsequent years to account for crossover
  for (let i = 0; i < 395; i++) {
    let date = new Date(`January 1, ${year}`);
    date.setDate(date.getDate() - 15);
    date.setDate(date.getDate() + i);
    date.setHours(0);
    daysOfYear.push(date);
  }
  // get weekends only by removing week days
  let dates = [];
  let weekends = [];
  let weekendDays = [];
  for (let day of daysOfYear) {
    if (day.getDay() === 6 || day.getDay() === 0) {
      // nonProcessingDays.push(day);
      dates.push(day);
      weekends.push(day.toLocaleDateString("en-GB"));
      weekendDays.push(namedDaysOfWeek[day.getDay()]);
    }
  }
  // displayWeekends(weekends, weekendDays);

  let results = dates.map((date, i) => ({
    displayDate: weekends[i],
    JSDate: date,
    dayOfWeek: weekendDays[i],
  }));
  return results;
}
