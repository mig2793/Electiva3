window.onload = function()
{
    var result = 0;
    var content = cresult = "";
    var range = getId("range");

    getId("txt-range").innerHTML = range.value;

    range.addEventListener("change", function(){
        getId("txt-range").innerHTML = range.value;
        var rvalue = range.value;
        capicua(rvalue);
    });

    function capicua(rvalue){
        var init = "1";

        getId("operation").innerHTML = "";
        getId("result").innerHTML = "";
        content = "";
        cresult = "";

        for(i=0;i<rvalue;i++){
            content += "<span>"+ init + "x" + init +" = </span></br>";
            cresult += "<span>"+ init * init +"</span></br>";
            init += "1";
        }
         getId("operation").innerHTML = content;
         getId("result").innerHTML = cresult;
    }

    function getId(id){
        return  document.getElementById(id);
    }
};
