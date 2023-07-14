import React from 'react';
import { useSpring, animated } from 'react-spring';

import IQOptionArticle from './IQOptionArticle';
import TradingPlanArticle from './TradingPlanArticle';
import Graficos from '../images/graficos.webp';

const LandingPage = () => {
  const bannerAnimation = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
  });

  const navbarAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div className="bg-gray-500 min-h-screen p-4 flex flex-col items-center justify-center">
      <animated.div
        className="bg-black text-white text-center py-12 rounded-lg shadow-lg mb-4 w-full"
        style={bannerAnimation}
      >
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Zen Traders</h1>
          <p className="text-lg">Bienvenido a un mejor trading.</p>
        </div>
      </animated.div>

      <animated.nav
        className="bg-gray-200 text-gray-800 shadow-lg fixed top-0 left-0 right-0 z-10 mb-4"
        style={navbarAnimation}
      >
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <ul className="flex space-x-4">
            <li className="text-lg">
              <a href="#section1" className="hover:text-blue-500">SEA RENTABLE</a>
            </li>
            <li className="text-lg">
              <a href="#section2" className="hover:text-blue-500">PLAN DE TRADING</a>
            </li>
            <li className="text-lg">
              <a href="#section3" className="hover:text-blue-500">IQ OPTION</a>
            </li>
          </ul>
        </div>
      </animated.nav>

      <div id="section1" className="w-full my-5 bg-gray-300 p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
      <img src={Graficos} alt="Mi Imagen" />
      </div>
      <div id="section2" className="w-full my-5 bg-white rounded-lg shadow-md p-6">
        <TradingPlanArticle />
      </div>
      <div id="section3" className="w-full my-5 bg-white rounded-lg shadow-md p-6">
        <IQOptionArticle />
      </div>
    </div>
  );
};

export default LandingPage;
