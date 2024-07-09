import React from 'react'
import './Pricing.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const links = [
  { name: 'Features', href: '/features' },
  { name: 'Premium', href: '/premium' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Sign in', href: '/signin' },
];

const buttonLink = {
  name: 'Get Started',
  href: '/get-started',
};
const logoUrl = 'https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg';



const Pricing = () => {

  const col = {
    color: 'green', // Text color
      };
  return (

    <div className='main-container'>

<div className='header'>
    <Navbar links={links} logo={logoUrl} />
    <div className='header-center'>
      <h6>Pricing - </h6>
      <h1 className='h1'>Expect only the best meals from us.</h1>
      <p>At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur</p>

    </div>
    </div>

     

      <div className='third-div'>
        <span className='text-span'>We offer multiple options.</span> <h2 id='third-div-h2'> Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea.</h2>
      </div>

{/* ********************* */}

<div class="card-row">
  <div class="party-card">
    <div class="party-card-content">
      <h2 class="party-card-title">Small Party</h2>
      <div class="party-card-price">
        <span class="price-amount">150</span>
        <span class="price-currency">USD</span>
      </div>
      <p class="party-card-description">
        Et nominavi necessitatibus per. In eos libris inimicus, pri novum viris quaerendum at.
      </p>
      <hr class="divider"/>
      <ul class="party-card-features">
        <li>0-50 Guests</li>
        <li>Non-alcoholic beverages</li>
        <li>Snacks</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </ul>
    </div>
    <div class="party-card-action">
      <button class="get-started-button">Get Started</button>
    </div>
  </div>
  
  
  <div class="party-card">
    <div class="party-card-content">
      <h2 class="party-card-title">Medium Party</h2>
      <div class="party-card-price">
        <span class="price-amount">350</span>
        <span class="price-currency">USD</span>
      </div>
      <p class="party-card-description">
      Cu sit case consequat complectitur. An putant dolorem ceteros quo. Modo omnesque constituto cu cum.
      </p>
      <hr class="divider"/>
      <ul class="party-card-features">
        <li>50-100 Guests</li>
        <li>Non-alcoholic beverages</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <br></br><br></br><br></br>
      </ul>
    </div>
    <div class="party-card-action">
      <button class="get-started-button">Get Started</button>
    </div>
  </div>

  <div class="party-card">
    <div class="party-card-content">
      <h2 class="party-card-title">Large Party</h2>
      <div class="party-card-price">
        <span class="price-amount">750</span>
        <span class="price-currency">USD</span>
      </div>
      <p class="party-card-description">
      Civibus sententiae ea sea, te ius tritani fuisset. Ei quas putant vel. Ad odio scripta pri.
      </p>
      <hr class="divider"/>
      <ul class="party-card-features">
        <li>100-200 Guests</li>
        <li>Non-alcoholic beverages</li>
        <li>Snacks</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li><br></br>
      </ul>
    </div>
    <div class="party-card-action">
      <button class="get-started-button">Get Started</button>
    </div>
  </div>
</div>


{/* ************************** */}
       

       

      <div className='fifth-div'>
        <div className='card'>
      <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='round-img'></img>
      <h4 className='card-h1'>Pro ad constituto</h4>
      <p className='card-para'>Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.</p>
        </div>

        <div className='card'>
      <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='round-img'></img>
      <h4 className='card-h1'>Eam commodo</h4>
      <p className='card-para'> Ne his fabellas efficiendi. Eum te rebum accusamus, et omnium option.</p>
        </div>

        <div className='card'>
      <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='round-img'></img>
      <h4 className='card-h1'>Reormidans eis</h4>
      <p className='card-para'>Maluisset imperdiet ea vel. Justo doctus dissentiet in nec.</p>
        </div>

        <div className='card'>
      <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='round-img'></img>
      <h4 className='card-h1'>Fabellas efficiendi</h4>
      <p className='card-para'>Ut sea saperet expetendis, in virtute detraxit quo dipiscing efficiendi nam ea.</p>
        </div>
      </div>

       

        <div className='second-div'>
    <h3 className='h2'> <span className='span-h1'>Got a question about our pricing model? </span>Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an.</h3>
    </div>


      

      <div className='seventh-div'>
        <div className='left-one'>
          <h5 className='right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='right-one'>
          <h5 className='right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>
        <div className='left-one'>
          <h5 className='right-one-h1'>Mei ne eirmod omittam adipisci?</h5>
          <p className='right-one-para'>Id sed labores dolorum veritus, falli aeque id vis. Aliquip aperiri facilisis ei eam, an eos agam vivendo platonem. Quo volumus scaevola te. Mei invenire erroribus ne, at sit diam docendi. Vix cu aeque molestiae, sed no persius nusquam postulant.</p>
        </div>
        <div className='right-one'>
          <h5 className='right-one-h1'>No facilis molestie mei. Alia malis dolor nam ea?</h5>
          <p className='right-one-para'>Viderer molestiae vim id, equidem oportere consulatu eu nam. Et solum verterem eleifend nam. Doming latine scriptorem ex nec, alii equidem vis eu.</p>
        </div>

        <div className='left-one'>
          <h5 className='right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='right-one'>
          <h5 className='right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>

        <div className='left-one'>
          <h5 className='right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='right-one'>
          <h5 className='right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>
      </div>

      <div className='last-div'>

<div className='last-div-left'>
<h6 style={col}>Party on -</h6>
<h2 className='h2'><span className='span-h1'>Quas suscipit ad mea..</span>  Pri cu dico labores officiis odio principes complectitur ad sea.</h2>
</div>

<div className='last-div-right'>
  <button className='center-div-btn'>Get Started</button>
</div>

</div>

<div className='footer-div' >
  <Footer></Footer>
</div>
    </div>
  )
}

export default Pricing















