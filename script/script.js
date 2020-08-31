//jQuery 버전
//서브메뉴 구현
/* $("#mainMenu>li, #subMenu").mouseover(function(){
    $("#subMenu").stop().slideDown();
});
$("#mainMenu>li, #subMenu").mouseout(function(){
    $("#subMenu").stop().slideUp();
}); */

//슬라이드이미지
/* function fnDoSlide() {
    $("#slideShuttleFrame").animate({"margin-top" : "-300px"}, 1000, function(){
        $("#slideShuttleFrame").css({"margin-top" : "0"});
        $("#slideShuttleFrame a:first").insertAfter("#slideShuttleFrame a:last");
    });
}
setInterval(fnDoSlide, 3000);
 */

//모달팝업레이어
    /* $("#bbsNotice table tr:first").click(function(){
        $("#modalLayerPopupBg").css({"display" : "block"});
    });
    $("#layerPopupbtn button").click(function(){
        $("#modalLayerPopupBg").css({"display" : "none"});
    }); */

    
    //Javascript 버전
    //서브메뉴 구현
    function openSubMenu() {
        var subMenu = document.querySelector("#subMenu").style.display="block";
    }
    function closeSubMenu() {
        var subMenu = document.querySelector("#subMenu").style.display="none";
    }

    //슬라이드이미지 구현
    /* function doSlide() {

    }
    setInterval(doSlide, 3000); */

    //모달레이어팝업
    function openModal() {
        document.querySelector("#modalLayerPopupBg").style.display="block";
    }

    function closeModal() {
        document.querySelector("#modalLayerPopupBg").style.display="none";
    }
