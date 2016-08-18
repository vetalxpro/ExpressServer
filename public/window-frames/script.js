function openPage() {
  var newWin = window.open('/', 'test window');
  newWin.document.write(
    //'<script>window.opener.document.body.innerHTML="test"</script>'
  );



}

$(function () {
  //console.log(document.body.innerHTML);
  var iframe=document.getElementsByTagName('iframe')[0];
  var iframeDoc=iframe.contentWindow.document;
  if(iframeDoc.readyState=='complete'){
    iframeDoc.body.style.backgroundColor='green';
  }
});

