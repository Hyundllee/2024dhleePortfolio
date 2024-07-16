import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface GachonProps {
  item: WorkContentItem;
}

const Gachon: React.FC<GachonProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        가천대학교 도서관 입니다. 가천대학교 중앙 / 메디컬 두 개의 홈페이지로 나뉘어져 있으며, 그 중 
        가천대학교 메디컬을 맡아 모든 화면단을 만들어 냈습니다. 클라이언트 측에서 풀페이지를 원하였으며,<br/>
        한 섹션당 정말 많은 컨텐츠를 요구하여 풀페이지 환경에서 표현하기가 까다로웠으나 그럼에도 불구하고 모든 화면에서 
        사용자들이 이용할 수 있도록 프로젝트를 완료하였습니다.
      </p>
    </div>
    <div className='characteristic content'>
      <h3 className='contentTit'>특징</h3>
      <ul className='listStyle1'>
        <li>모든 화면단 100% 개인수행</li>
        <li>메인페이지 검색바 탭메뉴 차별화 
        <ul className='listStyle2'>
            <li>
              클라이언트와 디자이너의 의도 요구사항대로 각 탭메뉴의 top값을 기준으로 고정되도록 설정
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

export default Gachon
