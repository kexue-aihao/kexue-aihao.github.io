function siteRunningTime() {
    // 获取站点创建时间，假设在Hexo配置文件中有一个创建日期的变量
    // 可以先在Hexo配置文件中定义一个变量，如site_start_date: "2024-01-01 00:00:00"
    var siteStartDate = new Date('{{ site.site_start_date }}');
    var currentDate = new Date();
    var diff = currentDate - siteStartDate;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}