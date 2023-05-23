console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
 let oldEnoughMsg = `Congrats ${userName}! you can drive! `;
 let tooYoungMsg = `Sorry ${userName}, you need to wait ${16 - age} year(s) until you can drive.`;

 if (age < 16) {
    console.log(tooYoungMsg);
 } else {
    console.log(oldEnoughMsg);
 }
}

checkAge("Hassan", 20);

// Exercise 3
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    }else if (x < 0 && y > 0) {
        return "Quadrant 2";
    }else if (x < 0 && y < 0) {
        return "Quadrant 3";
    }else if (x > 0 && y < 0) {
        return "Quadrant 4";
    }else if (x == 0 && y != 0) {
        return "X Axis";
    }else if (x != 0 && y == 0) {
        return "Y Axis";
    }else {
        return "Origin";
    }
}

console.log(checkQuadrant(2, 2));
console.log(checkQuadrant(-3, 5));
console.log(checkQuadrant(-3, -4));

// Exercise 4
function isValidTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        }else if (a == b || b == c || a == c) {
           return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a Valid triangle.`;
    }
}

console.log(checkTriangle(3, 2, 4));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(2, 2, 2));

// Exercise 5
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let statusMsg;
    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "DECREASING";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} Gb/day), continuing this usage you'll end up using ${planLimit - remainingDays * currentAvg} GB from your data limit`);
}

dataUsageFeedback(50, 12, 25);