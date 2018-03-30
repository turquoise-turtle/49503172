window.onload=function(){
    chrome.storage.sync.get("text",function(change){    
        if(change.text){
            document.getElementById("box").innerText=change.text;
        }
    });
    if(document.getElementById("button")){
        document.getElementById("button").addEventListener("click",function(){
            var textBox=document.getElementById("card").value;
            chrome.storage.sync.set({"text":textBox});

        });
    }
}