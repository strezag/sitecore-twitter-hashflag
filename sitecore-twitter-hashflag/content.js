var elements = document.getElementsByTagName('A');

(function loopIt(i) {
    setTimeout(function () {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.parentNode.parentElement.className !== "tweet-box rich-editor") {
                if (element.nodeName == "A") {
                    if (element.className.startsWith("twitter-hashtag")) {

                        if (element.innerText.toLowerCase() == "#sitecore") {
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
                        
                        if(element.innerText.toLowerCase() == "#sitecoremvp"){
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SitecoreMVP?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SitecoreMVP?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SitecoreMVP</b></a><a href=\"/hashtag/SitecoreMVP?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://mvp.sitecore.com/-/media/Project/SitecoreMVP/shared/Logo/587863DA972240DE80E155762532778B.gif\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if(element.innerText.toLowerCase() == "#sitecorejss"){
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SitecoreJSS?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SitecoreJSS?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SitecoreJSS</b></a><a href=\"/hashtag/SitecoreJSS?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"http://www.flux-digital.com/blog/wp-content/uploads/2018/02/jss-logo.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if(element.innerText.toLowerCase() == "#schackathon"){
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SCHackathon?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SCHackathon?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SCHackathon</b></a><a href=\"/hashtag/SCHackathon?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://pbs.twimg.com/media/DtHufVRWoAcuy6G.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }

                        if(element.innerText.toLowerCase() == "#womanofsitecore"){
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/WomenOfSitecore?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/WomenOfSitecore?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>WomenOfSitecore</b></a><a href=\"/hashtag/WomenOfSitecore?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://pbs.twimg.com/media/DiaDm-2XcAA37ce.png\" draggable=\"false\" alt=\"\"></img></a></span>";

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