document.getElementById("login_form").addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    fetch("https://64534e38e9ac46cedf21b9a3.mockapi.io/api/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        let index = res.filter((item) => {
          return item.username === username && item.password === password;
        });
        console.log(index);
  
        if (index.length > 0) {
          // alert("ketemu")
          window.location.href = "index.html";
          localStorage.setItem('index_login', 0)
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
        } else {
          alert("Pastikan username dan password sudah benar !");
        }
      });
  });