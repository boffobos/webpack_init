import createMenu from './components/menu';
import './style';
var menu = createMenu(['Главная', 'Обо мне', 'Контакты'],['./index.html', './pages/about.html', './pages/contacts.html'], 'menu');
document.querySelector('header > nav').appendChild(menu);