import React, {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import {logOut} from '../api/auth';

const Home = () => {
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

  return (
    //임시 로그아웃버튼
    <>
      <button onClick={logOut}>로그아웃</button>
    </>
  );
};

export default Home;
