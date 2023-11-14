// Home.tsx
import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
import Card from '../components/Cards/status';
import MapComponent from '../components/apis/kakao/map';
import PriceCard from '../components/Cards/price';
import MyResponsiveLine from '../components/Cards/graph';
import App from '../components/antd/pagenation';
import { Button } from 'antd';

const Home = () => {
  const cardData = [
    { title: '누적 충전량', content: 'card1', unit: 'kWh', imageUrl: 'icons/누적 충전량.svg' },
    { title: '누적 요금', content: 'card2', unit: '원', imageUrl: 'icons/누적 요금.svg' },
    { title: '보유 충전기', content: 'card3', unit: '개', imageUrl: 'icons/보유 충전기.svg' },
    { title: '가동 충전기', content: 'card4', unit: '개', imageUrl: 'icons/가동 충전기.svg' },
    { title: '대기 충전기', content: 'card5', unit: '개', imageUrl: 'icons/대기 충전기.svg' },
    { title: '고장 충전기', content: 'card6', unit: '개', imageUrl: 'icons/고장 충전기.svg' },
  ];
  const graphData = [
    {
      id: 'japan',
      color: 'hsl(102, 70%, 50%)',
      data: [
        {
          x: '11.7',
          y: 400,
        },
        {
          x: '11.8',
          y: 410,
        },
        {
          x: '11.9',
          y: 413,
        },
        {
          x: '11.10',
          y: 402,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      <Page>
        <div
          style={{
            width: '1370px',
            height: 'auto',
            // border: '1px solid #dfe1e5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flexWrap: 'wrap',
            backgroundColor: 'white',
            marginTop: 20,
          }}
        >
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} unit={card.unit} imageUrl={card.imageUrl} />
          ))}
        </div>
        <div
          style={{
            width: '1370px',
            height: '600px',
            // border: '1px solid #dfe1e5',
            padding: '10px',
            display: 'flex',
            borderRadius: 10,
            marginTop: 20,
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <MapComponent></MapComponent>
          <div style={{ width: '900px', height: '500px' }}>
            <PriceCard></PriceCard>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>
                <p style={{ display: 'flex', justifyContent: 'left', paddingLeft: '80px' }}>요금량 통계</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button>일</Button>
                  <Button>주</Button>
                  <Button>월</Button>
                  <Button>년</Button>
                </div>
                <MyResponsiveLine graphData={graphData}></MyResponsiveLine>
              </div>
              <div>
                <p style={{ display: 'flex', justifyContent: 'left', paddingLeft: '80px' }}>충전량 통계</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button>일</Button>
                  <Button>주</Button>
                  <Button>월</Button>
                  <Button>년</Button>
                </div>
                <MyResponsiveLine graphData={graphData}></MyResponsiveLine>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '1370px',
            height: '400px',
            // border: '1px solid #dfe1e5',
            borderRadius: 10,
            display: 'flex',
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div style={{ width: '700px', margin: '10px' }}>
            <p>충전기 사용 이력</p>
            <App></App>
          </div>
          <div style={{ width: '700px', margin: '10px' }}>
            <p>고장 이력</p>
            <App></App>
          </div>
        </div>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
