// import React, { useState } from "react";
import { StyledButton } from "../Login/LoginStyle";
import signup from "../../../asset/image/signup.png";
import GoBackIcon from "../../../components/common/GoBackIcon";
import Logo from "../../../components/common/Logo";
import {
  LogoBox,
  SmallInputBox,
  InnerBox,
  SideBox,
  MainBox,
  SideInnerBox,
  MainLogoBox,
  SignUP,
  MainMidBox,
  InputBox,
  AnswerBox,
  Answer,
} from "./RegisterStyle";
import MacBox from "../../../components/common/MacBox1";
import { useNavigate } from "react-router-dom";
// import Question from "./AnswerBox";
import {
  EnterId,
  EnterName,
  EnterPwd,
  EnterPwdCheck,
  EnterTel,
} from "./Question";

const Register = () => {
  const navigate = useNavigate();

  const GoRegisterDetail = () => {
    navigate("/registerDetail");
  };

  return (
    <div>
      <LogoBox>
        <Logo />
      </LogoBox>
      <InnerBox>
        <SideBox>
          <SideInnerBox>
            <GoBackIcon />
          </SideInnerBox>
          <SideInnerBox />
          <SideInnerBox />
        </SideBox>
        <MainBox>
          <MainLogoBox>
            <SignUP src={signup} />
          </MainLogoBox>
          <MainMidBox>
            <MacBox
              width="95%"
              height="95%"
              color1="#bcd3ff"
              color2="#ffffff"
              alignItems="center"
            >
              <InputBox
                // onSubmit={handleSubmit}
                alignItems="center"
              >
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    padding: "0%",
                  }}
                >
                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>프로필사진 등록</Answer>
                      <StyledButton style={{ height: "100%" }}>
                        사진 등록하기
                      </StyledButton>
                    </AnswerBox>
                  </SmallInputBox>

                  <EnterName />
                  <EnterTel />
                  <EnterId />
                  <EnterPwd />
                  <EnterPwdCheck />

                  <SmallInputBox>
                    <AnswerBox>
                      <Answer>사는 지역을 선택해주세요</Answer>
                      <StyledButton style={{ height: "100%" }}>
                        지역 찾기
                      </StyledButton>
                    </AnswerBox>
                  </SmallInputBox>
                </div>

                <StyledButton type="submit" onClick={GoRegisterDetail}>
                  다음
                </StyledButton>
              </InputBox>
            </MacBox>
          </MainMidBox>
        </MainBox>
        <SideBox></SideBox>
      </InnerBox>
    </div>
  );
};

export default Register;
