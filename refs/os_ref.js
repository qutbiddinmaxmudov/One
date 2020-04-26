const os = require('os')
// console.log(os.cpus())
// cd change directory
console.log(os.totalmem()/1024/1024+"mb оперативной памяти имеется");
console.log(os.freemem()/1024/1024+"mb оперативной памяти свободно");
console.log((os.totalmem-os.freemem)/1024/1024+'mb оперативной памяти занято');
console.log(os.hostname()+' имя пользователя или имя оп системя хз');
console.log(os.loadavg());
console.log("Это была нагрузка Средняя нагрузка - это концепция Unix. В Windows возвращаемое значение всегда [0, 0, 0].");
console.log(os.platform());
console.log(os.release());
console.log(os.arch()+' архитектура');





