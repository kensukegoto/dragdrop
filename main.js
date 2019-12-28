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
  displayImages(transferdFiles);
})

function displayImages(transferdFiles){
  const imageFileList = [];
  const fileNum = transferdFiles.length;
  for(let i = 0; i < fileNum; i++){
    if(transferdFiles[i].type.match(/images.*/) === false){
      return;
    }
    imageFileList.push(transferdFiles[i]);
  }
  const imagePreviewArea = document.querySelector(".image-list");
  for(const imageFile of imageFileList){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load",event => {
      const image = new Image();
      image.src = event.target.result;
      imagePreviewArea.insertBefore(image,imagePreviewArea.firstChild);
    });
  }
}

