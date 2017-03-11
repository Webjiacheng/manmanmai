/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate'],function ($,ArtTemplate) {
    $.get('/v6/course',function (data) {
        var html=ArtTemplate('course-list-tpl',{list:data.result});
        console.log(data.result[0]);
        $('#course-list').html(html);
        $(document).on('click','.href-list',function () {
            var cs_id=$(this).attr('cs_id');
            location.href='/html/course/add_step1.html?cs_id='+cs_id;
        })
    });
})