import MagazineForm from 'components/MagazineForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';
import { useAppSelector } from 'store/hooks';

const MagazineRegister = () => {
  const navigate = useNavigate();
  const token = import.meta.env.VITE_TOKEN; // 추후에 쿠키에서 얻어오는 것으로 변경
  const newMagazine = useAppSelector((state) => state.magazine.magazine);
  const postMagazine = async () => {
    const res = await axios({
      url: `http://onulstore.dlcpop.com/curations/magazine`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: newMagazine,
    });

    console.log('postMagazine 응답값', res);
  };
  return (
    <S.Container>
      <div className="top">
        <div className="top-title">새 매거진 등록</div>
        <div className="top-buttons">
          <button onClick={() => navigate(-1)}>등록 취소</button>
          <button>비공개 상태로 등록</button>
          <button onClick={postMagazine}>공개 상태로 등록(현시점 공개여부 선택 불가)</button>
        </div>
      </div>
      <MagazineForm />
    </S.Container>
  );
};

export default MagazineRegister;