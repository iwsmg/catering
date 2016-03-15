/**
 * Created by Administrator on 2014/12/2.
 */


$(function(){

    var myCoupon = function () {


        $("#nav_1 a").on("touchstart touchend mouseover mouseout", function(e){
            switch(e.type){
                case "touchstart":
                case "mouseover":
                    this.classList.add("hover");
                    break;
                case "touchend":
                case "mouseout":
                    this.classList.remove("hover");
                    break;
            }
        });

    };

    myCoupon();



});