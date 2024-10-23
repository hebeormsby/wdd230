const modeButton = document.querySelector("#mode");
const header = document.querySelector('header');
const body = document.querySelector('body');
const main = document.querySelector("main");
const con = document.querySelector('.container');
const current = document.querySelector('#event');
const weather = document.querySelector('#weather');
const sponsor = document.querySelector('#sponsor');
const dom = document.querySelector('#dom1');
const sin = document.querySelector('#sin1');
const edu = document.querySelector('#edu1');
const footer = document.querySelector('footer');
const link = document.querySelector('#info');
const mod = document.querySelector('#mod');

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        header.style.background = '#785dc8';
        body.style.background = '#333';
        main.style.background = "#333";
        main.style.color = "#E8E9EB";
        con.style.background = '#333';
        link.style.color = '#F09D51';
        link.addEventListener('mouseover', () => {
            link.style.color = '#785dc8';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#F09D51';
        });
        current.style.background = '#555';
        weather.style.background = '#555';
        sponsor.style.background = '#555';
        dom.style.background = '#333';
        dom.style.borderRadius = '0 0 5px 5px';
        sin.style.background = '#333';
        sin.style.borderRadius = '0 0 5px 5px';
        edu.style.background = '#333';
        edu.style.borderRadius = '0 0 5px 5px';
        footer.style.background = '#555';
        modeButton.textContent = "☀️";
    } else {
        header.style.background = '#F09D51';
        body.style.background = '#E8E9EB';
        main.style.background = "#E8E9EB";
        main.style.color = "#333";
        con.style.background = '#E8E9EB';
        link.style.color = '#785dc8';
        link.addEventListener('mouseover', () => {
            link.style.color = '#F09D51';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#785dc8';
        });
        current.style.background = '#fff';
        weather.style.background = '#fff';
        sponsor.style.background = '#fff';
        dom.style.background = '#E8E9EB';
        dom.style.borderRadius = '0 0 5px 5px';
        sin.style.background = '#E8E9EB';
        sin.style.borderRadius = '0 0 5px 5px';
        edu.style.background = '#E8E9EB';
        edu.style.borderRadius = '0 0 5px 5px';
        footer.style.background = '#333';
        modeButton.textContent = "☀️";
        modeButton.textContent = "🌑";
    }
});
