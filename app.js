window.addEventListener("keydown", (e) => {
    const key = document.querySelector("#key");
    const keyCode = document.querySelector("#key-code");
    const code = document.querySelector("#code");
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="key">
            <h1 id="key">${e.key === " " ? "Space": e.key}</h1>
            <span>event.key</span>
        </div>
        <div class="key">
            <h1 id="key-code">${e.keyCode}</h1>
            <span>event.keyCode</span>
        </div>
        <div class="key">
            <h1 id="code">${e.code}</h1>
            <span>event.code</span>
        </div>
    `;
});
