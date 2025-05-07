export default function Skill() {
  return (
    <div className='mySkill'>
        <div className="skillWrap">
        {/* <h3 className="skillTit">SKILL</h3> */}
        <h2 className='h2tit highlightFont'>SKILL</h2>
        <div className="skillflexBox">
            <div className="frontLang">
                <h4 className="skillTit">프론트엔드 언어</h4>
                <ul className="skillList">
                <li className="imgW html">
                    <img src="/assets/images/main/html.png" alt="스킬아이콘" />
                </li>
                <li className="imgW css">
                    <img src="/assets/images/main/css.png" alt="스킬아이콘" />
                </li>
                <li className="imgW js">
                    <img src="/assets/images/main/js.png" alt="스킬아이콘" />
                </li>
                <li className="imgW ts">
                    <img src="/assets/images/main/ts.png" alt="스킬아이콘" />
                </li>
                </ul>
            </div>
            <div className="felibframeWork">
            <h4 className="skillTit">라이브러리 / 프레임워크</h4>
                <ul className="skillList">
                    <li className="imgW vue iconbox">
                        <img src="/assets/images/main/vue.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW react iconbox">
                        <img src="/assets/images/main/react.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW quasar iconbox">
                        <img src="/assets/images/main/quasar.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW redux iconbox">
                        <img src="/assets/images/main/redux.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW jquery iconbox">
                        <img src="/assets/images/main/jquery.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW scss">
                        <img src="/assets/images/main/scss.png" alt="스킬아이콘" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="skillflexBox">
            <div className="backLang">
                <h4 className="skillTit">백엔드</h4>
                <ul className="skillList">
                    <li className="imgW nodejs">
                        <img src="/assets/images/main/nodejs.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW firebase">
                        <img src="/assets/images/main/firebase.png" alt="스킬아이콘" />
                    </li>
                </ul>
            </div>
            <div className="Auxiliary">
                <h4 className="skillTit">보조 도구</h4>
                <ul className="skillList">
                    <li className="imgW git">
                        <img src="/assets/images/main/git.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW eclipse">
                        <img src="/assets/images/main/eclipse.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW vscode">
                        <img src="/assets/images/main/vscode.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW figma">
                        <img src="/assets/images/main/figma.png" alt="스킬아이콘" />
                    </li>
                    {/* <li className="imgW Xd">
                        <img src="/assets/images/main/Xd.png" alt="스킬아이콘" />
                    </li> */}
                    <li className="imgW Photoshop">
                        <img src="/assets/images/main/Photoshop.png" alt="스킬아이콘" />
                    </li>
                    <li className="imgW notion">
                        <img src="/assets/images/main/notion.png" alt="스킬아이콘" />
                    </li>
                </ul>
            </div>
        </div>
        </div>
            {/* <div className='skillText'>
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
            </div> */}
    </div>
  )
}
