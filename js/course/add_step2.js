/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','util','ArtTemplate','Uploadify'],function ($,util,ArtTemplate,Uploadify) {
    console.log('添加课程第二步');
    var cs_id=util.getQueryString('cs_id');
    $.get('/v6/course/picture',{cs_id:cs_id},function (data) {
        console.log(data);
        if(data.code==200){
            var html=ArtTemplate('step2_tpl',data.result);
            $('.steps').html(html);
            //改变侧边栏样式
            $('.forwards').find('a').removeClass('active').eq(1).addClass('active');
        }
        //点击选择图片按钮
        //更换头像
        $('#upfile').uploadify({
            swf:'/lib/uploadify/uploadify.swf',
            uploader:'/v6/uploader/cover',
            fileObjName:'cs_cover_original',
            formData:{cs_id:cs_id},
            fileSizeLimit:'2MB',
            fileTypeExts:'*.gif; *.jpg; *.png',
            height:$('.preview img').height(),
            buttonText:'选择图片',
            buttonClass:'btn btn-success btn-sm',
            width:'100%',
            height:'100%',
            onUploadSuccess:function (file, data) {
                console.log(JSON.parse(data).result);//图片路径
                $('.cover-img').attr('src',JSON.parse(data).result.path);
            }
        });
    });
})