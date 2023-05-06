document.getElementById('btn_ikutpro').disabled = false;
document.getElementById('btn_ikutpro').addEventListener('click',()=>{
    if (localStorage.getItem('index_login')) {
        alert('akun anda berhasil terdaftar di program ini anda akan diarahkan ke halaman program !')
        location.reload()
    }else{
        alert('anda harus login dahulu !')
    }
})



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