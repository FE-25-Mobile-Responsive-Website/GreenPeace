let title = "Sosial media sharing button";
let deskripsi= "Membagi konten web via sosial media";
let currentLocation = window.location;
let toper = (screen.height - 570) / 2;
let left = (screen.width - 570) / 2;
let params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + toper + ",left=" + left;

document.getElementById('twt').addEventListener('click',shareTWT)
document.getElementById('FB').addEventListener('click',shareFB)
document.getElementById('wa').addEventListener('click',sharewa)

function shareTWT() {   
    let url="https://twitter.com/intent/tweet?url=" + encodeURI(currentLocation) + "&text="+encodeURI(deskripsi);
    window.open(url,'NewWindow',params);
}
function shareFB() {
    let url="https://web.facebook.com/sharer.php?u=" + encodeURI(currentLocation);
    window.open(url,'NewWindow',params);
}
function sharewa(){
    var url="https://api.whatsapp.com/send?phone=&text=" + encodeURI(title +" "+deskripsi);
    window.open(url,'NewWindow',params);
  }


//index login dari local storage
if(localStorage.getItem('index_login') == 0 ){
    document.getElementById('btn-login').style = 'display:none';
    document.getElementById('btn_signout').style = 'display:block';
  
  }else{
    document.getElementById('btn-login').style = 'display:block';
    document.getElementById('btn_signout').style = 'display:none';
  }
  
  document.getElementById('btn_signout').addEventListener('click',()=>{
    localStorage.removeItem('index_login');
    location.reload()
  })