import React, { useState } from 'react';
import MaintenanceItem from './Experience/MaintenanceItem';

const maintenanceData = [
  {
    title: "숙명여자대학교",
    details: [
      "메인페이지 열람실 좌석현황 반응형 텍스트 간격 및 사이즈 조정",
      "테이블 툴팁 추가"
    ]
  },
  {
    title: "우석대학교",
    details: [
      "(학술DB/전자저널) 국외 탭 전주/진천(국문/영문/베트남/우즈벡) 리스트 추가 및 수정"
    ]
  },
  {
    title: "홍익대학교",
    details: [
      "메인페이지 배너 섹션 롤링형태로 변경 html,css,script 추가"
    ]
  },
  {
    title: "가톨릭대 성심교정",
    details: [
      "메인 페이지 베너 부분 더보기 아이콘 추가"
    ]
  },
  {
    title: "가톨릭대 성의교정",
    details: [
      "메인 슬라이드 배너 섹션 정지/시작 dots 추가"
    ]
  },
  {
    title: "삼육대학교",
    details: [
      "자료구입신청 페이지 이용안내 테이블 추가"
    ]
  },
  {
    title: "광주대학교",
    details: [
      "국내학술 DB / OA 신규페이지 테이블 코딩",
      "국내학술DB 수정 및 추가 및 송부"
    ]
  },
  {
    title: "아산의학도서관",
    details: [
      "main,sub 반응형 푸터 sns 아이콘 추가"
    ]
  },
  {
    title: "단국대학교",
    details: [
      "메인페이지 열람실 좌석현황 화면 틀어짐 조절",
      "메인 페이지 banner 변경",
      "조직및직원 페이지 table 변경 작업",
      "규정 페이지 table 변경 및 서식 버튼 추가 생성"
    ]
  },
  {
    title: "경성대학교 웹표준기반전저도서관시스템",
    details: [
      "조직도 ＇출판부＇ 삭제로 인한 화면 틀어짐 수정"
    ]
  },
  {
    title: "순천향대학교",
    details: [
      "메인 페이지 베너 이미지 추가 및 css 수정"
    ]
  },
  {
    title: "서울시립대학교",
    details: [
      "메인 배너 반응형시 이미지 찌그러지는 현상 css 수정"
    ]
  },
  {
    title: "동명대학교",
    details: [
      "Turnitin(턴잇인) 신규 페이지 퍼블리싱",
      "메인페이지 검색어 tab 부분 css 조정"
    ]
  },
  {
    title: "동국대학교",
    details: [
      "이용안내 이미지 수정 및 텍스트 수정"
    ]
  },
  {
    title: "삼성서울병원",
    details: [
      "이용안내 신규페이지 2페이지 퍼블리싱 (국내,국외 가이드라인 페이지)",
      "E-journal 페이지 테이블 표 간격 조정",
      "테이블 틀어짐 수정",
      "테이블 레이아웃 텍스트 늘어남에 따른 테이블 길이 조절",
      "공지사항 레이아웃 틀어짐 수정"
    ]
  },
  {
    title: "인권도서관 인권자료관리시스템",
    details: [
      "개인정보처리방침 리뉴얼 퍼블리싱",
      "개인정보처리방침 테이블 간격 조정 & 텍스트 조정"
    ]
  },
  {
    title: "서강대학교",
    details: [
      "신규 페이지 퍼블리싱 라파엘 라이브 스튜디오 (촬영스튜디오, 편집실) 이용안내"
    ]
  },
  {
    title: "연세대학교 통합형 전자도서관",
    details: [
      "4F 평면도 이미지 수정 및 텍스트 변경",
      "학술정보교육실 신규 html 페이지 퍼블리싱"
    ]
  },
  {
    title: "국민건강보험공단",
    details: [
      "메인페이지 푸터 개인정보처리방침 메뉴 추가"
    ]
  },
  {
    title: "KDI국제정책대학원",
    details: [
      "전자도서이용안내페이지 테이블 퍼블리싱",
      "테이블 반응형 퍼블리싱"
    ]
  },
  {
    title: "충남대학교",
    details: [
      "메인 베너 이미지 자동 롤링 전환 변경 퍼블리싱",
      "메인 2번 섹션 공지사항 부분 tab 형식의 레이아웃 컨텐츠로 변경 html,css,script 추가",
      "롤링 베너부분 디자인 변경 및 퍼블리싱"
    ]
  },
  {
    title: "한국해양대학교",
    details: [
      "게시판  이미지 첨부관련 이슈 (업로드 시) 스크립트 수정"
    ]
  },
  {
    title: "이천시 공공도서관",
    details: [
      "구독형 전자책 html 페이지 퍼블리싱",
      "구독형 전자책 페이지 레이아웃 틀어짐 수정"
    ]
  },
  {
    title: "한국국제협력단(KOICA)",
    details: [
      "메인 베너 riss 로고 이미지 변경"
    ]
  },
  {
    title: "한국전력공사",
    details: [
      "회원가입약관 텍스트 간격 조정 및 전체동의 스크립트 생성"
    ]
  },
  {
    title: "선문대학교",
    details: [
      "메인 페이지 메뉴 틀어짐 css 수정"
    ]
  },
  {
    title: "대전시 유성구 관평도서관",
    details: [
      "사이버도서관,작은도서관 메인 하단 배너 변경",
      "유성구 통합도서관 , 대전사이버도서관 메인 링크 페이지 퍼블리싱",
      "메인링크페이지 디자인 수정 변경적용"
    ]
  },
  {
    title: "연세대학교 통합형 전자도서관",
    details: [
      "도서관 컨시어지 서비스 신규 이용안내 페이지 퍼블리싱"
    ]
  },
  {
    title: "동신대학교",
    details: [
      "메인페이지 이용시간안내 간격 수정",
      "메인페이지 quick menu 간격 및 디자인 css 수정"
    ]
  },
  {
    title: "경성대학교 웹표준기반전저도서관시스템",
    details: [
      "이용안내 페이지 테이블 간격 조정"
    ]
  },
  {
    title: "LG화학 연구소",
    details: [
      "메인,서브 전체 색상 수정 작업",
      "전체페이지 전체 색상 및 이미지 색상 변경 적용",
      "이미지 컬러값 변경",
      "시설 배치도 및 이미지 수정",
      "앱화면 main visual 이미지 교체",
      "이용안내 텍스트 추가 및 레이아웃 수정"
    ]
  },
  {
    title: "대구가톨릭대학교",
    details: [
      "이용안내 페이지 수정 (동문회원, 미디어창작실, 신입생이용교육, 신청조회 이용안내, 열람좌석, 원문복사, 일반회원, 임시출입증, 책과 친구하기, 학술db이용교육, 행사장)",
      "층별안내, 시설이용, 도서관 이용시간 페이지 이미지 추가 및 html 수정 table 레이아웃 수정",
      "아이콘 추가요청 퍼블리싱"
    ]
  },
  {
    title: "한국국제협력단(KOICA)",
    details: [
      "header 디자인 및 header 간격 위치 수정"
    ]
  },
  {
    title: "동양미래대학",
    details: [
      "통합검색페이지 반응형 레이아웃 수정 및 텍스트 및 폰트사이즈 틀어짐 수정"
    ]
  },
  {
    title: "한글박물관",
    details: [
      "header 상단 메뉴 height 조절"
    ]
  },
  {
    title: "연세대학교 통합형 전자도서관",
    details: [
      "주제별브라우저 통합검색 페이지 전체 디자인 및 html,css,script 리뉴얼 퍼블리싱",
      "통합검색페이지 레이아웃 수정 및 텍스트 뒤틀림 css 수정"
    ]
  },
  {
    title: "부산가톨릭대학교",
    details: [
      "교재현황 페이지 검색어 영역 z-index 조정"
    ]
  },
  {
    title: "인천글로벌캠퍼스",
    details: [
      "메인페이지 아이콘 사이즈 조절"
    ]
  },
  {
    title: "인권도서관 인권자료관리시스템",
    details: [
      "웹접근성 개선작업",
      "국가인권위원회 인권도서관-1차 부적합 웹접근성 수정",
      "국가인권위원회 인권도서관-2차 부적합 웹접근성 수정"
    ]
  }
];

