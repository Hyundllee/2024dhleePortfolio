import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface UProps {
  item: WorkContentItem;
}

const U: React.FC<UProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        대전광역시의 모든 공공 도서관 정보들을 쉽게 볼 수 있게끔 서비스를 제공합니다. <br/>
        메인페이지를 클라이언트께서 풀페이지 방식을 선호하셔서 풀페이지 방식으로 제작되었으며, AI 추천도서 등 
        대전광역시의 모든 도서관 정보들을 쉽고 빠르게 검색할 수 있다는 장점이 있는 대규모 공공 사이트입니다.
      </p>
    </div>
    <div className='characteristic content'>
      <h3 className='contentTit'>특징</h3>
      <ul className='listStyle1'>
        <li>모든 화면단 100% 개인수행</li>
        <li>
          메인 페이지의 지도 서비스
          <ul className='listStyle2'>
            <li>
              도서관 별 지도 이미지와 HTML의 data 속성을 활용하여 행정구 별 도서관의 위치와 휴일정보를<br/>
              한눈에 보기쉽게끔 설계하였습니다.
            </li>
          </ul>
        </li>
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
        <li>
          연령별 인기도서
          <ul className='listStyle2'>
            <li>연령별로 인기가 많은 도서들을 표시하게끔 표현 </li>
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

export default U
