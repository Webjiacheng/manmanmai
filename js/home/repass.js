/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery'],function ($) {
    $('#repass-form').on('submit',function () {
        var self=$(this);
        //console.log($('#new_password').val(),$('#confirm_password').val());
        var tc_pass=parseInt($('#original_password').val());
        var tc_new_pass=parseInt($('#new_password').val());
        if($('#new_password').val()==$('#confirm_password').val()){
            $.post('/v6/teacher/repass',{
                tc_pass:tc_pass,
                tc_new_pass:tc_new_pass
            },function (data) {
                console.log(data);
                if(data.code==200){
                    alert('密码修改成功！');
                    $('#return').trigger('click');
                }
            })
        }
        return false;
    })
})