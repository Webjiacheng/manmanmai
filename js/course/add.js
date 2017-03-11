/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery'],function ($) {
    //console.log('添加课程');

    //获取到课程cs_id
    var cs_id=null;
    //获取课程名称cs_name
    var cs_name=null;

    $('#add_class').on('submit',function () {
        $.post('/v6/course/create',$(this).serialize(),function (data) {
            //跳转到添加页面
            if(data.code==200){
                cs_id=data.result.cs_id;
                cs_name=$('#add_class').serialize();
                location.href='/html/course/add_step1.html?cs_id='+cs_id;
            }
        })
        return false;
    })
})