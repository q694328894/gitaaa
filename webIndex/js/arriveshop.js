$(window).load(function () {

    //����� start
    var $jMwrapAd = $(".j-mwrap-ad");
    $jMwrapAd.find("li").mouseenter(function () {
        $(this).find("span").css("display","block");
    });
    $jMwrapAd.find("li").mouseleave(function () {
        $(this).find("span").css("display","none");
    });

    //������
    $(".js-put").children().eq(0).click(function () {
        $(".jsp-citybox").fadeToggle();
    });

    $(".js-brand").children().eq(0).click(function () {
        $(".jsb-brandbox").fadeToggle();
    });



    //�ŵ�ͼƬ�� start
    var $jmsItem = $(".jms-item");
    $jmsItem.mouseenter(function () {
        $(this).find(".jsmi-top").css("display", "none");
        $(this).find(".jsmi-top-over").css("display", "block");
        $(this).find(".jsmi-bottom").addClass(" over-bottom");
    });
    $jmsItem.mouseleave(function () {
        $(this).find(".jsmi-top").css("display", "block");
        $(this).find(".jsmi-top-over").css("display", "none");
        $(this).find(".jsmi-bottom").removeClass(" over-bottom");
    });

    //store_v30.ini();


});