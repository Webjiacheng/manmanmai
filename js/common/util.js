/**
 * Created by hujiacheng on 2017/3/1.
 */
define([],{
    getQueryString:function(key) {
    var search=location.search.slice(1);//name=hjc&age=18
    var searchArr=search.split('&');//["name=hjc", "age=18"]
    var searchObj={};
    var tempArr=null;
    for(var i=0,len=searchArr.length;i<len;i++){
        tempArr=searchArr[i].split("=");//1-["name", "hjc"];2-["age", "18"]
        searchObj[tempArr[0]]=tempArr[1];
    }
    //console.log(searchObj);//Object {name: "hjc", age: "18"}
    //判断是否传参
    return arguments.length==0?searchObj:searchObj[key];
}
})