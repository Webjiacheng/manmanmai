/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','util','ArtTemplate'],function ($,util,ArtTemplate) {

    console.log('添加课程第一步');
    var cs_id=util.getQueryString('cs_id');
    $.get('/v6/course/basic',{cs_id:cs_id},function (data) {
        console.log('进来');
        console.log(data);
        var html=ArtTemplate('step1_tpl',data.result);
        $('.steps').html(html);
        //改变侧边栏样式
        $('.forwards').find('a').removeClass('active').first().addClass('active');
        //点击保存按钮
        $(document).on('click','#step1_save',function () {
            $.post('/v6/course/update/basic',$('#step1_form').serialize()+'&cs_id='+cs_id,function (data) {
                console.log(data);
                location.href='/html/course/add_step2.html?cs_id='+cs_id;
            });
        });
        //点击top分类时变化
        $('#category-top-select').on('change',function () {
            var topId=$(this).val();
            $.get('/v6/category/child',{cg_id:topId},function (data) {
                var optionHTML='\
                    {{ each list as value i }}\
                    <option value="{{ value.cg_id }}">{{ value.cg_name }}</option>\
                    {{ /each }}';
                var render=ArtTemplate.compile(optionHTML);
                $('#category-child-select').html(render({list:data.result}));
            });
        })
    });
})