const leap = 29;

const isLeapYear = (
    year = new Date().getFullYear()
) =>
    new Date(year, 1, leap).getDate() === leap;

const daysInMonth = (
    year = new Date().getFullYear(),
    month = new Date().getMonth()
) => {
    if (month > 12) { return false };
    const thirtyDays = [9, 4, 6, 11];
    return (thirtyDays.includes(month))
        ? `30 days`
        : (month !== 2)
            ? `31 days`
            : (isLeapYear(year))
                ? `${leap} days`
                : `${leap - 1} days`;
 
}

console.log(daysInMonth(2020,2))
    