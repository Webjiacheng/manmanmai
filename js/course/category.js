/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate'],function ($,ArtTemplate) {
    console.log('课程分类渲染');
    var html=null;
    $.get('/v6/category',function (data) {
        html=ArtTemplate('form_category_tpl',{list:data.result});
        $('tbody').html(html);
        $(document).on('click','.class_edit',function () {
            console.log($(this).parent().attr('cg_id'));
            $.get('/v6/category/edit',{cg_id:$(this).parent().attr('cg_id')},function (data) {
                var str='cg_id='+data.result.cg_id+'&cg_name='+data.result.cg_name+'&cg_pid='+data.result.cg_pid+'&cg_order='+data.result.cg_order+'&cg_is_hide='+data.result.cg_is_hide;
                location.href='/html/course/category_add.html?'+str;
                console.log(str);
            })
        })
    });

})