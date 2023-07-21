function addUser(){
    username=document.getElementById ("UserName").value
    localStorage.setItem("username",username)
    window.location="kwitter_room.html"
}