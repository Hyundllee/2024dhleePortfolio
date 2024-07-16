import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface YuProps {
  item: WorkContentItem;
}

const Yu: React.FC<YuProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        영남대학교 중앙도서관 웹 사이트 입니다. 중앙과 의학 두가지의 서비스로 구성돠어 있으며, 중앙과 의학 
        모두 화면단을 맡아 프로젝트를 완료하였습니다.<br/>의학도서관 또한 중앙도서관의 상단 메뉴에서 확인이 가능합니다.
      </p>
    </div>
    <div className='characteristic content'>
      <h3 className='contentTit'>특징</h3>
      <ul className='listStyle1'>
        <li>모든 화면단 100% 개인수행</li>
        <li>이용안내 페이지들의 모듈화 된 Css
          <ul className='listStyle2'>
            <li>
              디자이너와 협의하여 공통될 수 있는 컴포넌트 화면을 만들어 css 모듈화를 적용하였습니다.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className='skill content'>
      <h3 className='contentTit'>사용된 기술</h3>
      <ul className='skillTree'>
        <li>Javascript</li>
        <li>Jquery</li>
      </ul>
    </div>
  </div>
);

export default Yu
