'use strict'

function initAnimation(obj) {

    var SnapSVG = Snap("#" + obj[0].targetDiv);
    var scrollCounter = document.querySelector("#scrollvol");
    window.onscroll = function () {
        scrollCounter.innerHTML = window.pageYOffset || document.documentElement.scrollTop + 'px';
    };

    function Screens(par, i) {
        //var targetDiv = par.targetDiv;
        var svgTag = null;
        var scrollHandler;
        this.number = par.number;
        this.filePathName = par.pathTosvgFile;
        this.fragmentViewBox = par.viewBox;
        this.sizeOfScroll = par.sizeOfScroll;
        this.maxscrollimit = par.maxscrollimit;
        this.minscrollimit = par.minscrollimit;
        this.fade_in = par.fade_in;
        this.fade_out = par.fade_out;
        var VBArr = ""
            , ArrN = i;

        this.initScreen = function (callback) {
        };

        this.showScreen = function (data) {
            console.log("show Screen_"+ this.number, "№ in array is ", ArrN);
            var that = this;
                scrollHandler = function () {
                    that.animateScreen(that.sizeOfScroll)
                };
                document.addEventListener("scroll", scrollHandler)
            svgTag = Snap.select("#screen_" + this.number);
            VBArr = document.getElementById("screen_" + this.number).getAttribute("viewBox").split(" ").map(item => parseInt(item, 10));

            this.fade_in.forEach((el) => {
                //console.log(el);
                svgTag.animate(el, 1000);
            });
        };

/*
** Add animation to active screen
** scroll animation or animation for some elements
 */
        this.animateScreen = function (sizeOfScroll) {
            var win_scroll = window.pageYOffset || document.documentElement.scrollTop;
            console.log(sizeOfScroll);
            console.log(win_scroll, this.maxscrollimit);
            if ((win_scroll < this.maxscrollimit) && (win_scroll > this.minscrollimit)) {
                if ( sizeOfScroll > 0 ) {
                    var scroll = VBArr[0] - this.minscrollimit + win_scroll,
                        VB = `${scroll} ${VBArr[1]} ${VBArr[2]} ${VBArr[3]}`;
                    svgTag.attr({"viewBox": VB});
                }
                //svgTag.animate({"transform":"t"+scroll+" 0"}, 100);
                //svgTag.attr({"transform":"t-"+scroll+" 0"});
            }
            else {

                if (win_scroll < this.minscrollimit) {
                    this.removeScreen();
                    this.showPrevScreen();
                }
                if (win_scroll > this.maxscrollimit) {
                    this.removeScreen();
                    this.showNextScreen();
                }
            }
        };

        this.showNextScreen = function () {
            console.log("show next screen ", ArrN+1);
            screen[ArrN+1].showScreen();
        };
        this.showPrevScreen = function () {
            console.log("show prev screen ", ArrN-1);
            screen[ArrN-1].showScreen();
        };

        this.removeScreen = function () {
            console.log("this.removeScreen ");
            document.removeEventListener("scroll", scrollHandler);
            //return animation - opacity to 0, and other
            this.fade_out.forEach( el => svgTag.animate(el, 300, () => {}) );
        }
    }

    var screen = obj.map((el, i) => new Screens(el, i));
    var myLoadList = obj.map((el) => el.pathTosvgFile );
    SnapSVG.loadFilesDisplayOrdered( myLoadList, onAllLoaded, onEachLoaded );


    function onAllLoaded() {
        console.log('all loaded');
        screen[0].showScreen();
    }

    function onEachLoaded( frag, fileName ) {
        console.log(fileName, ' fragment loaded');
    }
};//end of init function

/*
** Force page scroll position to top at page refresh
 */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


