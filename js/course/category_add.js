/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var str = util.getQueryString();
    //console.log(str);
    var result=null;
    //1-添加分类
    if(str.cg_id==undefined){
        console.log('添加');
        $.get('/v6/category/top',function (data) {
            data.result.unshift({cg_id:"0",cg_name:"顶级分类"});
            var html=ArtTemplate('add_form_tpl',{top:data.result});
            $('.category-add').html(html);
            $('#category_add_form').on('submit',function () {
                console.log($(this).serialize());
                $.post('/v6/category/add',$(this).serialize(),function (data) {
                    console.log(data);
                    location.href='/html/course/category.html';
                });
                return false;
            })
        });
    }else {
        console.log('编辑');
        $.get('/v6/category/edit',{cg_id:util.getQueryString('cg_id')},function (data) {
            result=data.result.top;
            result.unshift({cg_id:"0",cg_name:"顶级分类"});
            console.log(data.result);
            var html=ArtTemplate('add_form_tpl',data.result);
            $('.category-add').html(html);
            $('#category_add_form').on('submit',function () {
                console.log($(this).serialize());
                $.post('/v6/category/modify',$(this).serialize()+'&cg_id='+str.cg_id,function (data) {
                    console.log(data);
                    location.href='/html/course/category.html';
                });
                return false;
            })
        })
    }

    //2-编辑分类

})