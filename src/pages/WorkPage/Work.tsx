import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/scss/pages/work.scss';
import WorkContent from '../../components/WorkPage/WorkContent';
import { WorkContentItem } from '../../components/WorkPage/Pages/types/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

interface WorkProps {
  portfolioList: WorkContentItem[];
}

const Work: React.FC<WorkProps> = ({ portfolioList }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const item = id
    ? portfolioList.find(
        (p) =>
          p.id === id || p.id === parseInt(id)
      )
    : undefined;

  if (!item) {
    return <div className='workPage'>항목을 찾을 수 없습니다.</div>;
  }

  const handlePrev = () => {
    const currentIndex = portfolioList.findIndex(p => p.id === item.id);
    const prevIndex = (currentIndex - 1 + portfolioList.length) % portfolioList.length;
    const prevItem = portfolioList[prevIndex];
    navigate(`/work/${prevItem.id}`);
  };

  const handleNext = () => {
    const currentIndex = portfolioList.findIndex(p => p.id === item.id);
    const nextIndex = (currentIndex + 1) % portfolioList.length;
    const nextItem = portfolioList[nextIndex];
    navigate(`/work/${nextItem.id}`);
  };

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    navigate('/');
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className='workPage' onClick={handleOutsideClick}>
      <div className='modalW'>
        <div className='modal'>
          <div className='modalThumImg'>
            <img src={item.imgSrc} alt={`${item.title} 썸네일 이미지입니다.`} />
          </div>
          <div className='titleBox'>
            <h2>{item.title} <span className='period'>{item.period}</span> </h2>
            <a
              href={item.link}
              target="_blank"
              title={item.title}
              className={`view ${item.interior ? 'Interior' : ''}`}
            >
              {item.interior ? "Interior Open" : (
                <>
                  View <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </a>
          </div>
          <div className='workContent'>
            <WorkContent item={item} />
          </div>
          <div className='tablet'>
            <button className='arrow left' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button className='arrow right' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button type='button' className='modalClose' onClick={handleClose}><FontAwesomeIcon icon={faTimes}/></button>
          </div>
        </div>
          <div className='desk'>
            <button className='arrow left' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button className='arrow right' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button type='button' className='modalClose' onClick={handleClose}><FontAwesomeIcon icon={faTimes}/></button>
          </div>
      </div>
    </div>
  );
};

export default Work;
