import '../styles/header.css';
export default function Navbar(){
  return (
    <div className='header'>
    <a href='/' classname='logo'>Agenda 2030</a>
    <input type='checkbox' class='menuBtn' id='menuBtn' />
    <label for='menuBtn' class='menuIcon'>
      <span class='navIcon'></span>
    </label>
    <ul class='menu'>
      <li><a href='/'>Home</a></li>
      <li><a href='#'>Obiettivi</a></li>
      <li><a href='/quiz'>Quiz</a></li>
    </ul>
    </div>
  );
}