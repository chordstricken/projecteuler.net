/*
You are given the following information, but you may prefer to do some research for yourself.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

var dateStart = new Date('1901-01-01'),
    dateEnd   = new Date('2000-12-31'),
    timeEnd   = dateEnd.getTime(),
    sundays   = 0;

while (dateStart.getTime() <= timeEnd) {
    sundays += dateStart.getUTCDay() === 0;
    dateStart.setUTCMonth(dateStart.getUTCMonth() + 1);
}

console.log(sundays);