const projectData1 = [
  { name: "체인지의원-체인지클리닉", link: "http://changeclinic.co.kr/change/" },
  { name: "록야(주)", link: "http://www.rokya.co.kr/" },
  { name: "윈앤위너스 법률사무소", link: "http://winnwinners.com/" },
  { name: "사브와", link: "" },
  { name: "건강한지", link: "" }
];

const projectData2 = [
  { name: "한국방송통신대학교 (국문,영문,중문,일문)", link: "https://library.knou.ac.kr/" },
  { name: "한국전력공사 전자도서관 시스템 고도화", link: "https://library.kepco.co.kr/main" },
  { name: "대전 전자도서관 고도화 용역", link: "https://www.u-library.kr/" },
  { name: "가천대학교 메디컬 (국문,영문)", link: "https://medilib.gachon.ac.kr/" },
  { name: "건강보험심사평가원 2023년 HIRA 전자도서관", link: "https://library.hira.or.kr/" },
  { name: "영남대학교 도서관 (중앙,의학)", link: "https://libs.yu.ac.kr/" },
  { name: "케냐 KAIST EDCF 사업", link: "", internal: true },
  { name: "서울대학교 규장각 2023년도 고문헌 통합관리시스템", link: "", internal: true },
  { name: "온라인평가 클라우드 SaaS 서비스", link: "https://www.neotest-plus.co.kr/" },
  { name: "KERIS WILL 보급사업", link: "", internal: true },
  { name: "주제가이드 솔루션 연구개발", link: "", internal: true },
  { name: "카톨릭대학교 중앙도서관 (영문,중문)", link: "https://library.catholic.ac.kr/" },
  { name: "한국교육과정평가원 학업성취도 컴퓨터 기반 평가시스템 구축(2차연도)", link: "https://inaea.kice.re.kr/siteMain/index.do#main1" },
  { name: "국방 전자도서관 (공군,해군,해병대)", link: "https://nddl.mil.kr/PT/index" },
  { name: "동양 미래 대학교", link: "https://lib.dongyang.ac.kr/" },
  { name: "베트남 국가기술자격 정보시스템 구축 1단계", link: "", internal: true },
  { name: "국회도서관 융복합서비스 데이터셋 구축사업", link: "", internal: true }
];

