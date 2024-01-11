import React, {useEffect} from 'react';
import {supabase} from '../api/supabase';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // user 정보 테스트
  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      console.log(user);
    };
    userInfo();
  }, []);

  // 로그아웃
  const logOut = async () => {
    const {error} = await supabase.auth.signOut();
    alert('로그아웃 되었습니다');
    if (error) console.log('error', error);
    navigate('/');
  };

  return (
    //임시 로그아웃버튼
    <>
      <button onClick={logOut}>로그아웃</button>
    </>
  );
};

export default Home;
