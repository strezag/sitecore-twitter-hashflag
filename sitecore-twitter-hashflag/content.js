var elements = document.getElementsByTagName('A');

(function loopIt(i) {
    setTimeout(function () {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.parentNode.parentElement.className !== "tweet-box rich-editor") {
                if (element.nodeName == "A") {
                    if (element.className.startsWith("twitter-hashtag")) {
                        if (element.innerText == "#Sitecore" || element.innerText == "#sitecore") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/Sitecore?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/Sitecore?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>Sitecore</b></a><a href=\"/hashtag/Sitecore?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://visualpharm.com/assets/411/Sitecore-595b40b85ba036ed117daa8d.svg\" draggable=\"false\" alt=\"\"></img></a></span>";

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
        if (--i) loopIt(i); 
    }, 1000)
})(10000);