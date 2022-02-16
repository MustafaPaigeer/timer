const args = process.argv;
const timer = args.slice(2, args.length);
timer.sort(function(a, b) {
  return a - b;
});

const beep = function(timer) {
  for (const delay of timer) {
    let delayDuration = Number(delay);
    if (!(Number.isNaN(delayDuration)) && delayDuration > 0) {
      let delay = delayDuration * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  }
};
beep(timer);