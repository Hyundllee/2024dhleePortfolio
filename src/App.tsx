import React, { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/MainPage/Main';
import Work from './pages/WorkPage/Work';

const App: React.FC = () => {
  const [portfolioList] = useState([
    { id: 'portfolio', period:"2024.07 - 2024.07 (1人)", imgSrc: "/portfolio2024/src/assets/images/thumImg_portfolio.png", title: "나만의 포트폴리오웹",link: "/"},
    { id: 'knou', period:"2022.12 - 2023.03 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_knou.png", title: "방송통신대학교 중앙도서관", link: "https://library.knou.ac.kr/#main1" },
    { id: 'u', period:"2023.10 - 2024.01 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_u.png", title: "대전공공 통합 도서관",  link: "https://www.u-library.kr/"},
    { id: 'kepco', period:"2023.07 - 2023.12 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_kepco.png", title: "한국전력공사 도서관" , link: "https://library.kepco.co.kr/main" },
    { id: 'gachon', period:"2023.11 - 2024.01 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_gachon.png", title: "가천대학교 의학도서관", link: "https://medilib.gachon.ac.kr/"},
    { id: 'hira', period:"2023.11 - 2024.01 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_hira.png", title: "건강보험심사평가원 도서관", link: "https://library.hira.or.kr/" },
    { id: 'yu', period:"2023.12 - 2024.01 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_yu.png", title: "영남대학교 중앙도서관", link: "https://libs.yu.ac.kr/" },
    { id: 'catholic', period:"2021.09 - 2021.12 (1人)" , imgSrc: "/portfolio2024/src/assets/images/thumImg_catholic.png", title: "가톨릭대학교 중앙도서관" , link: "https://library.catholic.ac.kr//"},
  ]);

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter basename='portfolio2024'>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main portfolioList={portfolioList} />}>
            <Route path="work/:id" element={<Work portfolioList={portfolioList} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
