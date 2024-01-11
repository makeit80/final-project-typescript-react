import React, {useEffect} from 'react';
import {googleLogin, kakaoLogin} from '../../api/auth';
import {supabase} from '../../api/supabase';

const Signin = () => {
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
    <>
      <form onSubmit={e => e.preventDefault()}>
        <p>이메일</p>
        <input placeholder="이메일 형식으로 입력해주세요"></input>
        <p>비밀번호</p>
        <input type="password" placeholder="비밀번호를 6자 이상으로 입력해주세요" minLength={6}></input>
        <div>
          <button type="submit">로그인</button>
          <button onClick={googleLogin}>Google로 로그인하기</button>
          <button onClick={kakaoLogin}>kakao로 로그인하기</button>
          <button>회원가입</button>
        </div>
      </form>
    </>
  );
};

export default Signin;
