document.addEventListener("DOMContentLoaded", (_) => {
  let progressBar = document.querySelectorAll(".progress-bar");

  const time = 1500;

  function calculateTime(time, dataCount) {
    return time / dataCount;
  }

  progressBar.forEach((i) => {
    let count = 0;

    let label = i.children[0];
    let line = i.children[1];

    let dataCount = parseInt(label.getAttribute("data-count"));

    let lineCount = line.children[0];

    let runTime = calculateTime(time, dataCount);

    let animationLineCount = setInterval((_) => {
      if (count < dataCount) {
        count++;

        label.innerHTML = count + "%";
        lineCount.style.width = count + "%";

        if (count === 0) {
          lineCount.style.background = "#9B9B9B";
        } else if (count < 80) {
          lineCount.style.background = "#E47D8A";
        } else if (count >= 80) {
          // lineCount.style.boxShadow = "0 0 10px 10px #0f0";
          lineCount.style.background = "#9BD444";
        } else if (count === 100) {
          // lineCount.style.boxShadow = "0 0 10px 10px #f07100";
          lineCount.style.background = "#9BD444";
        } else {
          // lineCount.style.boxShadow = "0 0 10px 10px #00a3f3";
          lineCount.style.background = "#ffffff";
        }
      }
    }, runTime);
  });
});
