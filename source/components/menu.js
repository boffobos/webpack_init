import './menu.scss';
export default function (array, pages, className) {
  var menu = document.createElement('UL');
  menu.className = className;
  var listItems = '';
  for(let i = 0; i < array.length; i++) {
    listItems += `<li><a href="${pages[i]}">` + array[i] + '<a></li>';       
  }
  menu.innerHTML = listItems;
  return menu;
}