// console.log('Happy developing ✨')

function changeRowStyleStatus(status, i)
{
    console.log(status);
    if(status === "LANDED")
    {
        document.getElementsByClassName('status')[i].style.color = 'lawngreen';
        // document.getElementsByClassName('flight')[0].style.backgroundColor = 'darkred';
    }
    else if(status === "DELAYED")
    {
        document.getElementsByClassName('status')[i].style.color = 'gold';
    }
    else if(status === "CANCELLED")
    {
        document.getElementsByClassName('flight')[i].style.backgroundColor = 'darkred';
    }
}