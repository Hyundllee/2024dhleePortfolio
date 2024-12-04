import { useEffect, useRef } from 'react';
import '../assets/scss/components/footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className='inner'>
        <div className='footerTop'>
          <h2 className='h2tit highlightFont'>CONTACT</h2>
          <div className="highlight_circle">
            <p>성공적인 프로젝트를 위한 <br/>신뢰 있는 사람을 찾고 계신가요?</p>
          </div>
          <div className='footerMid'>
            <p>언제든지 아래 주소로 연락주시면 최대한 빠르게 연락드리겠습니다. <br/>
            개발과 연관된 질문이 아니어도 궁금한 점이 있다면 편하게 연락주세요!</p>
            <div className='contact'>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faPaperPlane} />.Mail</span>
                  <a href="mailto:azazs0000@naver.com">azazs0000@naver.com</a>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faPhoneVolume} />.Tel</span>
                  <a href="tel:010-5813-1251">010 - 5813 - 1251</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;