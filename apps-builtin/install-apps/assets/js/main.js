var ui = function(){
  var install = function(url){
    console.log("Installing " + url);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "install");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({repository: url}));
  }

  var setupManualInstall = function(){
    var installButton = document.getElementById('install');
    installButton.addEventListener('click', function(e){
      e.preventDefault();
      var repo = document.getElementById('manual').value;
      install(repo);
      return false;
    })
  }

  var receiveMessage = function(e){
    if(e.data && e.data.install){
      install(e.data.install);
    }
  }

  var setupWebInstall = function(){
    window.addEventListener("message", receiveMessage, false);
  }

  setupManualInstall();
  setupWebInstall();
}

document.addEventListener("DOMContentLoaded", ui);
