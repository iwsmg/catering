/**
 * Created by Administrator on 2014/10/16.
 */

var getRequest = function() {
    var url = location.search;
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0, len = strs.length; i < len; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
var VirtualPath = "/wks/";
var reqUrl = VirtualPath + "wksGuideJson.php";
var request = getRequest();
var source = request['source'];
var isiOS = navigator.userAgent.match('iPad')
    || navigator.userAgent.match('iPhone')
    || navigator.userAgent.match('iPod'), isAndroid = navigator.userAgent
    .match('Android'),isDesktop = !isiOS&&!isAndroid;
var uainfo = navigator.userAgent.toLowerCase();
//var uainfo = "micromessenger";
//var ipAddress = "http://121.199.15.168";
var ipAddress = "http://tdw.app4g.com";
var downloadUrl = "http://tdw.app4g.com/wkt/app/taogame/taogame.html";
var iosDownload = "https://itunes.apple.com/cn/app/tao-dian-wan/id727466523?l=en&mt=8";
var androidDownload = "http://tdw.app4g.com/wkt/app/TaoGame.apk";
var shopUrl = ipAddress + '/wks/weishop/index.html?company=';
var toMemberFunctions = "openmember://MemberFuctions?type=member";
var toChatActivity = "openchat://ChatActivity?id=";
var toCompanyDetailsBaseActivity = "opencompany://CompanyDetailsBaseActivity?id=";
var isWhich = "";
var toIosMember = "myapplink7://profile/727466523";
var toIosChat = "myapplink8://profile/727466523?id=";
var toIosCompany = "myapplink9://profile/727466523?id=";
var shareBrief = '，这是我的微店，大家帮忙多多宣传哟~';
var productDetailUrl = ipAddress + '/wks/share/share.html?id=';
var charCount = 30;
var charCount2 = 2000;
var charCount3 = 50;
var productImgCount = 9;
var productShowCount = 3;
var tip = {
    emptyCode : "请输入验证码",
    codeSend: "验证码已发送，请注意查收",
    codeError: "验证码错误",
    codeText : "验证码",
    codeReSend : "重新获取验证码",
    codeGetTime : "接收短信大约需要",
    second : "秒",

    emptyPhoneNum : "请输入您的手机号码",
    emptyPwd : "请输入您的密码",
    wrongPhoneNum : "请输入正确的手机号码",
    pwdLength : "密码为6-16位",

    pwdNum : "请设置6-16位密码",
    noEql : "密码和确认密码不一致",
    wrongPwd : "密码由数字、大小写字母、下划线和中横线组成",

    emptyShopName : "请输入您的公司名称",
    shopNameLen : "公司名称不能超过" + charCount + "个字符",
    emptyShopType : "请选择公司类型",
    wrongShopName : "公司名称由大小写字母、数字、下划线、中横线和中文组成",

    emptyProductName : "请输入产品名称",
    emptyProductPrice : "请输入产品价格",
    emptyProductType : "请选择产品种类",
    productImgLen : "请至少上传一张图片",
    productNameLen : "产品名称不能超过" + charCount3 + "个字符",
    wrongProductPrice : "请输入正确的价格",
    productBriefLen : "产品描述长度不能超过" + charCount2 + "个字符",
    wrongProductName : "产品名称由大小写字母、数字、下划线、中横线和中文组成",

    productImgCount : "很抱歉，最多能上传" + productImgCount + "张图片",
    fileType : "文件格式不正确,请上传图片",
    emptyFileType : "很抱歉，上传失败，建议上传相册的图片或用浏览器打开再上传",
    errorResText : "出错",
    uploadFailTip : "上传失败，建议用图库或其他浏览器上传本地图片",
    productCount : "很抱歉，您最多只能添加三个产品，若需继续添加，请下载并登录“淘电玩”app添加",
    addProduct : "添加产品",
    goAddProduct : "继续添加",

    shopShareTip : "请点击分享按钮进行分享",
    reLogin : "请重新登录再查看",
    shopNameNone : "公司名未填写",
    shopLinkNone : "公司链接未生成"




};
var isMobile = function(str) {
    var t = /0?(13|14|15|18)[0-9]{9}/;
    return t.test(str);
};
var isMobile2 = function(str) {
    var t = /^1\d{10}$/;
    return t.test(str);
};
var isPassword = function (str) {
    var t = /^[A-Za-z0-9_-]+$/;
    return t.test(str);
};
var isUserName = function (str) {
    var t = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
    return t.test(str);
};
var isProductName = function (str) {
    var t = /^[A-Za-z0-9_\-\u4e00-\u9fa5 :：,，。.""“”.]+$/;
    return t.test(str);
};
var isPrice = function (str) {
    var t = /^\d{0,8}\.{0,1}(\d{1,2})?$/;
    return t.test(str);
};

var bodyClick = function () {
    $("body").click(function(){
        hideTip();
        hideShare();
    });
};

var showTip = function(){
    var shareTipObj = $('#shareTip');
    $('#modalBackdrop').show();
    shareTipObj.show();
    shareTipObj.html('<img src="img/weixin_tip.png">');
    specialHide();
};
var showShare = function(){
    $('#modalBackdrop').show();
    $('#shareDlg').show();
    specialHide();
};
var hideShare = function(){
    $('#modalBackdrop').hide();
    $('#shareDlg').hide();
};
var hideTip = function(){
    $('#modalBackdrop').hide();
    $('#shareTip').hide();
};

var toAndroid = function () {
    switch (isWhich){
        case "toMember" :
            location.href = toMemberFunctions;
            break;
        case "toCompany" :
            location.href = toCompanyDetailsBaseActivity;
            break;
        default :
            break;
    }
};

var platform =  function(){

    if (isiOS) {
        switch (isWhich){
            case "toMember" :
                window.location = toIosMember;
                break;
            case "toCompany" :
                window.location = toIosCompany;
                break;
            default :
                break;
        }
        setTimeout(function () { window.location = iosDownload; },2000);

    }else if(isAndroid){
        if(source == "android"){
            toAndroid();
        }else{
            setTimeout(function () { window.location = downloadUrl; },1000);
            toAndroid();
        }



    }else {
        window.location = downloadUrl;

    }
};

var toTop = function () {
    location.href = "#shareTip";  
};
var isWeixin =  function(){
    if(uainfo.indexOf("micromessenger") != -1){
        showTip();
        toTop();
    }else if(uainfo.indexOf("weibo") != -1) {
        showTip();
        toTop();
    }else if(uainfo.indexOf("qq/") != -1 && isiOS){
        showTip();
        toTop();
        return;
    }else {
        platform();
    }
};



var alertSetTimeOut;
alert = function (content) {
    var alertModal = document.getElementById('alertModal');
    if (!alertModal) {
        alertModal = document.createElement('div');
        alertModal.className = 'modal-backdrop';
        alertModal.setAttribute('id', 'alertModal');
        document.body.appendChild(alertModal);
    }
    alertModal.style.display = 'block';
    var alertDialog = document.getElementById('alertDialog');
    if (!alertDialog) {
        alertDialog = document.createElement('div');
        alertDialog.className = 'alert';
        alertDialog.setAttribute('id', 'alertDialog');
        alertDialog.innerHTML = ' <div class="alert-body"></div><div class="alert-footer">确定</div>';
        document.body.appendChild(alertDialog);
        alertDialog.children[1].onclick = function () {
            document.getElementById('alertModal').style.display = 'none';
            document.getElementById('alertDialog').style.display = 'none';
            clearTimeout(alertSetTimeOut);
        }
    }
    alertDialog.style.display = 'block';
    alertDialog.children[0].innerHTML = content;
    alertSetTimeOut = setTimeout(function () {
        document.getElementById('alertModal').style.display = 'none';
        document.getElementById('alertDialog').style.display = 'none';
    },3000);

};

confirm = function (title, param, func, cancel) {
    var alertModal = document.createElement('div');
    alertModal.className = 'modal-backdrop';
    alertModal.setAttribute('id', 'confirmModal');
    document.body.appendChild(alertModal);
    alertModal.style.display = 'block';
    var alertDialog = document.createElement('div');
    alertDialog.className = 'alert confirm';
    alertDialog.setAttribute('id', 'confirmDialog');
    alertDialog.innerHTML = ' <div class="alert-body"></div><div class="alert-footer">' + '<button type="button" class="btn btn-cancel">' + (param.buttons ? param.buttons[0] : '取消') + '</button>' + '<button type="button" class="btn btn-confirm">' + (param.buttons ? param.buttons[1] : '确定') + '</button></div>';
    document.body.appendChild(alertDialog);
    var cancel1 = alertDialog.children[1].children[0];
    var commit1 = alertDialog.children[1].children[1];
    alertDialog.children[1].children[0].onclick = function () {
        var confirmModal = document.getElementById('confirmModal');
        confirmModal.parentNode.removeChild(confirmModal);
        var confirmDialog = document.getElementById('confirmDialog');
        confirmDialog.parentNode.removeChild(confirmDialog);
        if (cancel) {
            cancel();
        }
    };
    if(param && param.isShowCancel){
        cancel1.parentNode.removeChild(cancel1);
        commit1.style.width = '90%';
    }
    commit1.onclick = function () {
        if(!param || !param.isRemove) {
            var confirmModal = document.getElementById('confirmModal');
            confirmModal.parentNode.removeChild(confirmModal);
            var confirmDialog = document.getElementById('confirmDialog');
            confirmDialog.parentNode.removeChild(confirmDialog);
        }
        func(param);
    };
    alertDialog.style.display = 'block';
    alertDialog.children[0].innerHTML = title;
};

var  immediately =  function(id){
    var sibObj = $("#" + id).siblings("a");
    function webChange(){
        if(element.value){
            sibObj.show();
            sibObj.bind('click', function () {
                $("#" + id).val("");
                $(this).hide();
            });
        }else {
            sibObj.hide();
        }
    }
    var element = document.getElementById(id);
    if("\v"=="v") {
        element.onpropertychange = webChange;
    }else{
        element.addEventListener("input",webChange,false);
    }

};

