import React from 'react';

interface MaintenanceItemProps {
  title: string;
  details: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const MaintenanceItem: React.FC<MaintenanceItemProps> = ({ title, details, isOpen, onToggle }) => {
  return (
    <li>
      <span>{title}</span>
      <button type='button' className='viewBtn' onClick={onToggle}>
        내용보기
      </button>
      {isOpen && (
        <div className='maintenanceDetails'>
        <div>
            <h4>{title}</h4>
            <button type='button' className='closeBtn' onClick={onToggle}>
            </button>
        </div>
          <ul className='list'>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MaintenanceItem;
