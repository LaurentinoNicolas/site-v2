var xml = new XMLHttpRequest();
var data = "";
xml.onreadystatechange = function(){
    if(xml.readyState == 4){
        data = xml.responseXML
        modificarTags(data)   
    }
}

xml.open("GET", "https://v2saude.com.br/blog/index.php/feed/rss2/")

function modificarTags(data){
    let x = data.getElementsByTagName("item")
    

    for(var i = 0; i < 3; i++){

        let title = x[i].getElementsByTagName("title")[0].innerHTML
        let link =  x[i].getElementsByTagName("link")[0].innerHTML
        let media = x[i].getElementsByTagName("media:content")[0].getAttribute("url");

        let attributeTitle = document.getElementById("titulo"+i);
        let attributeLink = document.getElementById("link"+i);
        let attributeImg = document.getElementById("img"+i);

        console.log(attributeImg);

        attributeTitle.innerHTML = title;
        attributeImg.setAttribute('src', media)
        attributeLink.setAttribute('href', link)
        
    }

    
    
}

xml.send();

