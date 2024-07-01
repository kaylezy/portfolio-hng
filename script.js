function updateTimeAndDay() {
  const currentTimeUTC = new Date().toUTCString();
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });

  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTimeUTC;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Update time and day immediately and every minute
updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
