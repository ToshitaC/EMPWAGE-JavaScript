const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const TOTAL_WORKING_HRS = 100;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME: return FULL_TIME_HRS;
            break;
        case IS_PART_TIME: return PART_TIME_HRS;
            break;
        default: return 0;
    }
}

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

while (totalEmpHrs <= TOTAL_WORKING_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}
console.log(empDailyWageMap);
let empWage = calculateDailyWage(totalEmpHrs);
console.log("UC6-- Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + empWage);

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("UC7A-- Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A-- Emp Wage with reduce: " + empDailyWageArray.reduce(totalWages, 0));

//UC7B-- Show the day along with the daily wage using array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7B-- Daily wage map");
console.log(mapDayWithWageArray);

//UC7C: Show days when full time wage of 160 were earned.
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7C-- Daily wage filter when fulltime wage earned");
console.log(fullDayWageArray);

//UC7D- Find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D-- First FullTime Wage was earned on Day: " + mapDayWithWageArray.find(findFullTimeWage));

//UC7E- Check if Every Element of Full Time Wage Array truely holds Full Time Wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E-- Check all element have full time wage: " + fullDayWageArray.every(isAllFullTimeWage));

//UC7F- Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F-- Check if any part time wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC7G- Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}
console.log("UC7G-- Number of days employee worked: " + empDailyWageArray.reduce(totalDaysWorked, 0));
console.log("UC8-- Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));