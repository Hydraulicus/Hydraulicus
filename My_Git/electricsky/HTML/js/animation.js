var rhythm = 300 //ms, 
  , animSvg

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

    drawObjects();


};//end of init function



function drawObjects()
    {
      for (var j in objects)
        { 
          animSvg.add(Snap.parse(objects[j]))
        }
       }

