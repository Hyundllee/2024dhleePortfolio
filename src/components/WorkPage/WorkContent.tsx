import React from 'react';
import {WorkContentItem} from '../WorkPage/Pages/types/types'
import Catholic from './Pages/Catholic';
import Portfoliopage from './Pages/Portfoliopage';
import Knou from './Pages/Knou';
import U from './Pages/U';
import Kepco from './Pages/Kepco';
import Gachon from './Pages/Gachon';
import Hira from './Pages/Hira';
import Yu from './Pages/Yu';


interface WorkContentProps {
  item: WorkContentItem;
}

const WorkContent: React.FC<WorkContentProps> = ({ item }) => {
  const renderContent = () => {
    switch (item.id) {
      case 'portfolio':
        return (
          <Portfoliopage item = {item}/>
        );
      case 'knou':
        return (
          <Knou item = {item}/>
        );
      case 'u':
        return (
          <U item = {item}/>
        );
      case 'kepco':
        return (
          <Kepco item = {item}/>
        );
      case 'gachon':
        return (
          <Gachon item = {item}/>
        );
      case 'hira':
        return (
          <Hira item = {item}/>
        );
      case 'yu':
        return (
          <Yu item = {item}/>
        );
      case 'catholic':
        return (
          <Catholic item = {item}/>
        );  
      default:
        return <p>기본 설명입니다.</p>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default WorkContent;
