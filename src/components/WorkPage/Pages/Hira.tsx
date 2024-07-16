import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface HiraProps {
  item: WorkContentItem;
}

const Hira: React.FC<HiraProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        건강보험심사평가원 도서관 웹 사이트 입니다. 2023년 하반기 해당 프로젝트를 맡았던 당시 동시에 인력부족임에도 
        큰 프로젝트들을 맡게되어 작업하기에 힘든 환경에 놓여있었습니다. 그렇지만 어느 순간 경험이 쌓인만큼 다른 큰 프로젝트를 
        하고 있었음에도 웹접근성을 중점으로 사용자들이 편하게 서비스를 이용할 수 있게끔 프로젝트를 완수하였습니다.
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

export default Hira
