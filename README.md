# FileAPI

## 基本
https://app.codegrid.net/entry/file-api-filereader-api

## ドラッグドロップでフォームにファイル添付

http://koheik.hatenablog.com/entry/2016/07/08/152936

```js
fileArea.addEventListener('drop', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragenter');
    var files = evt.dataTransfer.files;
    fileInput.files = files;
});
```


# index.html

画像をドラッグ・ドロップ

# txtfile.html

textをドラッグ・ドロップ