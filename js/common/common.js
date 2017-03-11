/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery','jqueryCookie','NProgress'],function ($,undefined,NProgress)
{
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    $(document).ajaxStart(function () {
        //console.log('加载开始');
        $('.overlay').show();
    }).ajaxStop(function () {
        //console.log('加载完毕');
        $('.overlay').hide();
    });

    var pathname=window.location.pathname;
    //映射路径
    var pathObj={
        "/html/course/category_add.html":"/html/course/category.html",
        "/html/course/category.html":"/html/course/category.html",
        "/html/course/add_step1.html":"/html/course/list.html",
        "/html/course/add_step2.html":"/html/course/list.html",
        "/html/course/add_step3.html":"/html/course/list.html",
        "/html/course/list.html":"/html/course/list.html",
        "/html/course/add.html":"/html/course/add.html"
    }

    console.log(pathname);
    $('a').removeClass('active').filter('[href="'+pathObj[pathname]+'"]').addClass('active').parents().show();

    $('#return').on('click',function () {
        $.ajax({
            url:'/v6/logout',
            type:'post',
            success:function (data) {
                if(data.code==='200'){
                    console.log('进来');
                    location.href='/html/home/login.html';
                }
            },
            error:function (data) {
                //console.log(data);
            }
        })
        return false;
    });
    //{"tc_name":"123456","tc_avatar":""}
    var userInfo;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    //var tc_name=userInfo.tc_name;
    //var tc_avatar=userInfo.tc_avatar;
    console.log(userInfo.tc_name+'----'+userInfo.tc_avatar);
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'小木瓜');
    $('.aside .img-circle img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.jpg');

    NProgress.done();
})