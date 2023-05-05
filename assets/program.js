document.getElementById('btn_ikutpro').disabled = false;
document.getElementById('btn_ikutpro').addEventListener('click',()=>{
    if (localStorage.getItem('index_login')) {
        alert('akun anda berhasil terdaftar di program ini anda akan diarahkan ke halaman program !')
        location.reload()
    }else{
        alert('anda harus login dahulu !')
    }
})