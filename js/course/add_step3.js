/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','util','ArtTemplate','Uploadify'],function ($,util,ArtTemplate,Uploadify) {
    console.log('js/course/add_3');
    var cs_id=util.getQueryString('cs_id');
    var ct_is_free=null;
    $.get('/v6/course/lesson',{cs_id:cs_id},function (data) {
        if(data.code==200){
            var html=ArtTemplate('step3_tpl',data.result);
            console.log(data.result);
            $('.steps').html(html);
            //改变侧边栏样式
            $('.forwards').find('a').removeClass('active').last().addClass('active');
        }
        //添加课时
        $(document).on('click','#lesson-add',function () {
            $('#chapterModal').modal();
            var html=ArtTemplate('step3_modal_tpl',data.result);
            $('.modal-content').html(html);

            $(document).on('click','#modal-add',function () {
                console.log('点击添加');
                if($("input[type='checkbox']").is(':checked')){
                    ct_is_free=1;
                }else {
                    ct_is_free=0;
                }
                var data=$('#modal-add-form').serialize()+'&ct_is_free='+ct_is_free+'&ct_cs_id='+cs_id;
                $.post('/v6/course/chapter/add',data,function (data) {
                    if(data.code==200){
                        location.href='/html/course/add_step3.html?cs_id='+cs_id;
                    }
                    console.log('提交数据');
                    console.log(data);
                });
            })
        })

        //编辑课时
        $('.lesson-edit').on('click',function () {
            console.log('点击编辑');
            $('#chapterModal').modal();
            var ct_id=$(this).attr('ct_id');
            console.log(ct_id);
            $.get('/v6/course/chapter/edit',{ct_id:ct_id},function (data) {
                console.log(data);
                var html=ArtTemplate('step3_modal_tpl',data.result);
                $('.modal-content').html(html);
                if(data.result.ct_is_free=="1"){
                    $('#is-free').attr('checked','checked');
                }
                $(document).on('click','#modal-add',function () {
                    console.log('点击修改');
                    if($("input[type='checkbox']").is(':checked')){
                        ct_is_free=1;
                    }else {
                        ct_is_free=0;
                    }
                    var date=$('#modal-add-form').serialize()+'&ct_is_free='+ct_is_free+'&ct_cs_id='+cs_id+'&ct_id='+ct_id;
                    $.post('/v6/course/chapter/modify',date,function (data) {
                        if(data.code==200){
                            location.href='/html/course/add_step3.html?cs_id='+cs_id;
                        }
                        console.log(data);
                    });
                })
            });
        })

    })
})