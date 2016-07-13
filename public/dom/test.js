function start() {
  let str = 'Lorem ipsum dolor sit amet, \
		consectetur adipisicing elit. Consectetur perferendis, doloribus autem labo \
		nam, natus labore nulla! Eum consectetur, praesentium nulla sit consequatur, \
		exercitationem id sed?';
  let strArr = str.split('');
  let container = document.getElementById('example');
  container.textContent=str;
  // typeWriter(container, strArr);
}

function typeWriter(container, dataArr) {
	let data = dataArr.slice();
  let timer = setInterval(() => {
    if (data.length > 0) {
      container.textContent += data[0];
      data.shift();
    } else {
      // clearInterval(timer);

      data=dataArr.slice();
      container.textContent='';
    }
  }, 70);
}
