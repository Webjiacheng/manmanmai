/**
 * Created by hujiacheng on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //引入第三方库
        jquery:'lib/jquery/jquery',
        bootstrap:'node_modules/bootstrap/dist/js/bootstrap',
        echarts:'lib/echarts/echarts.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        NProgress:'lib/nprogress/nprogress',
        ArtTemplate:'node_modules/art-template/dist/template',
        Datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        DatepickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        Uploadify:'/lib/uploadify/jquery.uploadify',
        ckeditor:'/lib/ckeditor/ckeditor',
        region:'/lib/region/jquery.region',
        //ArtTemplate:'lib/artTemplate/template',
        //引入自己的js地址
        Index:'js/common/index',
        userList:'js/user/list',
        userProfile:'js/user/profile',
        common:'js/common/common',
        util:'js/common/util',
        Edit:'js/course/edit',
        TeacherAdd:'js/teacher/add',
        TeacherList:'js/teacher/list',
        TeacherEdit:'js/teacher/edit',
        HomeLogin:'js/home/login',
        HomeRepass:'js/home/repass',
        HomeSettings:'js/home/settings',
        CourseAdd:'js/course/add',
        CourseAdd_step1:'js/course/add_step1',
        CourseAdd_step2:'js/course/add_step2',
        CourseAdd_step3:'js/course/add_step3',
        CourseCategory:'js/course/category',
        CourseCategory_add:'js/course/category_add',
        CourseList:'js/course/list',
        CourseTopic:'js/course/topic'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        DatepickerLanguage:{
            deps:['jquery','Datepicker']
        },
        Uploadify:{
            deps:['jquery']
        }
    }
});
require(['NProgress'],function (NProgress) {
    NProgress.start();
});
//所有页面都需要这两个文件，先加载
require(['jquery','bootstrap','echarts','common']);
(function (window) {
    var pathname=window.location.pathname;
    require(['jquery','jqueryCookie'],function ($,undefined) {
        if(pathname=='/html/home/login.html' && $.cookie('PHPSESSID')){
            location.href='/index.html';
        }else if(!(pathname=='/html/home/login.html') && !($.cookie('PHPSESSID'))){
            location.href='/html/home/login.html';
        }
        switch(pathname){
            case '/index.html':
                require(['Index']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['TeacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['TeacherList']);
                break;
            case '/html/home/login.html':
                require(['HomeLogin']);
                break;
            case '/html/home/repass.html':
                require(['HomeRepass']);
                break;
            case '/html/home/settings.html':
                require(['HomeSettings']);
                break;
            case '/html/course/add.html':
                require(['CourseAdd']);
                break;
            case '/html/teacher/edit.html':
                require(['Edit']);
                break;
            case '/html/course/add_step1.html':
                require(['CourseAdd_step1']);
                break;
            case '/html/course/add_step2.html':
                require(['CourseAdd_step2']);
                break;
            case '/html/course/add_step3.html':
                require(['CourseAdd_step3']);
                break;
            case '/html/course/category.html':
                require(['CourseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['CourseCategory_add']);
                break;
            case '/html/course/list.html':
                require(['CourseList']);
                break;
            case '/html/course/topic.html':
                require(['CourseTopic']);
                break;
            default:
                console.log('页面失败');
        }
    })

}(window))