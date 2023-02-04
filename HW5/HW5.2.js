let myCar=new Object();
myCar.model="Cybertruck";
myCar.manufacturer="Tesla";
myCar.shasher="auto-pilot"
myCar.year=2020;
myCar.maxSpeed=222

 
function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          result += objName + "." + i + " = " + obj[i] + "\n";
      }
    }
    return result;
  }
  alert (showProps (myCar, "myCar") )