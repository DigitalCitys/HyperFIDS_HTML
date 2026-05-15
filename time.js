const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

function showTime()
{
    // Source - https://stackoverflow.com/a/23994824
    // Posted by Ullas, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-05-15, License - CC BY-SA 3.0

    var today = new Date();
    if(today.getMinutes() < 10)
    {
        document.getElementById('time').innerHTML=today.getHours() + ":0" + today.getMinutes();
    }
    else
    {
        document.getElementById('time').innerHTML=today.getHours() + ":" + today.getMinutes();
    }
    document.getElementById('date').innerHTML=monthNames[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();
}

showTime();