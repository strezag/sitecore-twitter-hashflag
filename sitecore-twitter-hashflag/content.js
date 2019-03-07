var elements = document.getElementsByTagName('A');
var spanElements = document.getElementsByTagName('SPAN');
console.log('Sitecore Twitter Hashflags Enabled.')

var htags = {
    "sitecore": "https://visualpharm.com/assets/411/Sitecore-595b40b85ba036ed117daa8d.svg",
    "sitecoremvp": "https://i.imgur.com/jSgScaz.png",
    "sitecorejss": "https://i.imgur.com/af4ZbJ5.png",
    "schackathon": "https://i.imgur.com/hE4qf7n.png",
    "womenofsitecore": "https://i.imgur.com/KDCov3m.png",
    "spe": "https://i.imgur.com/4OV72Ln.jpg",
    "coveo": "https://i.imgur.com/Q7bLbeO.jpg",
    "sugcon": "https://i.imgur.com/ZPMcfxl.png",
    "sitecoresym": "https://i.imgur.com/yNiuBJM.jpg",
    "sxa": "https://i.imgur.com/EVRiuIs.png"
};

if (window.location.hostname === "tweetdeck.twitter.com") {
    (function loopIt(i) {
        setTimeout(function () {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];

                if (element.parentNode.parentElement.className !== "js-compose-text") {
                    if (element.nodeName == "A") {
                        if (element.className === "link-complex") {
                            for (var tag in htags) {
                                if (element.innerText.toLowerCase() == "#" + tag) {
                                    if (!element.innerHTML.includes('img')) {
                                        var xmlString = "<img class=\"hashflag\" draggable=\"false\" src=\"" + htags[tag] + "\"></img>";
                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");
                                        element.innerHTML += doc.firstChild.outerHTML;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (--i) loopIt(i);
        }, 1000)
    })(10000);

} else {
    (function loopIt(i) {
        setTimeout(function () {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];

                if (element.parentNode.parentElement.className !== "tweet-box rich-editor") {
                    if (element.nodeName == "A") {
                        if (element.className.startsWith("twitter-hashtag")) {

                            for (var tag in htags) {
                                if (element.innerText.toLowerCase() == "#" + tag) {
                                    if (element.nextSibling !== null) {
                                        if (element.textContent !== " ") {
                                            var tmpCnt = element.textContent.substring(1);
                                            if (element.nextSibling.href !== "https://twitter.com/hashtag/" + tag + "?src=hash") {
                                                var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/" + tmpCnt + "?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>" + tmpCnt + "</b></a><a href=\"/hashtag/" + tag + "?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"" + htags[tag] + "\" draggable=\"false\" alt=\"\"></img></a></span>";

                                                doc = new DOMParser().parseFromString(xmlString, "text/xml");
                                                element.outerHTML = doc.firstChild.innerHTML;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // For quoeted Tweets
            for (var i = 0; i < spanElements.length; i++) {
                var element = spanElements[i];
                if (element.nodeName == "SPAN") {
                    if (element.className.startsWith("twitter-hashtag")) {
                        for (var tag in htags) {
                            if (element.innerText.toLowerCase() == "#" + tag) {
                                if (element.nextSibling !== null) {
                                    if (element.nextSibling.firstElementChild === undefined) {
                                        var tmpCnt = element.textContent.substring(1);
                                        var xmlString = "<a href=\"/hashtag/" + tmpCnt + "?src=hash\" dir=\"ltr\"><img class=\"twitter-hashflag\" src=\"" + htags[tag] + "\" draggable=\"false\" alt=\"\"></img></a>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");
                                        element.insertAdjacentHTML("afterend", doc.firstChild.outerHTML);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (--i) loopIt(i);
        }, 1000)
    })(10000);

}