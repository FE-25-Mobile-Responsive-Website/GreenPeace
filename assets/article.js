let title = "Sosial media sharing button";
let deskripsi= "Membagi konten web via sosial media";
let currentLocation = window.location;
let toper = (screen.height - 570) / 2;
let left = (screen.width - 570) / 2;
let params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + toper + ",left=" + left;

document.getElementById('twt').addEventListener('click',shareTWT)
document.getElementById('FB').addEventListener('click',shareFB)

function shareTWT() {   
    let url="https://twitter.com/intent/tweet?url=" + encodeURI(currentLocation) + "&text="+encodeURI(deskripsi);
    window.open(url,'NewWindow',params);
}
function shareFB() {
    let url="https://web.facebook.com/sharer.php?u=" + encodeURI(currentLocation);
    window.open(url,'NewWindow',params);
}