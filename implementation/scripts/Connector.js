export async function fetchJSON(currentURL) {
    const response = await fetch("http://trustinator-env-1.eba-bdsidrjh.eu-central-1.elasticbeanstalk.com/trustinator?url="+currentURL,{}); 
    if(!response.ok) {
        throw Error("Error fetching JSON");
    }
    return response.text();
}
