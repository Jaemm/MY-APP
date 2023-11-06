import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LogoWrapper, ButtonWrapper } from './style';
import { Layout, Button } from 'antd';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Weather from '../apis/weather';

const MainLogo = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: '로그아웃 성공',
    }).then(() => {
      router.push('/auth/login').then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <Layout>
      <LogoWrapper>
        <Link href="../">
          <a>
            <img src={'/images/FirstLogo.jpeg'} />
          </a>
        </Link>
        <Weather></Weather>
      </LogoWrapper>
      <ButtonWrapper>
        {isLoggedIn ? (
          <>
            <Link href="/auth/mypage">
              <Button>마이페이지</Button>
            </Link>
            <Button onClick={handleLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button>로그인</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>회원가입</Button>
            </Link>
          </>
        )}
      </ButtonWrapper>
    </Layout>
  );
};

export default MainLogo;
