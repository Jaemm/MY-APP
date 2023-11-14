import React from 'react';

const PriceCard = () => {
  return (
    <div style={{ display: 'flex', padding: '45px' }}>
      <div
        style={{
          width: '557px',
          height: '71px',
          border: '1px solid #dfe1e5',
          margin: '5px',
          padding: '30px',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'black',
          opacity: 0.8,
          color: 'white',
          boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>전국평균</p>
        <span style={{ display: 'flex' }}>
          <p>완속</p>
          <p>400</p>
          <p>원</p>
        </span>
        <span style={{ display: 'flex' }}>
          <p>급속</p>
          <p>500</p>
          <p>원</p>
        </span>
      </div>
      <div
        style={{
          width: '270px',
          height: '71px',
          border: '1px solid #dfe1e5',
          margin: '5px',
          padding: '30px',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'black',
          opacity: 0.8,
          color: 'white',
          boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>현 충전소</p>
        <span style={{ display: 'flex' }}>
          <p>450</p>
          <p>원</p>
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
