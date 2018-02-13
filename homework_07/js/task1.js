let bar = '';
let story = Number(prompt("enter natural number from 1 to 20 (enter natural number N (0<N<=20)", 1));
if (isNaN(story) || story % 1 != 0 || story <= 0 || story > 20) {
    console.error('incorrect!');
} else {
    for (var i = 1; i <= story; i++) 
    { for (var k = 1; k <= (story - i); k++) {
        bar = bar.concat('  ');
        }
        for (var j = 2; j <= i; j++) {
            bar = bar.concat('[~][~]');
        }
        bar = bar.concat('[~]\n');
    }
} console.log(bar);