function greeting()
{
    var text;  
    var datum = new Date();
    var hodiny = datum.getHours();
    if(hodiny<10)
    {
        text = "Dobré ráno";
    }
    console.log(datum);
}