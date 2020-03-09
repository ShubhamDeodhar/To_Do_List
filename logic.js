var c=0;
document.getElementById("btn").addEventListener("click",function(){
    c=c+1;
   var val=document.getElementById("pending").value;
    const list=document.getElementById("list");
    var node= document.createElement("LI");
    var text=document.createTextNode(val);
    node.appendChild(text);
    var btn=document.createElement("button");
    var bval=document.createTextNode("X");
    btn.appendChild(bval);
    btn.setAttribute("style","margin-left:3%");
    btn.setAttribute("onclick","this.parentNode.parentNode.removeChild(this.parentNode);")
    
    var line=document.createElement("hr")
    node.appendChild(btn);
    node.appendChild(line);
    list.appendChild(node);
    document.getElementById("count").innerHTML=c;
  
    document.getElementById("pending").value='';
});
