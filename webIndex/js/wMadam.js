/**
 * Created by Administrator on 2016/1/12.
 */
$(function(){

    //Ʒ���Ƽ� �������Ч��
    $("#favoriteBrandUl > li").mouseenter(function(){
        $(this)
            .find("a").addClass("styCol")
            .parent("li").siblings("li").find("a").removeClass("styCol");
    })
    $("#favoriteBrandUl").mouseleave(function(){
        $(this).children("li").find("a").removeClass("styCol");
    })

    //�������Ч�� ��װ
        $(".handbags_b ul li").mouseenter(function(){
            $(this)
                .addClass("add_shade")
                .siblings("li").removeClass("add_shade")
                .end()
                .find(".price_item").addClass("bg_color")
                .parent("li").siblings("li").find(".price_item").removeClass("bg_color");
        })
        $(".handbags_b ul").mouseleave(function(){
            $(this)
                .children("li").removeClass("add_shade")
                .find(".price_item").removeClass("bg_color");
        })

    //��ͼ����ֲ�
    //Ϊ�޷����׷��һ��ͼƬ
    $("#bigimg > ul").append($("#bigimg > ul > li:first").clone(true));
    //��װ����
    var sta = 0;
    var new_left = 0 ;
    var timer = null;
    var wUlLiLength = $("#bigimg ul li").length;
    var withUl = $("#bigimg").width();
     function autoplay(){
     	sta++;
         if(sta==wUlLiLength){
             sta=1;
             $("#bigimg > ul")[0].style.left = 0;
         }
         new_left = -sta * withUl;
         $("#bigimg > ul").animate({'left':new_left+'px'},400);
     }

    //�Զ��ֲ�
    timer = setInterval(autoplay,2000);

    //��ʾ��ͷ
    $("#bigimg").mouseenter(function(){
        clearInterval(timer);
        $(this).find("#wpoint a").show();
    })
    //���ؼ�ͷ
    $("#bigimg").mouseleave(function(){
        timer = setInterval(autoplay,2000);
        $(this).find("#wpoint a").hide();
    })

    //�����ڼ�ͷ����ɫ���� Ч����װ
    function direction(element){
        $(element).on("mouseenter click",function(){
            $(this).css("opacity","0.7");

        })
        $(element).on("mouseleave",function(){
            $(this).css("opacity","0.3");
        })
    }
    direction("#bigimg .wpal");
    direction("#bigimg .wpar");


    // ��������Ч��
    $('#bigimg .wpal').click(function() {
        if(sta!=0){
            sta--;
        }else{
            sta = wUlLiLength-2;
        }
        auto();
    })
    // �ұ������Ч��
    $('#bigimg .wpar').click(function(){
        if(sta!= wUlLiLength-1){
            sta++;
        }else{
            sta=1;
        }
        auto();
    })

    function auto(){
        new_left = -sta * withUl;
        $("#bigimg > ul").animate({'left':new_left+'px'},100);
    }

})