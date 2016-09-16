function interactBalance(par) {
    var protein_gram = par.protein_gram;
    var fat_gram = par.fat_gram;
    var carb_gram = par.carb_gram;

    var totalcal = document.getElementById('totalcal');
    var inputProtein = document.getElementById('inputprotein');
    var inputCarb = document.getElementById('inputcarb');
    var inputFat = document.getElementById('inputfat');

    var gram1 = document.getElementById('grams1');
    var gram2 = document.getElementById('grams2');
    var gram3 = document.getElementById('grams3');

    var proc1 = document.getElementById('proc1');
    var proc2 = document.getElementById('proc2');
    var proc3 = document.getElementById('proc3');

    var protein_percentage = par.protein_gram,
        carb_percentage = par.carb_gram,
        fat_percentage = par.fat_gram;

    var liquid_ = 'M75 93 l-1 124 -288 -2 0 -103c0,0 7,2 20,1 12,-2 16,-2 25,-1 8,1 10,4 19,1 9,-2 13,-4 26,-1 14,3 10,5 23,0 14,-6 22,-5 33,-1 9,4 15,-1 29,-2 14,0 9,1 22,4 12,5 20,3 27,-1 7,-4 12,-2 17,0 5,3 9,3 18,0 9,-3 30,1 30,1z';
    var planar = 'M75 93 l-1 124 -288 -2 0 -103c10,0 18,0 27,0 10,0 15,0 25,0 12,0 18,0 30,0 7,0 10,0 17,0 7,0 11,0 18,0 11,0 17,0 27,0 14,0 15,0 28,0 9,0 13,0 21,0 11,0 19,0 29,0 9,0 9,0 19,0 6,0 9,0 18,0 10,0 30,0 30,0z';

    var cProt = new InforCircle("fillgauge1", protein_percentage, "#87BAC0", "#C0E4E8");
    var cCarb = new InforCircle("fillgauge2", carb_percentage, "#CBAB1E", "#CCC297");
    var cFat = new InforCircle("fillgauge3", fat_percentage, "#DC9533", "#EDD4B1");

    caclBallance();

    function InforCircle(tagId, volPr, colorborder, colorLiquid) {
        this.infographicSvg = Snap("#" + tagId);
        this.maskCirc = this.infographicSvg.circle(60, 60, 52).attr({fill: colorLiquid});
        this.outCircle = this.infographicSvg.circle(60, 60, 55).attr({fill: "none", stroke: colorborder, "stroke-width" : "3px"});
        var liquidWave = setLevel(this.infographicSvg, this.maskCirc, volPr, colorLiquid);
        this.updateLevel = function (vol) {updateLevel(liquidWave, vol);};
    }


    function setLevel(subj, circ, volPr){
        var liquidWave = subj.path(liquid_).attr({ fill : "#fff"});
        circ.attr({ mask:  liquidWave});
        return liquidWave;
    }


    function updateLevel(subj, volPr){
        //var levelT = `t${180 * volPr * 0.01}, ${-105 * volPr * 0.01}`;
        var levelT = "t" + (180 * volPr * 0.01) + ", " + (-105 * volPr * 0.01);
        subj.stop()
            .animate({"d" : liquid_}, 300)
            .animate({transform : levelT},600,mina.backout, function () {subj.animate({"d" : planar}, 4000, mina.elastic )} );
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


    function caclBallance() {
        calories_from_carb = carb_gram * 4;
        calories_from_fat = fat_gram * 8;
        calories_from_protein = protein_gram * 4;
        total_calories = calories_from_carb + calories_from_fat + calories_from_protein;

        protein_percentage = Math.round((calories_from_protein / total_calories) * 100);
        carb_percentage = Math.round((calories_from_carb / total_calories) * 100);
        fat_percentage = Math.round((calories_from_fat / total_calories) * 100);

        totalcal.innerHTML = "Total callories: " + total_calories;
        gram1.innerHTML = protein_gram;
        gram2.innerHTML = carb_gram;
        gram3.innerHTML = fat_gram;

        proc1.innerHTML = protein_percentage + "%";
        proc2.innerHTML = carb_percentage + "%";
        proc3.innerHTML = fat_percentage + "%";

        cProt.updateLevel(protein_percentage);
        cCarb.updateLevel(carb_percentage);
        cFat.updateLevel(fat_percentage);
    }
}