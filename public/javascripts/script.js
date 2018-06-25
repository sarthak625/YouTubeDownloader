var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'http://localhost:3000/percent', true);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        string = xmlhttp.responseText;
        console.log(string);
    }
}
xmlhttp.send();