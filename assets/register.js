const key = "https://64534e38e9ac46cedf21b9a3.mockapi.io/api/v1/users"
document.getElementById('regis_form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const data = {
        username,
        password
    }

    const postData = () =>{
        fetch(key, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {"content-type":"application/json"}
        })
        // .then((res)=>{
        //     return res.json()
        // }).then((res)=>{
        //     console.log(res);
        // })
        alert('Berhasil sign up, anda akan diarahkan ke halaman login !')
        window.location.href = "login.html";

    }
    postData()
})