/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate','Uploadify','ckeditor','region','jqueryCookie'],function ($,ArtTemplate,Uploadify,ckeditor,region,jqueryCookie) {
    var tc_id=null;
    var tc_hometown=null;
    var ck1=null;
    console.log($.cookie('userInfo'));
    console.log('tc_avatar:'+$.cookie('tc_avatar'));
    $.get('/v6/teacher/profile',function (data) {
        console.log(data.result);
        var html=ArtTemplate('userInfo',data.result);
        tc_id=data.result.tc_id;
        tc_hometown=data.result.tc_hometown;
        //console.log(tc_id);
        $('.settings').html(html);
        ck1 = CKEDITOR.replace('setting-textarea');
        //更换头像
        $('#upfile').uploadify({
            swf:'/lib/uploadify/uploadify.swf',
            uploader:'/v6/uploader/avatar',
            fileObjName:'tc_avatar',
            fileTypeExts:'*.gif; *.jpg; *.png',
            height:$('#img-load-box').height(),
            buttonText:'',
            onUploadSuccess:function (file, data) {
                console.log(JSON.parse(data).result);//图片路径
                $.cookie('tc_avatar',JSON.stringify(data).result,{path:'/'})
                $('#img-load-box img').attr('src',JSON.parse(data).result.path);
                //location.href='';
                $('.img-circle img').attr('src',JSON.parse(data).result.path);
                //console.log('tc_avatar:'+$.cookie('tc_avatar'));
            }
        });
        //设置三级联动
        $('#hometown').region({
            url:'/lib/region/region.json'
        });

    });
    $(document).on('click','.user-btn-save',function () {
        var hometown=$('#hometown select').map(function () {
            return $(this).find('option:selected').text();
        }).toArray().join('|');
        console.log(hometown);
        //设置富文本
        ck1.updateElement();

        $.post('/v6/teacher/modify',$('#userInfoUpdata_form').serialize()+'&tc_id='+tc_id+'&tc_hometown='+hometown,function (data) {
        })
    });

})