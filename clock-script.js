setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    hdeg = 30 * h + m / 2;
    mdeg = 6 * m;
    sdeg = 6 * s;
    hour.style.transform = `rotate(${hdeg}deg)`;
    min.style.transform = `rotate(${mdeg}deg)`;
    sec.style.transform = `rotate(${sdeg}deg)`;
}, 1000);