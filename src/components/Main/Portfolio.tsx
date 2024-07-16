import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  portfolioList: { id: number | string; imgSrc: string; title: string }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioList }) => {
  useEffect(() => {
    const portfolioItems = document.querySelectorAll<HTMLLIElement>('.portfolioList ul li:nth-child(2n)');
    const header = document.querySelector<HTMLDivElement>('.Header');
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleAnimation = (matches: boolean) => {
      if (matches) {
        if (portfolioItems.length > 0) {
          gsap.fromTo(portfolioItems, {
            y: '0px'
          }, {
            y: '-100px',
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: '.portfolioList ul',
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1
            }
          });
        }
      }
    };

    const handleHeaderOpacity = (matches: boolean) => {
      if (header) {
        if (matches) {
          ScrollTrigger.create({
            trigger: '.portfolioList ul',
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => gsap.to(header, { opacity: 0, duration: 0.5 }),
            onLeave: () => gsap.to(header, { opacity: 1, duration: 0.5 }),
            onEnterBack: () => gsap.to(header, { opacity: 0, duration: 0.5 }),
            onLeaveBack: () => gsap.to(header, { opacity: 1, duration: 0.5 }),
          });
        } else {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          gsap.to(header, { opacity: 1, duration: 0.5 });
        }
      }
    };

    handleAnimation(mediaQuery.matches);
    handleHeaderOpacity(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => {
      handleAnimation(e.matches);
      handleHeaderOpacity(e.matches);
    });

    return () => {
      mediaQuery.removeEventListener("change", (e) => {
        handleAnimation(e.matches);
        handleHeaderOpacity(e.matches);
      });
    };
  }, []);
  
  const handleItemClick = () => {
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className='Portfolio'>
      <div className='inner'>
        <div className="portWrap">
          <div className="porfolioText">
            <h2>Portfolio<span></span></h2>
            <p>실무를 통해 사랑과 정성을 담은 결과물들입니다. <br/>
              또한 실무에서 경험하지 못한 부분들은 개인적으로 <br/> 학습해가며 부족한 부분을 메우려 계속 정진 중입니다.
            </p>
          </div>
          <div className="portfolioList">
            <ul>
              {portfolioList.map((item) => (
                <li key={item.id} onClick={handleItemClick}>
                  <Link to={`/work/${item.id}`}>
                    <div className='thumImg'>
                      <img src={item.imgSrc} alt={`${item.title} 썸네일 이미지입니다.`} />
                    </div>
                    <div className='thumTx'>
                      <p>{item.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
