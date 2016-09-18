function interactBalance(par) {
    var staedyAnim = par.staedyAnim;
    var protein_gram = par.protein_gram;
    var fat_gram = par.fat_gram;
    var carb_gram = par.carb_gram;

    var totalcal = document.getElementById('totalcal');
    var inputProtein = document.getElementById('inputprotein');
    var inputCarb = document.getElementById('inputcarb');
    var inputFat = document.getElementById('inputfat');

    var protein_percentage = par.protein_gram,
        carb_percentage = par.carb_gram,
        fat_percentage = par.fat_gram;

    var planar = 'M75 93 l-1 124 -288 -2 0 -103c10,0 18,0 27,0 10,0 15,0 25,0 12,0 18,0 30,0 7,0 10,0 17,0 7,0 11,0 18,0 11,0 17,0 27,0 14,0 15,0 28,0 9,0 13,0 21,0 11,0 19,0 29,0 9,0 9,0 19,0 6,0 9,0 18,0 10,0 30,0 30,0z';
    var steadyW = 'M75 93 l-1 124 -216 -2 0 -103c7,0 12,3 19,3 6,0 12,-3 19,-3 9,0 11,3 20,3 5,0 12,-3 17,-3 5,0 12,3 17,3 8,0 11,-3 18,-3 9,0 9,3 19,3 7,0 12,-3 18,-3 8,0 11,3 19,3 6,0 11,-3 18,-3 5,0 12,3 18,3 8,0 15,-3 15,-3l0 0z';

    var cProt = new InforCircle("fillgauge1", {vol : protein_percentage}, "#87BAC0", "#C0E4E8", "Protein", "#6CA8AF");
    var cCarb = new InforCircle("fillgauge2", {vol : carb_percentage}, "#CBAB1E", "#CCC297", "Carb", "#9F8616");
    var cFat = new InforCircle("fillgauge3", {vol : fat_percentage}, "#DC9533", "#EDD4B1", "Fat", "#E88700");

    caclBallance();

    function InforCircle(tagId, point2val, colorborder, colorLiquid, blockName, txtColor) {
        this.volPr =  point2val.vol;
        this.infographicSvg = Snap("#" + tagId);
        this.maskCirc = this.infographicSvg.circle(60, 60, 52).attr({fill: colorLiquid});
        this.outCircle = this.infographicSvg.circle(60, 60, 55).attr({fill: "none", stroke: colorborder, "stroke-width" : "3px"});
        var liquidWave = setLevel(this.infographicSvg, this.maskCirc, this.volPr, colorLiquid);

        var gram = this.infographicSvg.text(150,25, "0 gr").attr({ fontSize: '12px', opacity: 1, "text-anchor": "middle", "font-family" :"'Nunito'", fill : txtColor, stroke : txtColor, "stroke-width" : 0  });
        var bName = this.infographicSvg.text(150,40, blockName).attr({ fontSize: '12px', opacity: 1, "text-anchor": "middle", "font-family" :"'Nunito'", fill : txtColor, stroke : txtColor, "stroke-width" : 0  });
        var proce = this.infographicSvg.text(150,100, "0%").attr({ fontSize: '28px', opacity: 1, "text-anchor": "middle", "font-family" :"'Nunito'", fill : txtColor, stroke : txtColor, "stroke-width" : 0  });

        this.updateFigures = function (volG, volP) { updateFigures(gram, proce, volG, volP);};

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

    function setLevel(subj, circ, volPr){
        var  liquid_wave= subj.path(steadyW).attr({ fill : "#fff"});
        circ.attr({ mask:  liquid_wave});
        return liquid_wave;
    }

    function updateFigures(gram, proce, figGram, figProc){
        var prevVolGr =  gram.node.textContent.match(/\d+/)[0];//get number from string
        Snap.animate(prevVolGr, figGram, function (value) {
            gram.attr({text: Math.round(value) + " gr"});
        }, 1000);
        var prevVolPr =  proce.node.textContent.match(/\d+/)[0];//get number from string
        Snap.animate(prevVolPr, figProc, function (value) {
            proce.attr({text: Math.round(value) + "%"});
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