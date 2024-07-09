import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Home.css'
import Card from '../Card/Card';
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




const Home = () => {

  const col = {
    color: 'green', // Text color
      };

  return (

    <div className="main-container">
    <div className='first-div' >
    

<div className='center-div'>
  <h1>Propel your business</h1>
  <p className='paragraph'>Propel comes with everything you need to get your business rolling.</p>
  <button className='center-div-btn'>GetStarted</button>
</div>
    </div>
     

      <div className='card-div'>
        <div className='card-div-para'>
          
          <h3 className='h2'> <span className='span-h1'>Promoting your business and services with Propel </span>A responsive, multi-page business template with everything you need propel your business. </h3>
        </div>
      </div>

      <div className='cards'>
        <Card
          imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681bfb5b239d8246368808_icon-feature-01.svg"
          imgAlt="img"
          title="Pro ad constituto"
          description="Ne usu illud albucius abhor reant, partiendo scriptorem mel ne."
        />
         <Card
          imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681c235fc94c975348ed36_icon-feature-02.svg"
          imgAlt="img"
          title="Eam commodo"
          description="Fuisset intellegat delicatissimi ex mea. Cu probo integre nec."
        />
         <Card
          imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681c455b239d0903368830_icon-feature-03.svg"
          imgAlt="img"
          title="Reformidans eis"
          description=" Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet."
        />
      </div>

      <div className='img-div'>
        <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6828cd23db9d2325f990e6_image-slider-02.jpg' alt='img' id='food-img'></img>
      </div>

      <div className='mid-para'>
      <h2 className='h2'> <span className='span-h1'>Illud decore voluptaria has at. </span>Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo. </h2>
      <br></br>
      <h6 style={col}>More about us</h6>
      </div>

      <div className='img-para-div'>

        <div className='img-one'>
            <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b683ebb5fc94c7452490bd2_image-row-01.jpg'></img>
        </div>
        <div className='para-one'>
          <h2 className='h2'><span className='span-h1'>Ex tempor euismod sapientem ouis lexor pro.</span> Ad vix dicta iudico singulis, ius ex mollis veritus</h2>
          <br></br><br></br>
          <p className='para-one-para'>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>

        </div>

      </div>

      <div className='img-para-div'>

        <div className='para-one'>
          <h2 className='h2'><span className='span-h1'>Te elit antiopam vix zril recusabo ut pri.</span> Quas suscipit ad mea verear vivendo tincidunt.</h2>
          <br></br><br></br>
          <p className='para-one-para'>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
        </div>

        <div className='img-one'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6838dff109cf4aa0d96f64_image-row-02.jpg'></img>
        </div>

      </div>

      <div className='mid-para'>
      <h1 className='h2'> Wanna know more about the Premium deal? </h1>
      <h6 style={col}>SEE THE FULL RANGE OF PREMIUM</h6>

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

      
      
    </div>
  );

}

export default Home


// <Card 
//      imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681bfb5b239d8246368808_icon-feature-01.svg"
//       imgAlt="img"
//       title="Card title"
//       description="this is random"
//       buttonText="Get Started"
//       link="cardPage"

//   />