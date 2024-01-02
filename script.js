document.querySelector("h1").onmouseover = event => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interation = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((char, index) => {
                if (index < interation) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (interation >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        interation += 1 / 3;
    }, 30);
}