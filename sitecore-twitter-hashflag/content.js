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

                        if (element.innerText.toLowerCase() == "#sitecoremvp") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SitecoreMVP?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SitecoreMVP?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SitecoreMVP</b></a><a href=\"/hashtag/SitecoreMVP?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/jSgScaz.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if (element.innerText.toLowerCase() == "#sitecorejss") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SitecoreJSS?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SitecoreJSS?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SitecoreJSS</b></a><a href=\"/hashtag/SitecoreJSS?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/af4ZbJ5.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if (element.innerText.toLowerCase() == "#schackathon") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SCHackathon?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SCHackathon?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SCHackathon</b></a><a href=\"/hashtag/SCHackathon?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/hE4qf7n.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }

                        if (element.innerText.toLowerCase() == "#womenofsitecore") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/WomenOfSitecore?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/WomenOfSitecore?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>WomenOfSitecore</b></a><a href=\"/hashtag/WomenOfSitecore?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/KDCov3m.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if (element.innerText.toLowerCase() == "#spe") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SPE?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SPE?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SPE</b></a><a href=\"/hashtag/SPE?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/4OV72Ln.jpg\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if (element.innerText.toLowerCase() == "#coveo") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/Coveo?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/Coveo?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>Coveo</b></a><a href=\"/hashtag/Coveo?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/Q7bLbeO.jpg\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }


                        if (element.innerText.toLowerCase() == "#sugcon") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SUGCON?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SUGCON?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SUGCON</b></a><a href=\"/hashtag/SUGCON?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/ZPMcfxl.png\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }

                        if (element.innerText.toLowerCase() == "#sitecoresym") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SitecoreSYM?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SitecoreSYM?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SitecoreSYM</b></a><a href=\"/hashtag/SitecoreSYM?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/yNiuBJM.jpg\" draggable=\"false\" alt=\"\"></img></a></span>";

                                        doc = new DOMParser().parseFromString(xmlString, "text/xml");

                                        element.outerHTML = doc.firstChild.innerHTML;
                                    }
                                }
                            }
                        }

                        if (element.innerText.toLowerCase() == "#sxa") {
                            if (element.nextSibling !== null) {
                                if (element.textContent !== " ") {
                                    if (element.nextSibling.href !== "https://twitter.com/hashtag/SXA?src=hash") {
                                        var xmlString = "<span class=\"twitter-hashflag-container\"><a href=\"/hashtag/SXA?src=hash\" data-query-source=\"hashtag_click\" class=\"twitter-hashtag pretty-link js-nav\" dir=\"ltr\"><s>#</s><b>SXA</b></a><a href=\"/hashtag/SXA?src=hash\" dir=\"\"><img class=\"twitter-hashflag\" src=\"https://i.imgur.com/EVRiuIs.png\" draggable=\"false\" alt=\"\"></img></a></span>";

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