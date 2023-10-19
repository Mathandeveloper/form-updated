let username=document.getElementById("name")
let email=document.getElementById("email")
let pwd=document.getElementById("pwd")
let cpwd=document.getElementById("cpwd")
let namelabel=document.getElementById("namelabel")
let emaillabel=document.getElementById("emaillabel")
let pwdlabel=document.getElementById("pwdlabel")
let cpwdlabel=document.getElementById("cpwdlabel")


function validate()
{
    if(username.value=="")
    {
        namelabel.textContent="enter the username"
        return false;
    }
    if(email.value=="")
       {
        emaillabel.textContent="enter the email"
        return false
       }
    if(pwd.value=="")
    {
    pwdlabel.textContent="enter the password"
    return false
    }
    if(cpwd.value=="")
    {
    cpwdlabel.textContent="enter Re-password"
     return false
     }
    
    
}