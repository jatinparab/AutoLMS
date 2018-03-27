document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("automate").addEventListener("click", popup);
  });

  function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "check"},function(response){
        if(response.ready == "true"){
            chrome.tabs.query({currentWindow: true, active: true},function(tabs){
                var activeTab2 = tabs[0];
                chrome.tabs.sendMessage(activeTab2.id, {"message":"execute"});
            });
        }else{
            chrome.tabs.query({currentWindow: true, active: true},function(tabs){
                var activeTab3 = tabs[0];
                chrome.tabs.sendMessage(activeTab3.id, {"message":"alertfalse"});
            });
        }
    });
   });
   
}