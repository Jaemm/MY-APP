import styled from '@emotion/styled';

export const Layout = styled.section`
  // margin: 0 auto;
  // background-color: #f8fafb;
`;

export const ContentsWrapper = styled.div`
  max-width: 1800px;
  width: auto;
  margin: 0 180px;

  // background-color: #f8fafb;

  @media (max-width: 1680px) {
    width: 1200px;
  }

  @media (max-width: 1340px) {
    width: 100%;
    margin: 0 80px;
  }
`;
