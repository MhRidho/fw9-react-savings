import React from 'react'
import { Helmet } from 'react-helmet'

import '../assets/css/styles.css';
import Partners from '../assets/img/partners.png'
import PngPhone from '../assets/img/PngPhonePurple-min.png'
import PngPhone2 from '../assets/img/PngPhone2Purple.png'
import PngPhone3 from '../assets/img/PngPhone3Purple-min.png'
import Profile from '../assets/img/1.png'
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft, FiPhone, FiLock, FiDownload } from 'react-icons/fi';
// import { useSelector } from 'react-redux';
import logo from '../assets/img/logo savings.png'

const Home = () => {
  // const count = useSelector((state) => state.counter.value);
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>
      {/* START HEADER */}
      <header>
        <nav>
          <div className='logo'>
            <img src={logo} alt='logo.png' />
            <h1>Savings</h1>
          </div>
          <div class='buttonlanding'>
            <button className='b-login'><Link to={'/login'} class="a-login">Login</Link></button >
            <button className='b-sign'><Link to={'/sign-up'} class="a-sign">Sign Up</Link></button >
          </div>
        </nav>
        <main>
          <div>
            <div className='aside'>
              <h1>Awesome App<br />
                For Saving Time.</h1>
              <p>We bring you a mobile app for banking problems that<br />
                oftenly wasting much of your times.</p>
              <button className="b-sign"><Link to={'/home'} className="a-sign">Try It Home</Link></button>
              {/* <h1>{count}</h1> */}
            </div>
          </div>
          <div className='wallpaper'>
            <img src={PngPhone} alt="PngPhone.png" />
          </div>
        </main>
      </header>
      {/* END HEADER */}

      {/* <!-- START PARTNERS --> */}
      <section class="partners">
        <img src={Partners} alt="partners.png" />
      </section>
      {/* <!-- END PARTNERS --> */}


      {/* <!-- START ABOUT --> */}
      <main className="about">
        <div className="h1">
          <h1><span>About</span> the Application.</h1>
        </div>
        <div className="p">
          <p>We have some great features from the application and it's totally free<br /> to use by all users around the
            world.</p>
        </div>
        <div class="row-card">
          <div class="card">
            <div class="img">
              <div className="i" >
                <FiPhone className='fs-24px' />
              </div>
            </div>
            <p class="support">24/7 Support</p>
            <p class="contact">We have 24/7 contact support so you<br /> can contact us
              whenever you want<br /> and we will
              respond it.</p>
          </div>
          <div className="card">
            <div className="img">
              <div className="i" >
                <FiLock className='fs-24px' />
              </div>
            </div>
            <p className="support">Data Privacy</p>
            <p className="contact">We make sure your data is safe in our<br /> database and we will encrypt any<br /> data you
              submitted to us.</p>
          </div>
          <div className="card">
            <div className="img">
              <div className="i" >
                <FiDownload className='fs-24px' />
              </div>
            </div>
            <p className="support">Easy Download</p>
            <p className="contact">Zwallet is 100% totally free to use it's<br /> now available on Google Play Store<br /> and
              App Store.</p>
          </div>
        </div >
      </main >
      {/* <!-- END ABOUT --> */}


      {/* <!-- START FEATURE ARTICLE --> */}
      <article>
        <div className="rowart">
          <div className="colart-1">
            <img src={PngPhone2} alt="PngPhone2.png" />
            <img src={PngPhone3} alt="PngPhone3.png" />
          </div>
          <div className="colart-2">
            <div>
              <h1>All The <span>Great</span><br />
                Savings Features.</h1>
            </div>
            <div className="ul-features">
              <div className="li-features">
                <p className="title"><span>1. </span>Small Fee</p>
                <p>We only charge 5% of every success transaction done in Zwallet app.</p>
              </div>
              <div className="li-features">
                <p className="title"><span>2. </span>Data Secured</p>
                <p>All your data is secured properly in our system and it's encrypted.</p>
              </div>
              <div className="li-features">
                <p className="title"><span>3. </span>User Friendly</p>
                <p>Zwallet come up with modern and sleek design and not complicated.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* <!-- END FEATURE ARTICLE --> */}


      {/* <!-- START SAYING SUMMARY --> */}
      <summary>
        <div>
          <h1>What Users are <span>Saying.</span></h1>
        </div>
        <div>
          <p>We have some great features from the application and it's totally free<br /> to use by all users around the
            world.</p>
        </div>
        <div class="people">
          <div class="arrow">
            <div className='colarrow'>
              <FiArrowLeft className='fs-24px' />
            </div>
          </div>
          <div class="figure">
            <img src={Profile} alt="Profile" />
            <h1>Alex Hansinburg</h1>
            <span>Designer</span>
            <p>“This is the most outstanding app that I've ever try in my live, this app is such an amazing
              masterpiece and<br /> it's suitable for you who is bussy with their bussiness and must transfer money
              to
              another person aut there.<br /> Just try this app and see the power!”</p>
          </div>
          <div class="arrow">
            <div className='colarrow'>
              <FiArrowRight className='fs-24px' />
            </div>
          </div>
        </div>
      </summary>
      {/* <!-- END SAYING SUMMARY -->*/}

      {/* <!-- START FOOTER --> */}
      <footer>
        <div><span class="footer">Savings</span></div>
        <div>
          <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
        <div>
          <hr />
        </div>
        <div class="contact">
          <span>2022 Savings. All right reserved.</span>
          <div class="numb">
            <span>+62 5637 8882 9901</span>
            <span>contact@savings.com</span>
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER --> */}
    </>
  )
}

export default Home;