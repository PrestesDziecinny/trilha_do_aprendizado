function Enviar(){
    var pnome= document.getElementById("pnome")
    var snome= document.getElementById("snome")
    var email= document.getElementById("email")
    var check

        if(pnome.value=="" || snome.value==""){
            alert("Preencha seu nome e sobrenome")
            check=false
        }
        else if(email.value.indexOf("@")!=-1){
            alert("Agradecemos o seu contato")
            check=true
        }else{
            alert("Email inválido")
            check=false
        }
    return check
}