var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", 'http://localhost:3000/', true);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        string = xmlhttp.responseText;
        console.log(xmlhttp);
    }
}
xmlhttp.send();