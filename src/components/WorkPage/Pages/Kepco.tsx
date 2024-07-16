import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface KepcoProps {
  item: WorkContentItem;
}

const Kepco: React.FC<KepcoProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        한국전력공사의 도서관 반응형 웹 사이트 입니다. 내부와 외부 두가지로 이루어져있습니다.<br/>
        내부는 현재 내부 환경에서만 서비스하고 있으며 두 사이트 모두 한국전력공사 측에서 풀페이지 형식을<br/>
        선호하여 풀페이지 형식의 웹사이트로 구축하였습니다.
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
        <li>풀페이지 방식의 화면
          <ul className='listStyle2'>
            <li>스크롤 방식에 비해 섹션마다의 내용을 한눈에 보기 쉽습니다.</li>
            <li>스크롤에 비해 사용자의 눈길을 끌 수 있는 인터렉션의 장점이 있습니다.</li>
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

export default Kepco
