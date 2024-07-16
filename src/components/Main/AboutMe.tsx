import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";


const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <div className='inner'>
        <div className='aboutMe_con'>
          <div className='profile'>
              <img src="assets/images/profile.png" alt="프로필이미지"/>
          </div>
          <div className='aboutText'>
            <h2 className='h2tit'>About Me</h2>
            <div className='textBox'>
              <p>안녕하세요. 프론트엔드 개발자 이동현입니다.<br/>
                탄탄한 코드를 기반으로 사용자와 개발자 모두를 이어줄 수 있는<br/>
                단순하면서도 더할 나위 없는 웹 서비스를 만드는 것을 지향합니다.  
              </p>
              <p>
                UI 개발자로서 3년간 웹 에이전시와 자사 솔루션 실무를 기반으로 <br/> 
                대규모 웹 사이트, 다수의 공공 프로젝트 경험과 다양한 직군의 개발자들을 만나<br/>
                어떠한 환경에서도 적응할 수 있는 원활한 소통 능력을 갖추고 있습니다. <br/>
              </p>
              <p>프레임워크와 라이브러리를 적재적소에 활용하여 효율성을 극대화하고<br/>
                사용자들을 사로잡을 수 있도록 하는 일에 자부심을 갖고 개발해 나아갑니다.</p>
            </div>
            <a href="https://www.rallit.com/resumes/8233@azazs000/%EC%9D%B4%EB%8F%99%ED%98%84" target='_blank' className='aboutMore'><FontAwesomeIcon icon={faChevronCircleDown}/><span>자기소개 더보기</span></a>
          </div>
        </div>
        <div className='mySkill'>
              <div className='skillText'>
                <h2>
                  <span>MY</span>
                  <span>SKILL</span>
                </h2>
              </div>
              <div className='skillList'>
                  <p>WITH</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JAVASCRIPT</li>
                    <li>TYPESCRIPT</li>
                    <li>JQUERY</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                    <li>NEXT.JS</li>
                    <li>GIT</li>
                    <li>ECLIPSE</li>
                    <li>VSCODE</li>
                    <li>FIGMA</li>
                    <li>PHOTOSHOP</li>
                    <li>XD</li>
                    <li>NOTION</li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe
