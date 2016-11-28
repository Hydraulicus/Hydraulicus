'use strict'

var animTime = [];
function initAnimation (obj) {
    console.clear();
    animTime = obj[0].AnimTime;
    var scrollCounter =  document.querySelector( "#scrollvol" );
    window.onscroll = function () {
        scrollCounter.innerHTML = window.pageYOffset || document.documentElement.scrollTop + 'px';
    };

    function Screens(par) {
        var targetDiv = par.targetDiv;
        var target_ = document.querySelector( "#"+par.targetDiv );
        var svgTag = null;
        this.filePathName = par.pathTosvgFile;
        this.fragmentViewBox = par.viewBox;
        this.sizeOfScroll = par.sizeOfScroll;
        var VBArr = this.fragmentViewBox.split(" ").map(function(item) {
            return parseInt(item, 10);
        });

        this.initScreen = function (filePathName = this.filePathName, callback) {
            var that = this;
            makeRequest('GET', filePathName)
                .then(function (datums) {
                    console.log("Loaded ",filePathName);
                    that.showScreen(datums);
                    console.log(that.sizeOfScroll);
                    if ( that.sizeOfScroll > 0 )
                    {
                        document.addEventListener("scroll",  () => that.animateScreen(that.sizeOfScroll))
                    }
                })
                .catch(function (err) {
                    console.error('Augh, there was an error!', err.statusText);
                });
        };

        this.showScreen = function (data) {
            target_.innerHTML = data;
            svgTag = Snap.select("#" + targetDiv + " svg");
            //svgTag.attr({"viewBox" : this.fragmentViewBox, "preserveAspectRatio" : "xMidYMid slice"});
            svgTag.attr({"viewBox" : this.fragmentViewBox});
            console.log(svgTag.node);
        };

        this.animateScreen = function (size) {
            var scroll = window.pageYOffset || document.documentElement.scrollTop,
                VB = `${VBArr[0]+scroll} ${VBArr[1]} ${VBArr[2]} ${VBArr[3]}`;
            console.log(VB);

            svgTag.attr({"viewBox" : VB});
        };

        this.removeScreen = function () {

        }
    }

    var screen0 = new Screens(obj[1]);
    screen0.initScreen();

    function makeRequest (method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }



};//end of init function