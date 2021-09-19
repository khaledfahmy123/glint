import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import useScrollPosition from "@react-hook/window-scroll";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import { social, counters, services, gallery, nav_data } from "./data";
import "./../css/main.css";
import "./../css/nav.css";

var id = new Date();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

const Nav = () => {
  const clicked = () => {
    document.querySelector("nav").classList.toggle("open");
    document.querySelector("nav main").classList.toggle("open-main");
    document.querySelector("nav h5").classList.toggle("open-main");
  };

  return (
    <>
      <button
        className="logo nav-btn"
        onClick={() => {
          console.log("lol");
          clicked();
        }}
      >
        <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
      </button>
      <nav>
        <div>
          <h5>Navigation</h5>
          <span
            onClick={() => {
              clicked();
            }}
          >
            <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon>
          </span>
        </div>
        <main className="">
          <ul>
            {nav_data.map((e) => {
              return (
                <>
                  <li key={id.getTime()}>
                    <a href={e.link}>{e.title}</a>
                  </li>
                </>
              );
            })}
          </ul>

          <p>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>
          <Social></Social>
        </main>
      </nav>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header id="home">
        <a href="#">
          <img
            data-aos={"fade"}
            className="logo"
            src={require("./../imgs/logo-inner.webp").default}
          ></img>
        </a>
        <ul
          className="social-links social-side"
          data-aos={"fade-left"}
          data-aos-delay="1200"
          data-aos-duration="500"
        >
          {social.map((e, i) => {
            return (
              <>
                <li key={id.getTime()}>
                  <a href={e.link} className="link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={e.icon}
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        <div className="cont" data-aos={"fade-up"} data-aos-duration="1200">
          <span></span>
          <h4>WELCOME TO GLINT</h4>

          <h2>
            We are a creative group of people who design influential brands and
            digital experiences.
          </h2>
          <span></span>
          <div className="btns-cont">
            <button className="btn">Start A project</button>
            <button className="btn">More about us</button>
          </div>
        </div>
      </header>
    </>
  );
};

const About = () => {
  // const lol = document.getElementsByClassName("counters-cont").offsetTop;
  // const scrollY = useScrollPosition(0);
  // console.log(lol);

  return (
    <>
      <section className="about hide-scroll" id="about">
        <div className="cont">
          <h4 data-aos={"fade-up"}>HELLO THERE</h4>
          <div data-aos={"fade-up"}>
            <h1>We Are Glint</h1>
            <span className="line"></span>
          </div>
          <p data-aos={"fade-up"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
          <ul data-aos={"fade-up"} className="counters-cont">
            {counters.map((e, i) => {
              return (
                <>
                  <li key={id.getTime()}>
                    <CountUp
                      start={0}
                      end={e.number}
                      duration={3}
                      className="counter"
                    ></CountUp>

                    <h4>{e.title}</h4>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <section className="services hide-scroll" id="services">
        <div className="cont">
          <h4 data-aos={"fade-up"}>WHAT WE DO</h4>
          <div data-aos={"fade-up"}>
            <h2>
              We’ve got everything you need to launch and grow your business
            </h2>
            <span className="line"></span>
          </div>
          <main>
            {services.map((e, i) => {
              return (
                <>
                  <article
                    key={id.getTime()}
                    className="one-service"
                    data-aos={"fade-up"}
                  >
                    <FontAwesomeIcon
                      icon={e.icon}
                      className="icon"
                    ></FontAwesomeIcon>
                    <div>
                      <h3>{e.title}</h3>
                      <p>{e.txt}</p>
                    </div>
                  </article>
                </>
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
};

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <div className="overlay"></div>
        <div className="cont">
          <h4>RECENT WORKS</h4>
          <h2>We love what we do, check out some of our latest works</h2>
          <span className="line"></span>
          <main className="gallery">
            {gallery.map((e, i) => {
              return (
                <>
                  <article
                    className="card"
                    key={id.getTime()}
                    data-aos={"fade-up"}
                  >
                    <img src={e.img} alt={e.job}></img>
                    <div className="card-info">
                      <a href="#" className="link">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faLink}
                        ></FontAwesomeIcon>
                      </a>
                      <span>+</span>
                      <section>
                        <h4>{e.title}</h4>
                        <h5>{e.job}</h5>
                      </section>
                    </div>
                  </article>
                </>
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
};

const Clients = () => {
  return (
    <>
      <section className="clients" id="clients">
        <div className="cont">
          <h4>OUR CLIENTS</h4>
          <h2>Glint has been honored to partner up with these clients</h2>
        </div>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="overlay"></div>
        <div className="cont">
          <h4>CONTACT US</h4>
          <h2>Reach out for a new project or just say hello</h2>
          <main className="project" data-aos={"fade-up"}>
            <form>
              <h5>SEND US A MESSAGE</h5>
              <input
                type="text"
                placeholder="Your Name"
                className="inp"
              ></input>
              <input
                type="email"
                placeholder="Your Email"
                className="inp"
                required
              ></input>
              <input type="text" placeholder="Subject" className="inp"></input>
              <textarea
                placeholder="Your Message"
                className="inp"
                required
              ></textarea>
              <button type="submit" className="btn submit">
                submit
              </button>
            </form>
            <aside>
              <h5>CONTACT INFO</h5>
              <article>
                <h4>Where to Find Us</h4>
                <p className="sub-parag">
                  1600 Amphitheatre Parkway <br />
                  Mountain View,
                  <br /> CA 94043 US
                </p>
              </article>
              <article>
                <h4>Email Us At</h4>
                <p className="sub-parag">
                  contact@glintsite.com <br />
                  info@glintsite.com
                </p>
              </article>
              <article>
                <h4>Call Us At</h4>
                <p className="sub-parag">
                  Phone: (+63) 555 1212
                  <br />
                  Mobile: (+63) 555 0100
                  <br />
                  Fax: (+63) 555 0101
                </p>
              </article>
              <Social></Social>
            </aside>
          </main>
        </div>
      </section>
    </>
  );
};

const Social = () => {
  return (
    <>
      <ul className="social-links social-inside">
        {social.map((e, i) => {
          return (
            <>
              <li key={id.getTime()}>
                <a href={e.link}>
                  <FontAwesomeIcon
                    icon={e.icon}
                    className="icon"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        <div className="cont">
          <article>
            <img src={require("./../imgs/green-logo.webp").default}></img>
            <p className="sub-parag">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </article>
          <article>
            <h5>Get Notified</h5>
            <p className="sub-parag">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>

            <div className="notify">
              <span className="icon-span">
                <FontAwesomeIcon
                  className="icon"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </span>
              <input
                type="email"
                className="inp"
                placeholder="Emai Address"
              ></input>
              <button className="btn submit">Subscribe</button>
            </div>
          </article>
        </div>
        <section className="Copyright">
          © Copyright Glint 2022 | Site Created By <span>Khaled Fahmy</span>
        </section>
      </footer>
    </>
  );
};

export default App;
