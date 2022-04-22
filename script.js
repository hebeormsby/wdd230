function modify() {
    const date = new Date(document.lastModified);
    document.getElementById("modify").innerHTML = date;
}