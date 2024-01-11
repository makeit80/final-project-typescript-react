import React, { useEffect } from 'react'
import styled from 'styled-components'
import { supabase } from '../api/supabase'
import {useNavigate} from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('testTable').select('*');
        return data;
      } catch (error) {
        console.log('Error', error);
      }
    }
    const artistData = fetchData()
  })
  const myArtistTestData = ['나의 아티스트','나의 아티스트','나의 아티스트','나의 아티스트','나의 아티스트']
  const listTestData = ['르세라핌', '태연', '임재현', 'aespa', 'EXO', '박재정', '범진', '아이브', '정국', '임영웅', '너드커넥션', '이무진', '아이유', '제니', '악뮤', '제니', 'RIIZE', '우디', '여자아이들', 'QWER']

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
    <StMainWrapper>
      {/* // Banner */}
      <StBannerDiv>

      </StBannerDiv>

      {/* // My Artist */}
      <StSideWrapper>
        <StDiv>
          <StSpan>
            나의 아티스트
          </StSpan>
          <StArtistDiv>
            {
              myArtistTestData.map((el) => {
                return (
                  <StArtistTargetDiv>{el}</StArtistTargetDiv>
                )
              })
            }
          </StArtistDiv>
        </StDiv>

        {/* // Artist List */}
        <StListWrapper>
          <StListDiv>
            {
              listTestData.map((el) => {
                return (
                  <StListTargetDiv>{el}</StListTargetDiv>
                  
                )
              })
            }
          </StListDiv>
        </StListWrapper>
      </StSideWrapper>
      <>
      <button onClick={logOut}>로그아웃</button>
      </>
    </StMainWrapper>


  )
}
// Wrapper
const StMainWrapper = styled.div`
  background-color: black;
  padding-bottom: 100px;


`
const StSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

// Banner
const StBannerDiv = styled.div`
  width: 100vw;
  height: 500px;

  background-color: gray;
`

// My Artist
const StDiv = styled.div`
  width: 1400px;
  height: 300px;

  margin-top: 50px;
  border: 2px solid red;
`
const StSpan = styled.span`
  color: white;
`

const StArtistDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;

  height: 200px;
`
const StArtistTargetDiv = styled.div`
  background-color: pink;
  border-radius: 10px;
`


// Artist List
const StListWrapper = styled.div`
  width: 1400px;
  height: 800px;

  margin-top: 50px;
`
const StListDiv = styled.div`
height: inherit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const StListTargetDiv = styled.div`
  color: white;
  background-color: pink;
  margin: 15px;
  border-radius: 10px;
`



export default Home