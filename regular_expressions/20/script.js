// лучше так /(\d{2})\.(\d{2})\.(\d{4})/

let str = '31.12.2025';
let res = str.match(/(\d+)\.(\d+)\.(\d+)/);
document.write(res[0] + '<br>');
document.write(res[1] + '<br>');
document.write(res[2] + '<br>');
document.write(res[3] + '<br>');
