import { fetchJSON } from "./Connector.js";

var btn = document.getElementById("startButton");
btn.addEventListener("click", startAnalysing);


async function startAnalysing() {
    startLoadingAnimation();
    var currentUrl = await getCurrentTab();
    var json = await fetchJSON(currentUrl);
    storeItems(currentUrl, json);
    location.href = "MainView.html";
}

function storeItems(url, json) {
    sessionStorage.setItem("url", url);
    sessionStorage.setItem("json", json);
}

function startLoadingAnimation() {
    document.getElementById("startButton").remove();
    var position = document.getElementById("progress");

    var animation = document.createElement("div");
    animation.className = "loader";
    position.appendChild(animation);

    var text = document.createElement("div");
    text.className = "loaderText";
    text.textContent = "Analysiere Webshop";
    position.appendChild(text);

}

function getCurrentTab() {
    return new Promise((resolve, reject) => {
        try {
            browser.tabs.query({
                active: true,
                currentWindow:true
            }, function (tabs) {
                resolve(tabs[0].url);
            })
        } catch (e) {
            reject(e);
        }
    })
}

