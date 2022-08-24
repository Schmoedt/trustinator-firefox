import { Score } from "./Score.js";

//Global Variables
var currentURL;
var infoJson;
var currentScore;

// Runs, when the icon gets clicked
function updateMainView() {
    retreiveItems();
    postAllInformation();
}

function retreiveItems() {
    currentURL = sessionStorage.getItem("url");
    infoJson = sessionStorage.getItem("json");
    sessionStorage.removeItem("KEY");
    sessionStorage.clear();
}

function postAllInformation() {
    currentScore = new Score(currentURL);
    currentScore.fetchScore(infoJson);
}

updateMainView();