const fileZone = document.querySelector(".file-zone");

const className = "on";

fileZone.addEventListener("dragover",event => {
  event.preventDefault();
  fileZone.classList.add(className);
});

fileZone.addEventListener("dragleave",()=>{
  event.preventDefault();
  fileZone.classList.remove(className);
})

fileZone.addEventListener("drop",event => {
  event.preventDefault();
  fileZone.classList.remove(className);
  const transferdFiles = event.dataTransfer.files;
  console.log(transferdFiles);
  readFile(transferdFiles);
})

function readFile(transferdFiles){
  const txtFileList = [];
  const fileNum = transferdFiles.length;
  for(let i = 0; i < fileNum; i++){
    if(transferdFiles[i].type.match(/text.*/) === false){
      return;
    }
    txtFileList.push(transferdFiles[i]);
  }
  for(const txtFile of txtFileList){
    const fileReader = new FileReader();
    fileReader.readAsText(txtFile);
    fileReader.addEventListener("load",event => {
      console.log(event);
    });
  }
}

