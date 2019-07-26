var elements = document.getElementsByTagName('A');
var spanElements = document.getElementsByTagName('SPAN');
//console.log('Sitecore Twitter Hashflags Enabled.')

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
                            // NEW TWITTER
                        } else if (element.href.indexOf('hashtag_click') > 0) {
                            for (var tag in htags) {
                                if (element.innerText.toLowerCase() == "#" + tag) {
                                    if (element.innerHTML.indexOf('background-image') == -1) {


                                        var xmlString = "<span  style=\"height: 1em; width: 1.2em; margin-right: 0.075em; margin-left: 2px; position: relative; display: inline-block;\"><div style=\"background-size: 100% 100%;z-index: -1;background-repeat: no-repeat;background-position: center center;background-color: rgba(0, 0, 0, 0);width: 100%;height: 100%;position: absolute;top: 0px;right: 0px;left: 0px;bottom: 0px;display: inline-flex;background-image: url('" + htags[tag] + "');\"><img alt=\"\" draggable=\"false\" src=\"" + htags[tag] + "\" style=\"bottom: 0px; height: 100%; left: 0px; opacity: 0; position: absolute; right: 0px; top: 0px; width: 100%; z-index: -1;\"></img></div></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");
                                        element.innerHTML += doc.firstChild.outerHTML;

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
                    } else if (element.innerText.toLowerCase().indexOf("quote tweet") > -1) {
                        if (element.parentElement.nextElementSibling.innerHTML.indexOf("#") > -1) {
                            // there is a hashtag in the quoted tweet
                            for (var tag in htags) {
                                if (element.parentElement.nextElementSibling.innerText.toLowerCase().indexOf("#" + tag) > -1) {
                                    var elem = element.parentElement.nextElementSibling.childNodes[0].childNodes[1].childNodes[0].children;
                                    for (var x = 0; x < elem.length; x++) {
                                        var innrelement = elem[x];
                                        if (innrelement !== undefined) {
                                            if (innrelement.innerText.toLowerCase().indexOf("#" + tag) > -1) {
                                                if (innrelement.nextElementSibling.nextElementSibling.outerHTML.indexOf("schf") === -1) {
                                                    if (innrelement.nextElementSibling.className !== "schf") {
                                                        var xmlString = "<span class=\"schf\" style=\"height: 1em; width: 1.2em; margin-right: 0.075em; margin-left: 2px; position: relative; display: inline-block;\"><div style=\"background-size: 100% 100%;z-index: -1;background-repeat: no-repeat;background-position: center center;background-color: rgba(0, 0, 0, 0);width: 100%;height: 100%;position: absolute;top: 0px;right: 0px;left: 0px;bottom: 0px;display: inline-flex;background-image: url('" + htags[tag] + "');\"><img alt=\"\" draggable=\"false\" src=\"" + htags[tag] + "\" style=\"bottom: 0px; height: 100%; left: 0px; opacity: 0; position: absolute; right: 0px; top: 0px; width: 100%; z-index: -1;\"></img></div></span>";

                                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");
                                                        innrelement.insertAdjacentHTML("afterend", doc.firstChild.outerHTML);
                                                    }
                                                }
                                            }
                                        }
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