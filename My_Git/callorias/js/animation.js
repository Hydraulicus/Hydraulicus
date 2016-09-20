function interactBalance(par) {
    var SVGFILE = '<svg width="517px" height="137px" viewBox="0 0 517 137" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="chart-mockup" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-42.000000, -234.000000)"><g id="svg-copy" transform="translate(15.000000, 223.000000)"><g id="Group" transform="translate(29.000000, 46.000000)"><circle id="Oval" stroke="#87BAC0" stroke-width="3" cx="50" cy="50" r="50"></circle><path d="M50,97 C75.9573832,97 97,75.9573832 97,50 C97,42.1006072 85,35.9999998 76,44.9999999 C67,53.9999999 64.4788187,38.9328521 47,46.9999999 C34,53.0000003 18.4949076,42.2542243 10,42 C5.3032582,41.8594422 2.99999854,46.7956489 3,50 C3.00001182,75.9551066 24.0426168,97 50,97 Z" id="Oval-Copy" fill="#C0E4E8"></path><text id="protein" font-family="Avenir-Medium, Avenir" font-size="14" font-weight="400" letter-spacing="0.233333319" fill="#6CA8AF"><tspan x="107" y="18">20 gr </tspan><tspan x="107" y="37">Protein</tspan></text><text id="proteinprocent" font-family="Avenir-Medium, Avenir" font-size="36" font-weight="400" letter-spacing="0.599999964" fill="#87BAC0"><tspan x="107" y="84">29</tspan><tspan x="148.232" y="84" font-size="16" letter-spacing="0.266666651">%</tspan></text></g><g id="Group-Copy" transform="translate(205.000000, 46.000000)"><circle id="Oval" stroke="#CBAB1E" stroke-width="3" cx="50" cy="50" r="50"></circle><path d="M50,97 C75.9573832,97 97,75.9573832 97,50 C97,42.1006072 85,35.9999998 76,44.9999999 C67,53.9999999 64.4788187,38.9328521 47,46.9999999 C34,53.0000003 18.4949076,42.2542243 10,42 C5.3032582,41.8594422 2.99999854,46.7956489 3,50 C3.00001182,75.9551066 24.0426168,97 50,97 Z" id="Oval-Copy" fill="#CCC297"></path><text id="carb" font-family="Avenir-Medium, Avenir" font-size="16" font-weight="400" letter-spacing="0.266666651" fill="#9F8616"><tspan x="107" y="18">20 gr </tspan><tspan x="107" y="40">Carb</tspan></text><text id="carbprocent" font-family="Avenir-Medium, Avenir" font-size="36" font-weight="400" letter-spacing="0.599999964" fill="#9F8617"><tspan x="112" y="83">12</tspan><tspan x="153.232" y="83" font-size="16" letter-spacing="0.266666651">%</tspan></text></g><g id="Group-Copy-2" transform="translate(382, 46)"><circle id="Oval" stroke="#DC9533" stroke-width="3" cx="50" cy="50" r="50"></circle><path d="M50,97 C75.9573832,97 97,75.9573832 97,50 C97,42.1006072 85,35.9999998 76,44.9999999 C67,53.9999999 64.4788187,38.9328521 47,46.9999999 C34,53.0000003 18.4949076,42.2542243 10,42 C5.3032582,41.8594422 2.99999854,46.7956489 3,50 C3.00001182,75.9551066 24.0426168,97 50,97 Z" id="Oval-Copy" fill="#EDD4B1"></path><text id="fat" font-family="Avenir-Medium, Avenir" font-size="16" font-weight="400" letter-spacing="0.266666651" fill="#E88700"><tspan x="107" y="18">20 gr </tspan><tspan x="107" y="40">Fat</tspan></text><text id="fatprocent" font-family="Avenir-Medium, Avenir" font-size="36" font-weight="400" letter-spacing="0.599999964" fill="#E78700"><tspan x="107" y="87" >41</tspan><tspan x="148.232" y="87" font-size="16" letter-spacing="0.266666651">%</tspan></text></g><text id="calories" font-family="Avenir-Medium, Avenir" font-size="20" font-weight="400" letter-spacing="0.333333313" fill="#B8995F"><tspan x="216" y="27">300 Calories</tspan></text></g></g></g></svg>';
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

    let promise_ = new Promise( function (resolve, reject)  {
    infographicSvg.add(Snap.parse(SVGFILE));
        resolve("result");
});
    promise_.then(
             function () {
                 performOfImage ();
             },
            function() {console.log("error parsing embed SVG");    }
);



    function performOfImage () {
        totalcal = document.querySelector('#calories tspan');
        var wave = Snap.selectAll("#Oval-Copy");
        var circls = Snap.selectAll("#Oval");
        cProt = new InforCircle(circls[0], wave[0], protein_percentage, document.querySelector('#protein tspan'), document.querySelectorAll('#proteinprocent tspan')[0]);
        cCarb = new InforCircle(circls[1], wave[1], protein_percentage, document.querySelector('#carb tspan'), document.querySelectorAll('#carbprocent tspan')[0]);
        cFat = new InforCircle(circls[2], wave[2], protein_percentage, document.querySelector('#fat tspan'), document.querySelectorAll('#fatprocent tspan')[0]);
        caclBallance();
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