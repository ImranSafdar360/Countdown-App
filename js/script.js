const endDate = "05 Febraury 2024 11:00 AM";
document.querySelector("#end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff);
    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();

setInterval(
    () => {
        clock();
    },
    1000
)