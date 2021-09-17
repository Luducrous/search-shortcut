window.onload = () => {
    getValue();
}

const createSh = (searchEngine: string) => {
    let sh: string = '';
    let shStart: string = "sh -c 'xdg-open \"";
    let xclip: string = "=$(xclip -o)\"'";

    // adding preference of search engine
    switch (searchEngine) {
        case "google":
            sh = shStart + "https://www.google.com/search?q" + xclip;
            break;
        case "yahoo":
            sh = shStart + "https://search.yahoo.com/search?p" + xclip;
            break;
        case "duckduckgo":
            sh = shStart + "https://duckduckgo.com/?q" + xclip;
            break;
        case "bing":
            sh = shStart + "https://www.bing.com/search?q" + xclip;
            break;
        case "baidu":
            sh = shStart + "http://www.baidu.com/s?wd" + xclip;
            break;
        case "aol":
            sh = shStart + "https://search.aol.co.uk/aol/search?q" + xclip;
            break;
        case "ask":
            sh = shStart + "https://www.ask.com/web?q" + xclip;
            break;
        default:
            sh = shStart + "https://www.google.com/search?q" + xclip;
    }
    return sh;
}

const getValue = () => {
    let value = document.getElementsByTagName('input');
    for (var i = 0; i < value.length; i++) {
        if (value[i].type="radio") {
            if (value[i].checked) {
                putValue(createSh(value[i].value));
                console.log(createSh(value[i].value));
                break;
            }
        }
    }
}

const putValue = (script: string) => {
    let result = document.getElementById('result');
    result.innerHTML = script;
}

const copyToClipboard = () => {
    console.log('method started');
    var copyText = document.getElementById("result").innerHTML;
    console.log('method started');
    navigator.clipboard.writeText(copyText);
}
