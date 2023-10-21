function navBar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../../../html/navBar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('shared-content1').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}