function interactBalance(par) {
    var staedyAnim = par.staedyAnim;
    var protein_gram = par.protein_gram;
    var fat_gram = par.fat_gram;
    var carb_gram = par.carb_gram;

    var totalcal;
    var inputProtein = document.getElementById('inputprotein');
    var inputCarb = document.getElementById('inputcarb');
    var inputFat = document.getElementById('inputfat');

    var protein_percentage = par.protein_gram,
        carb_percentage = par.carb_gram,
        fat_percentage = par.fat_gram;

    var cProt, cCarb, cFat;

    var steadyW = 'M75 80 l-1 124 -216 -2 0 -103c7,0 12,3 19,3 6,0 12,-3 19,-3 9,0 11,3 20,3 5,0 12,-3 17,-3 5,0 12,3 17,3 8,0 11,-3 18,-3 9,0 9,3 19,3 7,0 12,-3 18,-3 8,0 11,3 19,3 6,0 11,-3 18,-3 5,0 12,3 18,3 8,0 15,-3 15,-3l0 0z';

    var infographicSvg = Snap("#" + par.SVG_place);
    embdingSvgFile (infographicSvg, par.externalSVG, performOfImage);

    function performOfImage () {
        totalcal = document.querySelector('#calories tspan');
        var wave = Snap.selectAll("#Oval-Copy");
        var circls = Snap.selectAll("#Oval");
        cProt = new InforCircle(circls[0], wave[0], protein_percentage, document.querySelector('#protein tspan'), document.querySelectorAll('#proteinprocent tspan')[0]);
        cCarb = new InforCircle(circls[1], wave[1], protein_percentage, document.querySelector('#carb tspan'), document.querySelectorAll('#carbprocent tspan')[0]);
        cFat = new InforCircle(circls[2], wave[2], protein_percentage, document.querySelector('#fat tspan'), document.querySelectorAll('#fatprocent tspan')[0]);
        caclBallance();
    }

    function embdingSvgFile (target_, filePathName, callBack)
    {
            Snap.load(filePathName, function ( loadedFragment ) {
                target_.append( loadedFragment );
                callBack();
            } );
    }

    function InforCircle(circ, wave, volPr, gramTag, procTag ) {
        this.volPr = volPr;
        this.circ = circ.clone().attr({"id" : "clone", "r" : 46, fill : circ.attr("stroke"), "stroke-width" : "0px"});
        var liquidWave = setLevel(wave, this.circ, this.volPr);

        this.updateFigures = function (volG, volP) { updateFigures(gramTag, procTag, volG, volP);};
        var self = this;
        this.setPrAmount = function(amount) { // animated level change
            Snap.animate(self.volPr, amount, function(iter){  self.volPr = iter;  }, 500, mina.easeinout );
            if ( !  staedyAnim ) runSteadyAnimation();
        };
        var runSteadyAnimation = function() {
            var tyming = staedyAnim ? 8000 : 500;
            Snap.animate(30, 70, function(iter){
                liquidWave.transform( "t" + (180 * iter * 0.01) + ", " + (-105 * self.volPr * 0.01));}, tyming, function(){ if ( staedyAnim ) {runSteadyAnimation()} }
            )
        };
        runSteadyAnimation();
    }

    function setLevel(liquid_wave, circ, volPr){
        liquid_wave.attr({"d" : steadyW});
        circ.attr({ mask : liquid_wave});
        return liquid_wave;
    }

    function updateFigures(gram, proce, figGram, figProc){
        var prevVolGr = gram.textContent.match(/\d+/)[0];//get number from string
        var suffixGr = gram.textContent.split(" ")[1];
        Snap.animate(prevVolGr, figGram, function (value) {
            gram.textContent = Math.round(value) + " " + suffixGr;
        }, 1000);
        var prevVolPr =  proce.textContent.match(/\d+/)[0];//get number from string
        Snap.animate(prevVolPr, figProc, function (value) {
            proce.textContent = Math.round(value);
        }, 1000);
    }

    inputProtein.onchange = function () {
        protein_gram = this.value;
        caclBallance();
    };

    inputCarb.onchange = function () {
        carb_gram = this.value;
        caclBallance();
    };

    inputFat.onchange = function () {
        fat_gram = this.value;
        caclBallance();
    };

    inputProtein.onkeyup = function () {
        protein_gram = this.value;
        caclBallance();
    };

    inputCarb.onkeyup = function () {
        carb_gram = this.value;
        caclBallance();
    };

    inputFat.onkeyup = function () {
        fat_gram = this.value;
        caclBallance();
    };


    function caclBallance() {
        calories_from_carb = carb_gram * 4;
        calories_from_fat = fat_gram * 8;
        calories_from_protein = protein_gram * 4;
        total_calories = calories_from_carb + calories_from_fat + calories_from_protein;

        protein_percentage = Math.round((calories_from_protein / total_calories) * 100);
        carb_percentage = Math.round((calories_from_carb / total_calories) * 100);
        fat_percentage = Math.round((calories_from_fat / total_calories) * 100);

        totalcal.innerHTML = "Total callories: " + total_calories;

        cProt.updateFigures(protein_gram, protein_percentage);
        cCarb.updateFigures(carb_gram, carb_percentage);
        cFat.updateFigures(fat_gram, fat_percentage);

        cProt.setPrAmount(protein_percentage);
        cCarb.setPrAmount(carb_percentage);
        cFat.setPrAmount(fat_percentage);
    }
}