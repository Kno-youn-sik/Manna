// import React from 'react';
// import SidebarMission from '../../components/layout/Sidebar/SidebarMission';
// import { FlexBox } from '../Reserve/ReserveStyle';
import BackBox from "../../components/common/Back";
import { MyPageContainerBox } from "../User/MyPage/MyPageStyle";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledButton } from "../User/Login/LoginStyle";
import { SendNoteModalAtom, idAtom } from "../../Recoil/State";
import { useRecoilState } from "recoil";
import { FalseNoteModal } from "../User/ForgotIdPw/ForgotIdStyles";
import {
  BackPart,
  KeyMainPart,
  KeyPart,
  KeySelectPart,
  MidPart,
  NoteBtn,
  SearchBtn,
  SearchInput,
  SearchPart,
  SidePart,
  BtnBox,
  NoteLogoBox,
  // NoteLogoBox,
} from "./NoteStyle";
import api from "../../apis/Api";
import SidebarNote from "../../components/layout/Sidebar/SidebarNote";
import { MidSpace } from "../User/Schedule/ScheduleStyle";
const Note = () => {
  const [userId, setId] = useRecoilState(idAtom);
  const navigate = useNavigate();
  const GoRequestNote = () => {
    navigate("/note/requestNote");
  };
  const GoResponseNote = () => {
    navigate("/note");
  };

  return (
    <div>
      <div
        style={{
          height: "5vh",
        }}
      />
      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarNote />
        </div>
        <MidSpace>
            <KeyPart>
              <KeySelectPart>
                <div style={{width:'60%', height: '100%'}}></div>
                <NoteBtn onClick={GoResponseNote}>받은 쪽지</NoteBtn>
                <NoteBtn onClick={GoRequestNote}>보낸 쪽지</NoteBtn>
                {/* <SearchPart>
                  <SearchInput type="text" placeholder="검색어를 입력해주세요." />
                  <BtnBox>
                    <SearchBtn>검색조건</SearchBtn>
                    <SearchBtn>이름</SearchBtn>
                  </BtnBox>
                </SearchPart> */}
              </KeySelectPart>
              <KeyMainPart>
                <Outlet />
              </KeyMainPart>
            </KeyPart>
        </MidSpace>
      </BackBox>
    </div>
  );
};

export default Note;
