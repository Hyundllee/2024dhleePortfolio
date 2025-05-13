import React from "react";
import { WorkContentItem } from "./types/types";

interface PortfoliopageProps {
	item: WorkContentItem;
}

const NiceBizinfo: React.FC<PortfoliopageProps> = () => (
	<div className="modalContent">
		<div className="introText">
			<p>
				기업 관련 분석 보고서, 재무제표, 기업 신용 등 사업자 관련 정보를 손쉽게 검색하고 열람할 수 있도록 하며,
				보고서 구매 서비스를 일원화하여 제공합니다. 최신 UI/UX 트렌드를 반영한 웹사이트를 구축함으로써 사용자의
				구매 경험을 향상시키고, 이를 통해 가치를 창출하여 클라이언트에게 효과적인 서비스를 제공하는 것을 목표로
				합니다.
			</p>
		</div>
		<p className="causeText">* 프로젝트 보안상 코드공개가 어려운 점 양해부탁드립니다.</p>
		<div className="characteristic content">
			<h3 className="contentTit">특징</h3>
			<ul className="listStyle1">
				<li>
					Quasar 프레임워크 채택
					<ul className="listStyle2">
						<li>
							프로젝트 인원 중 화면단에 대한 작업이 가능한 사람이 혼자였기 때문에 모든 페이지의
							화면관리구축을 혼자서 진행하였습니다.
						</li>
					</ul>
				</li>
				<li>
					효과적인 페이지 관리를 위한 React Router 활용
					<ul className="listStyle2">
						<li>전체 페이지 관리를 위한 Router 관리</li>
						<li>올바른 RESTful API 구조에 맞게 Router 설정에 노력을 기울임</li>
						<li>
							해당 페이지의 데이터에 따라 Router 페이지 전환시 일관된 데이터가 들어올 수 있도록 탄탄한
							코드작업에 노력을 기울임
						</li>
					</ul>
				</li>
				<li>
					공통 UI 컴포넌트 모듈화 관리
					<ul className="listStyle2">
						<li>
							반복 작업을 최대한 줄이기 위해서 테이블,팝업,검색영역 등 최소한의 컴포넌트 형태로 컴포넌트
							설계{" "}
						</li>
						<li>단일화된 컴포넌트로 서로 다른 페이지의 props 데이터 값에 따른 컴포넌트 구성</li>
					</ul>
				</li>
				<li>
					Scss를 활용한 컴포넌트 모듈화
					<ul className="listStyle2">
						<li>반복되는 css 코드를 최소한으로 줄이는데에 노력을 기울임</li>
					</ul>
				</li>
			</ul>
		</div>
		<div className="skill content">
			<h3 className="contentTit">사용된 기술</h3>
			<ul className="skillTree">
				<li>Nuxt3</li>
				<li>Quasar</li>
				<li>TypeScript</li>
				<li>Scss</li>
			</ul>
		</div>
		<div className="content">
			<h3 className="contentTit">프로젝트 후기</h3>
			<div className="reviewBox">
				<p>
					좀 더 넓은 시야와 폭넓은 경험을 쌓고 싶어 거리가 멀었음에도 자발적으로 지원하게된 금융권
					프로젝트이다.
					<br />
					해당 프로젝트의 투입되었을때 모든것이 낯설었고 처음 접해보는 환경과 처음 경험해본 vue3
					프로젝트였지만 기존에 react에 대한 이해도가 있었기에 적응하는데 크게 오래걸리진 않았다.
					<br /> 어려운 점을 꼽자면 철저한 보안으로 외부망에 대한 규제가 컷었기에 힘든 점도 있었지만 어떤
					환경에서도 포기하지 않고 꾸준하게 해당 문제를 해결해 나아갈 의지만 있다면 앞으로 나아갈 수 있겠다는
					자신감을 갖게 되었으며, 이 프로젝트에 참여함으로서 기술적인 부분의 발전도 발전이지만 유능한
					동료분들을 만나 문제를 위한 끊임없는 소통을 통해서 다른 환경에서의 협업능력과 의사소통의 중요성도
					다시금 깨닫게 되었던 얻은 것들이 정말 많았던 프로젝트였다.
				</p>
			</div>
		</div>
	</div>
);

export default NiceBizinfo;
