
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content { text-align: center; height: ",[0,400],"; margin-top: ",[0,200],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/publish-detial/publish-release/publish-release.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      