let i = 0;

function timedCount() {
    i = i + 1;
    //post message used to send message to web page, 
    //web page has an onmessage handler to listen for the event 
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();