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
  // NoteLogoBox,
} from "./NoteStyle";
import api from "../../apis/Api";
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
          // border: "1px solid red"
        }}
      />
      <BackPart>
        <SidePart style={{ border: "1px solid red" }}>
          {/* <NoteLogoBox></NoteLogoBox> */}
        </SidePart>
        <MidPart>
          <KeyPart>
            <KeySelectPart>
              <NoteBtn onClick={GoResponseNote}>받은 쪽지</NoteBtn>
              <NoteBtn onClick={GoRequestNote}>보낸 쪽지</NoteBtn>

              <SearchPart>
                <SearchInput type="text" placeholder="검색어를 입력해주세요." />
                <BtnBox>
                  <SearchBtn>검색조건</SearchBtn>
                  <SearchBtn>이름</SearchBtn>
                </BtnBox>
              </SearchPart>
            </KeySelectPart>

            <KeyMainPart>
              <Outlet />
            </KeyMainPart>
          </KeyPart>
        </MidPart>
        <SidePart />
      </BackPart>
    </div>
  );
};

export default Note;
