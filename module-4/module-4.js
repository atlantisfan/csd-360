/*
Author:     Justin Brehms
Assignment: Module 4
CSD 360 Interactive Web Development with JavaScript
Date:       06/13/2021

*/

var i = 842;

document.write(i + i % 3 / 7 - 2 + 7 ** 3); // 1183.2857142857142
document.write("<br />");
document.write(((i + i )% 3) / 7 - 2 + 7 ** 3); //341.14285714285717
document.write("<br />");
document.write(i + i % 3 / (7 - 2) + 7 ** 3); //1185.4
document.write("<br />");
document.write(i + (i % 3) / (((7 - 2) + 7) ** 3)); //842.0011574074074
document.write("<br />");
document.write(i + (i % 3 )/ 7 - (2 + 7) ** 3); //113.28571428571433
document.write("<br />");
document.write(((i + i )% 3) / (7 - 2) + 7 ** 3); //343.2
document.write("<br />");
document.write(i + i % 3 / (7 - (2 + 7)) ** 3);
