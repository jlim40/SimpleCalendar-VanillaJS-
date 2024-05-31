const monthYearElement = document.querySelector(".monthYear");

const prevBtnElement = document.querySelector(".prevBtn");
const nextBtnElement = document.querySelector(".nextBtn");

const datesElement = document.querySelector(".dates");

let currentDate = new Date();

const updateCalendar = () => {
  console.log("first", currentDate);

  const monthYearText = currentDate.toLocaleString("en-EN", {
    month: "long",
    year: "numeric",
  });
  monthYearElement.textContent = monthYearText;

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  console.log("inside", currentYear, currentMonth);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
  const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  let datesHTML = "";

  for (let i = firstDay; i > 0; i--) {
    let prevDate = prevLastDate - i + 1;
    datesHTML += `<div class="date inactive">${prevDate}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const today = new Date(currentYear, currentMonth, i);
    datesHTML +=
      today.toDateString() === new Date().toDateString()
        ? `<div class="date today">${i}</div>`
        : `<div class="date active">${i}</div>`;
  }

  for (let i = 1; i < 7 - lastDay; i++) {
    datesHTML += `<div class="date inactive">${i}</div>`;
  }

  datesElement.innerHTML = datesHTML;
  console.log("end", currentYear, currentMonth);
};

prevBtnElement.addEventListener("click", () => {
  currentDate.setDate(1);
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtnElement.addEventListener("click", () => {
  currentDate.setDate(1);
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

updateCalendar();
