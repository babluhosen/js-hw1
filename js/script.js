function changebyid(){
    document.getElementById("demo1").innerHTML="hello world";
    document.getElementById("demo2").innerHTML="hello Bangladesh";
}
function changebyname(){
    document.getElementsByClassName("demo3")[2].innerHTML="hello Bangladesh";
}
function mousechange(){
    document.getElementById("mchangs").innerHTML="hello Bangladesh";
    document.getElementById("mdown").innerHTML="hello Bangladesh";
    document.getElementById("mleave").innerHTML="hello Bangladesh";
}
//variable use //
//var +//
var x=5;
var y=10;
z=x+y;
    document.getElementById("v1").innerHTML="Total Value = "+z;
    ///var muti//
    var x=5;
    var y=10;
    z=x*y;
    document.getElementById("v2").innerHTML="Total ="+z;
      ///var sub//
      var x=20;
      var y=10;
      z=x-y;
      document.getElementById("v3").innerHTML="Total ="+z;
       ///var divided//
       var x=20;
       var y=10;
       z=x/y;
       document.getElementById("v4").innerHTML="Total ="+z;
       //let use //
      
       //additional assignment optr//
       
      function changeonclick (){
        let x = 10;
        x++;
        let z = x;
        document.getElementById("ir").innerHTML=z;
      }
      let r = 10;
      r--;
      let f = r;
      document.getElementById("dr").innerHTML=f;
      //expondation//
      let m = 5;
      let o = m ** 2; 
      document.getElementById("m").innerHTML=o;
      //operator 
     var op=(10*5)/4;
     document.getElementById("opp").innerHTML=op;
     //boolen//
     function boolencheeck (){
    var x=5;
    var y=5;
    var z=6;
        document.getElementById("bt").innerHTML=(x==y);
        document.getElementById("bl").innerHTML=(x==z);
      }
      //array using the scripts///
      function arrarycheck(){
        var fruts=["Apple","Orange","Mango"];
        document.getElementById("ar").innerHTML=fruts;
      }
     
