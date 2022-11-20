import React, { useState, useEffect } from "react";
import "./styles.css";
import MenuIcon from "../svgs/Menu.jsx";
import CloseIcon from "../svgs/Close.jsx";
export const Navbar = (props) => {
  const children = props.children;
  let navItemstemp = [];
  children.map((child) => {
    // console.log(child);
    if (child.type == "ul") {
      child.props.children.map((childd) => {
        // console.log(childd.props);
        navItemstemp.push({
          redirect: childd.props.redirect,
          content: childd.props.children,
        });
      });
    }
  });
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navItems, setNavItems] = useState(navItemstemp);
  let navItemz = [];
  useEffect(() => {
    console.log(navItems);
  }, [navItems]);
  useEffect(() => {});
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
              {/* <a className='astyle1' href={navItems[0].redirect}>
                <li className='listyle'>{navItems[0].content}</li>
              </a> */}
              {navItems.map((item, id) => (
                <a className='astyle' href={item.redirect}>
                  <li className='listyle'>{item.content}</li>
                </a>
              ))}
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
              {navItems.map((item, id) => (
                <a className='astyle1' href={item.redirect}>
                  <div className='listyle2'>
                    <li onClick={() => setNav(false)} className='listyle3'>
                      {item.content}
                    </li>
                  </div>
                </a>
              ))}
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