const projectData3 = [
  { name: "오픈소스 관리 포털 내부 시스템 구축", link: "", internal: true  },
];

const Experience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='Experience'>
      <div className='inner'>
        <div className='h2Sticky'>
          <h2 className='h2tit highlightFont'>EXPERIENCE</h2>
        </div>
        <div className='experienSticky'>
          <div className='stickyBox num1'>
            <div className='experienceBox'>
              <div className='boxInner'>
                <div className='boxTit'>
                  <h3><span className='companyN'>(주)프로젝트 독</span> <span className='year'>2021.01 - 2021.07</span></h3>
                  <p>개발팀 / 사원</p>
                </div>
                <div className='project'>
                  <h3>프로젝트</h3>
                  <ul className='projectList'>
                    {projectData1.map((project, index) => (
                      <li key={index}>
                        <span>{project.name}</span>
                        {project.link && <a href={project.link} target='_blank' className='siteView'><span>바로가기</span></a>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className='stickyBox num2'>
            <div className='experienceBox'>
                <div className='boxInner'>
                  <div className='boxTit'>
                    <h3><span className='companyN'>(주)퓨쳐누리</span> <span className='year'>2021.09 - 2024.06</span></h3>
                    <p>개발팀 / 대리</p>
                  </div>
                  <div className='projectCon'>
                    <div className='project'>
                      <h3>프로젝트 <span>( KOSA 인증완료 )</span></h3>
                      <ul className='projectList'>
                        {projectData2.map((project, index) => (
                          <li key={index}>
                            <span>{project.name}</span>
                            {project.link && <a href={project.link} target='_blank' className='siteView'><span>바로가기</span></a>}
                            {project.internal && <span className='Internal'>내부오픈</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='project'>
                      <h3>유지보수</h3>
                      <ul className='projectList'>
                        {maintenanceData.map((item, index) => (
                          <MaintenanceItem 
                            key={index} 
                            title={item.title} 
                            details={item.details} 
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)} 
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className='stickyBox num3'>
            <div className='experienceBox'>
              <div className='boxInner'>
                <div className='boxTit'>
                  <h3><span className='companyN'>NH 농협은행</span> <span className='year'>2024.07 - 2024.11</span></h3>
                  <p>IT품질관리팀 / 선임</p>
                </div>
                <div className='project'>
                  <h3>프로젝트 <span>( KOSA 인증가능 )</span> </h3>
                  <ul className='projectList'>
                    {projectData3.map((project, index) => (
                      <li key={index}>
                        <span>{project.name}</span>
                        {project.link && <a href={project.link} target='_blank' className='siteView'><span>바로가기</span></a>}
                        {project.internal && <span className='Internal'>내부오픈</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
