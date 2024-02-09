import '../styles/home.css';
import SDG1 from '../img/index/icon/SDG1.jpg'
import SDG2 from '../img/index/icon/SDG2.jpg'
import SDG3 from '../img/index/icon/SDG3.jpg'
import SDG4 from '../img/index/icon/SDG4.jpg'
import SDG5 from '../img/index/icon/SDG5.jpg'
import SDG6 from '../img/index/icon/SDG6.jpg'
import SDG7 from '../img/index/icon/SDG7.jpg'
import SDG8 from '../img/index/icon/SDG8.jpg'
import SDG9 from '../img/index/icon/SDG9.jpg'
import SDG10 from '../img/index/icon/SDG10.jpg'
import SDG11 from '../img/index/icon/SDG11.jpg'
import SDG12 from '../img/index/icon/SDG12.jpg'
import SDG13 from '../img/index/icon/SDG13.jpg'
import SDG14 from '../img/index/icon/SDG14.jpg'
import SDG15 from '../img/index/icon/SDG15.jpg'
import SDG16 from '../img/index/icon/SDG16.jpg'
import SDG17 from '../img/index/icon/SDG17.jpg'
export default function Home(){
  return (
    <div className='grid'>
      <a href='/obiettivo1'><img src={SDG1} alt='SDG 1' /></a>
      <a href='/obiettivo2'><img src={SDG2} alt='SDG 2' /></a>
      <a href='/obiettivo3'><img src={SDG3} alt='SDG 3' /></a>
      <a href='/obiettivo4'><img src={SDG4} alt='SDG 4' /></a>
      <a href='/obiettivo5'><img src={SDG5} alt='SDG 5' /></a>
      <a href='/obiettivo6'><img src={SDG6} alt='SDG 6' /></a>
      <a href='/obiettivo7'><img src={SDG7} alt='SDG 7' /></a>
      <a href='/obiettivo8'><img src={SDG8} alt='SDG 8' /></a>
      <a href='/obiettivo9'><img src={SDG9} alt='SDG 9' /></a>
      <a href='/obiettivo10'><img src={SDG10} alt='SDG 10' /></a>
      <a href='/obiettivo11'><img src={SDG11} alt='SDG 11' /></a>
      <a href='/obiettivo12'><img src={SDG12} alt='SDG 12' /></a>
      <a href='/obiettivo13'><img src={SDG13} alt='SDG 13' /></a>
      <a href='/obiettivo14'><img src={SDG14} alt='SDG 14' /></a>
      <a href='/obiettivo15'><img src={SDG15} alt='SDG 15' /></a>
      <a href='/obiettivo16'><img src={SDG16} alt='SDG 16' /></a>
      <a href='/obiettivo17'><img src={SDG17} alt='SDG 17' /></a>
    </div>
  );
}