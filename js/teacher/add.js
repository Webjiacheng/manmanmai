/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','bootstrap','Datepicker','DatepickerLanguage'],function ($,bootstrap,Datepicker,DatepickerLanguage) {
    $('#tc_join_date').datepicker({
        language:'zh-CN',
        endDate:new Date(),
        format:'yyyy-mm-dd'
    });
    var date=new Date();
    var month=date.getMonth()+1;
    month=month>9?month:'0'+month;
    var day=date.getDate();
    day=day>9?day:'0'+day;
    $('#tc_join_date').val(date.getFullYear()+'-'+month+'-'+day);
    console.log('添加讲师');
    $('#teacher-add-form').on('submit',function () {
        $.ajax({
            url:'/v6/teacher/add',
            type:'post',
            data:$('#teacher-add-form').serialize(),
            success:function (data) {
                console.log(data);
                location.href='/html/teacher/list.html';
            }
        })
        return false;
    });
})