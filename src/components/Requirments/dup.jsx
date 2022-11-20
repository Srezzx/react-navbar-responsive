import React, { useState, useEffect } from "react";
import "./styles.css";
import MenuIcon from "../svgs/Menu";
import CloseIcon from "../svgs/Close";
export const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#FB2576");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  return (
    <div className='topcont'>
      {!nav ? (
        <div className={shadow ? `cont1` : `cont2 `}>
          <div style={{ margin: "0px", padding: "0px" }}>
            <ul style={{ listStyle: "none" }} className='cont3'>
              <a className='astyle1' href='/'>
                <li className='listyle'>Home</li>
              </a>
              <a className='astyle' href='/#about'>
                <li className='listyle'>About</li>
              </a>
              <a className='astyle' href='/#skills'>
                <li className='listyle'>Skills</li>
              </a>
              <a className='astyle' href='/#projects'>
                <li className='listyle'>Projects</li>
              </a>
              <a className='astyle' href='/#organizations'>
                <li className='listyle'>Organizations</li>
              </a>
              <a className='astyle' href='/#contact'>
                <li className='listyle'>Contact</li>
              </a>
            </ul>
            <div className='cont4' onClick={handleNav}>
              <MenuIcon color={"orange"} marginR={"40px"} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className={nav ? "cont5" : ""}>
        <div className={nav ? "cont6" : "cont7"}>
          <div>
            <div className='cont8'>
              <div>
                {/* <a href='/'>
                  <a>
                    </a>
                </a> */}
              </div>
              <div style={{ position: "relative" }}>
                <div className='cont9'></div>
                <div onClick={handleNav} className={`cont10`}>
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>

          <div className='cont11'>
            <ul
              style={{
                textTransform: "uppercase",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <a className='astyle1' href='/'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    Home
                  </li>
                </div>
              </a>
              <a className='astyle1' href='/#about'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    About
                  </li>
                </div>
              </a>
              <a className='astyle1' href='/#skills'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    Skills
                  </li>
                </div>
              </a>
              <a className='astyle1' href='/#projects'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    Projects
                  </li>
                </div>
              </a>
              <a className='astyle1' href='/#organizations'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    Organizations
                  </li>
                </div>
              </a>
              <a className='astyle1' href='/#contact'>
                <div className='listyle2'>
                  <li onClick={() => setNav(false)} className='listyle3'>
                    Contact
                  </li>
                </div>
              </a>
            </ul>
            <div style={{ paddingTop: "5rem" }}>
              <p className='cont12'>Lets Connect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
