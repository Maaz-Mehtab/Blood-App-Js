function convertToAgo(d) {
    var date, time, month, min, sec;
    var list;
    date.timezone('Asia/karachi');
    list(date, time) = explode(" ", d);
    list(year, month, day) = explode("-", date);
    list(hour, min, sec) = explode(":", time);
}