w = [];

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message == "check") {
            console.log(request);
            if (window.location.pathname == '/rait/my/') {
                sendResponse({
                    ready: "true"
                });
            } else {
                sendResponse({
                    ready: "false"
                });
            }
        }
        if (request.message == "execute") {
            x = [];
            $(function () {
                if ($('.launchbutton').length < 3) {
                    alert("please reload the page!");
                } else {
                    start($('.launchbutton'));
                }
            });
        }
        if(request.message == "alertfalse"){
            alert("Go to homepage to start automation!");
        }
    }
);

function start(list) {
    ids = [];

    console.log(list);
    for (i = 0; i < list.length; i++) {
        ids.push(getUrlVars(list[i].href)["id"]);
    }
    for (i = 0; i < ids.length; i++) {
        w[i] = window.open("http://mydy.dypatil.edu/rait/course/customview.php?id=" + ids[i]);
    }
    alert("done");

}
if (window.location.pathname == '/rait/course/customview.php') {
    $(function () {
        pending = $('.pending');
        for (i = 0; i < pending.length; i++) {
            console.log(pending[i]);
            m = window.open(pending[i].href, "m");
            if (m) {
                m.close();
            }
        }
        window.location = 'http://mydy.dypatil.edu/rait/my/';
        window.close();

    });

}

function getUrlVars(url) {
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

if (window.location.pathname == '') {
    alert("Please login");
    //TODO 
    // Use messages API to alert this via popup.js
}