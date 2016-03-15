/**
 * Created by Administrator on 2014/12/2.
 */

$(function(){

    var getCoupon = function () {

        var toGetDiscountObj = $("#toGetDiscount");
        toGetDiscountObj.bind('click',function () {
            location.href = "getCouponResult.html";
        });


    };

    getCoupon();



});