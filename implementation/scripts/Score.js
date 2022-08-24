import { fetchJSON } from "./Connector.js";

export class Score {

    constructor(url) {
        this.totalScore = url;
        this.https;
    }

    fetchScore(json) {
        this.parseJSON(json);
    }
    
    parseJSON(inputJson) {  
        var obj = JSON.parse(inputJson);
        this.totalScore = obj.Score;
        this.https = obj.Https;
        document.getElementById('Score').innerHTML = this.totalScore;
        document.getElementById('Https').innerHTML = this.https;
        document.getElementById('Impressum').innerHTML = obj.Impressum;
        document.getElementById('Watchlist_Internet').innerHTML = obj.Watchlist_Internet;
        document.getElementById('Trusted_Shops').innerHTML = obj.Trusted_Shops;
        document.getElementById('OpenCorporates').innerHTML = obj.Open_Corporates;
        document.getElementById('Hosting').innerHTML = obj.Hosting_Land;
        document.getElementById('Trustpilot').innerHTML = obj.TrustpilotScore+" bei "+obj.TrustpilotCount+" Bewertungen";   
        document.getElementById('Url').innerHTML = obj.Url;
        this.styleScore();
    }  

    styleScore() {
        const scoreHtmlElement = document.getElementById("Score");
        if(this.totalScore >= 80) {
            scoreHtmlElement.style.color = "green";
        }else if (this.totalScore < 80 && this.totalScore >= 50) {
            scoreHtmlElement.style.color = "yellow";
        }else if (this.totalScore < 50 && this.totalScore >= 0) {
            scoreHtmlElement.style.color = "red";
        }else {
            scoreHtmlElement.style.color = "white";
        }

        if(this.https === 'Nicht vorhanden') {
            window.alert("Achtung! Der Webshop nutzt zur Übertragung keine Verschlüsselung. Es wird davon abgeraten, in diesem Webshop einzukaufen.")
        }
    }
}
