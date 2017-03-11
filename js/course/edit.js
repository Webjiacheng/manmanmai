/**
 * Created by hujiacheng on 2017/3/1.
 */
define(['jquery','util','ArtTemplate','bootstrap','Datepicker','DatepickerLanguage'],function ($,util,ArtTemplate,bootstrap,Datepicker,DatepickerLanguage) {
    $(document).on('focus','#tc_join_date',function () {
        $('#tc_join_date').datepicker({
            language:'zh-CN',
            endDate:new Date(),
            format:'yyyy-mm-dd'
        })
    })

    //1-获取tc_id
    //console.log(util);
    console.log(util.getQueryString());
    var tc_id=util.getQueryString('tc_id');
    console.log(tc_id);
    $.get('/v6/teacher/edit',{tc_id:tc_id},function (data) {
        if(data.code==200){
            //获取教师信息成功
            var html = ArtTemplate('tc_write',data.result);
            $('.teacher-add').html(html);
        }
    });
    //点击保存按钮
    $(document).on('click','.save_button',function () {
        console.log('点击');
        $.ajax({
            url:'/v6/teacher/update',
            type:'post',
            data:$('#form-save').serialize()+'&tc_id='+tc_id,
            success:function (data) {
                if(data.code==200){
                    location.href='/html/teacher/list.html';
                }
            },
            error:function (data) {
                console.log('失败原因：'+data);
            }
        })
    })
})