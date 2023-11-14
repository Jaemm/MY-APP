import React from 'react';

interface CardProps {
  title: string;
  content: string;
  unit: string;
  imageUrl: string;
}

const StatusCard: React.FC<CardProps> = ({ title, content, unit, imageUrl }) => {
  return (
    <div
      style={{
        width: '220px',
        height: '120px',
        // border: '1px solid #dfe1e5',
        margin: '5px',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ width: 100, textAlign: 'center' }}>
        <p>{title}</p>
        <p>
          {content}
          <span style={{ color: '#D9D9D9', fontSize: '13px' }}>{unit}</span>
        </p>
      </div>
      <img src={imageUrl} alt="icons" style={{ margin: 10 }}></img>
    </div>
  );
};

export default StatusCard;
