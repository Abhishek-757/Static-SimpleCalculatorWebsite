function ButtonClick(val){
    document.getElementById("screen").value+=val
}
function ClearScreen(val){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text);
    document.getElementById("screen").value=result
}