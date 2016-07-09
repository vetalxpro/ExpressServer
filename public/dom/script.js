window.onload = function() {
  // console.log(navigator);
  // console.log(location);
  document.body.style.background = '';
  document.body.style.color = '';
  // console.log(document.body.innerHTML);

  // $$("div.my") – ищет все элементы в DOM по данному CSS-селектору.
  // $("div.my") – ищет первый элемент в DOM по данному CSS-селектору.
  // console.log(document.documentElement);
  // console.log(document.body.childNodes);
  // console.log(document.head);
  // for(let i=0;i<document.body.childNodes.length;i++){
  // 	console.log(document.body.childNodes[i]);
  // }
  // let childArr=document.body.childNodes;
  // childArr = Array.prototype.slice.apply(childArr);
  // console.log(childArr);
  // childArr.forEach((item)=>console.log(item));

  // for (var i = 0; i < document.body.children.length; i++) {
  //     console.log( document.body.children[i] ); // DIV, UL, DIV, SCRIPT
  //   }
  // let table = document.body.children[4];
  // console.log(table.rows);
  // console.log(table.tHead);
  // console.log(table.tBodies);
  // console.log(table.rows[0].cells[1].innerHTML);


  var genTable = '<tr>';
  for (let i = 1; i <= 5; i++) {
    if (i > 1) genTable += '</tr><tr>';
    for (let j = 1; j <= 5; j++) {
      genTable += `<td>${i}:${j}</td>`;
      if (i == 5 && j == 5) genTable += '</tr>';
    }
  }
  // console.log(genTable);

  var table = document.getElementById('genTable');
  table.innerHTML = genTable;

  // table.style.borderCollapse = 'collapse';
  // for (let i = 0; i < table.rows.length; i++) {
  //   for (let j = 0; j < table.rows.length; j++) {
  //     table.rows[i].cells[j].style.border = '1px solid black';
  //     table.rows[i].cells[j].style.padding = '3px 5px';
  //   }
  // }
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    table.rows[i].cells[i].innerHTML = 'red';
  }
  // console.log(genTable);

  // var elems = table.getElementsByTagName('tr');
  // for(let i = 0;i<elems.length;i++){
  // 	console.log(elems[i].innerHTML);
  // }
  var liElements = document.querySelectorAll('ul > li:last-child');
  console.log(liElements);
  for(let i = 0;i<liElements.length;i++){
  	console.log(liElements[i].innerHTML);
  }




}
