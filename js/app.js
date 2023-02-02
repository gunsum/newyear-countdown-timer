const nov = new Date();//how to create a new Date object that represents the current date and time

const time = now.getTime();//how to call the getTime() method of the Date object 
                          //to get the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(time);

//To create a new Date object with a specified date and time, 
//you can pass a date string into the Date()
const d = new Date('February 01, 2023 23:23:03');
console.log(d.getTime());