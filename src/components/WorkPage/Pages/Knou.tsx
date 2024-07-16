import React from 'react'
import {WorkContentItem} from '../Pages/types/types'

interface KnouProps {
  item: WorkContentItem;
}

const Knou: React.FC<KnouProps> = () => (
  <div className='modalContent'>
    <div className='introText'>
      <p>
        다국어로 운영되고 있는 서비스입니다. 국문,영문,중문,일문 4개 국어로 이루어져 있으며 페이지 수 또한 많아 프로젝트 당시 
        수 많은 페이지들의 스타일들을 혼자서 모듈화 시켜야 했습니다. <br/>
        클라이언트께서 풀페이지 형식의 메인페이지를 원하셨고 한 섹션에 높이가 가득차야 하기 때문에 컨텐츠가 많아지면 작은 모니터에서의 
        가독성이 떨어지는 부분이 있습니다. 해당 사이트는 섹션당 컨텐츠도 많아 그 부분을 신경쓰며 작업하였습니다.
      </p>
    </div>
    <div className='characteristic content'>
      <h3 className='contentTit'>특징</h3>
      <ul className='listStyle1'>
        <li>다국어의 모든 화면단 100% 개인수행</li>
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
          국문,영문,중문,일문의 다개국어 서비스
        </li>
        <li>
          지역대학 도서관안내 페이지
          <ul className='listStyle2'>
            <li>페이지 수가 많은만큼 탭형식의 기능으로 페이지를 좀 더 편의성있게 보여줄려고 노력 </li>
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

export default Knou
