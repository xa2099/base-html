function toggle(elementID) {
    var el = document.getElementById(elementID);
    if (el.style.display !== 'block') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}
