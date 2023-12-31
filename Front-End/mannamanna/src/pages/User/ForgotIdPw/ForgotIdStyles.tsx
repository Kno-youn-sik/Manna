import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import {
  DeleteNoteAtom,
  ForgotIdErrorModalAtom,
  LoginErrorModalAtom,
  NoteAlarmAtom,
  RegisterMessageAtom,
  RegisterModalAtom,
  SendNoteModalAtom,
  SogaeNoteModalAtom,
  SogaeResultNoteAtom,
  findIdCheckIdAtom,
  findIdModalAtom,
  findPwModalAtom,
  idAtom,
  memberNameAtom,
  nameAtom,
  sendNoteAtom,
  sendNoteIdAtom,
  sendNoteReceiverAtom,
  sogaetingNoteAtom,
} from "../../../Recoil/State";
import MacBookBox from "../../../components/common/macbookBox";
import { MyPageButton } from "../MyPage/MyPageStyles";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { TextField } from '@mui/material';
import { StyledButton } from "../Login/LoginStyle";
import {
  Answer,
  AnswerBox,
  SmallInput,
  SmallInputBox,
} from "../Register/RegisterStyle";
import { Question } from "../Register/AnswerBox";
import { MessageReq, SogaetingReq } from "../../../apis/Request/Request";
import api from "../../../apis/Api";

export const FindidModal = () => {
  const [open, setOpen] = useRecoilState(findIdModalAtom);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userId] = useRecoilState(findIdCheckIdAtom);
  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              현재 본인의 아이디는 {userId} 입니다.
              <div style={{ marginTop: "20vh" }}>
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

export const FindPwModal = () => {
  const [open, setOpen] = useRecoilState(findPwModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              이메일로 비밀번호를 전송하였습니다.
              <div style={{ marginTop: "20vh" }}>
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

export const LoginErrorModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(LoginErrorModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const GoFindId = () => navigate("/ForgotId");
  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              <div>로그인 정보가 잘못되었습니다. </div>
              <br />
              <div> 재입력해주세요.</div>
              <div style={{ marginTop: "20vh" }}>
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
                <MyPageButton onClick={GoFindId}>아이디 찾기</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

export const ForgotIdErrorModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(ForgotIdErrorModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              <div>잘못된 정보를 입력하였습니다.</div>
              <br></br>
              <div>재시도해주세요.</div>
              <div style={{ marginTop: "20vh" }}>
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

export const RegisterModal = () => {
  const [open, setOpen] = useRecoilState(RegisterModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message] = useRecoilState(RegisterMessageAtom);
  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              {message}
              <div style={{ marginTop: "20vh" }}>
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

const StyledModalContainer = styled.div`
  width: 30%;
`;

const StyledModalContent = styled.div`
  border-radius: 5%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
`;

interface NoteQuestionProps {
  question: string;
  Id: string;
}

export const NoteQuestion: React.FC<NoteQuestionProps> = ({ question, Id }) => {
  return (
    <SmallInputBox>
      <AnswerBox>
        <Answer>{question}</Answer>
        <div>{Id}</div>
      </AnswerBox>
    </SmallInputBox>
  );
};

interface TextareaQuestionProps {
  question: string;
  Id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const StyledTextarea = styled.textarea`
  width: 100%; /* 가로 길이를 조정 */
  height: 10vh; /* 세로 길이를 조정 */
  font-weight: bold; /* 다른 스타일 속성도 추가할 수 있습니다 */
  overflow-y: auto; /* 내용이 넘칠 경우 세로 스크롤바 표시 */
`;

export const TextareaQuestion: React.FC<TextareaQuestionProps> = ({
  question,
  Id,
  placeholder,
  onChange,
}) => {
  return (
    <SmallInputBox>
      <AnswerBox style={{ flexDirection: "column" }}>
        <Answer>{question}</Answer>
        <StyledTextarea id={Id} placeholder={placeholder} onChange={onChange} />
      </AnswerBox>
    </SmallInputBox>
  );
};

export const FalseNoteModal = () => {
  const [open, setOpen] = useRecoilState(SendNoteModalAtom);
  const [sendnote, Setsendnote] = useRecoilState(sendNoteAtom);
  const [UserId] = useRecoilState(idAtom);
  const [UserName] =useRecoilState(nameAtom);
  const [memberName, setMemberName] = useRecoilState(memberNameAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [notereceiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  let temp = { ...sendnote };

  const sendUnLoveNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date = new Date();
    const dateString = date.toISOString();
    const updatedMessage: MessageReq = {
      receiver: notereceiver,
      sender: temp.sender,
      subject: temp.subject,
      content: temp.content,
      isSogae: temp.isSogae,
      date: dateString,
    };
    console.log(updatedMessage);
    try {
      const response = await api.post("/note/send", updatedMessage);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Update temp object
    if (UserId !== null) {
      temp.sender = UserId;
    }
    console.log(temp.receiver);
    console.log(temp.sender);
    console.log(temp.content);
    console.log(temp.subject);

    await sendUnLoveNote(e);

    handleClose();
  };

  return (
    <StyledModalContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <StyledFormContainer>
              {UserName !== null ? (
                <NoteQuestion question="보내는 이" Id={UserName} />
              ) : null}
              {memberName !== null ? (
                <NoteQuestion question="받는 이" Id={memberName} />
              ) : null}
              <Question
                question="제목"
                Type="text"
                Id="subject"
                placeholder="제목"
                onChange={(e) => (temp.subject = e.target.value)}
              />

              <TextareaQuestion
                question="내용"
                Id="content"
                placeholder="내용을 입력하세요"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  (temp.content = e.target.value)
                }
              />
              <StyledButtonContainer>
                <StyledButton onClick={handleSubmit}>보내기</StyledButton>
                <StyledButton onClick={handleClose}>취소</StyledButton>
              </StyledButtonContainer>
            </StyledFormContainer>
          </MacBookBox>
        </StyledModalContent>
      </Modal>
    </StyledModalContainer>
  );
};

// 소개팅 신청용
export const TrueNoteModal = () => {
  function formatToCustomDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  }
  const [open, setOpen] = useRecoilState(SogaeNoteModalAtom);
  const [sendnote, Setsendnote] = useRecoilState(sogaetingNoteAtom);
  const [UserId] = useRecoilState(idAtom);
  const [UserName] =useRecoilState(nameAtom);
  const [memberName, setMemberName] = useRecoilState(memberNameAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [notereceiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  let temp = { ...sendnote };
  let day: string = "";
  let time: string = "";

  const sendUnLoveNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedMessage: SogaetingReq = {
      receiver: notereceiver,
      sender: temp.sender,
      date: temp.date,
    };
    console.log(updatedMessage);
    try {
      const response = await api.post("/note/sogae/send", updatedMessage);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Update temp object
    if (UserId !== null) {
      temp.sender = UserId;
    }
    const localDate = new Date(`${day} ${time}`);
    temp.date = formatToCustomDate(localDate);

    await sendUnLoveNote(e);
    console.log(temp.receiver);
    console.log(temp.sender);
    console.log(temp.date);

    handleClose();
  };

  return (
    <StyledModalContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <StyledFormContainer>
            {UserName !== null ? (
                <NoteQuestion question="보내는 이" Id={UserName} />
              ) : null}
              {memberName !== null ? (
                <NoteQuestion question="받는 이" Id={memberName} />
              ) : null}
              <Question
                question="원하는 날짜"
                Type="Date"
                Id="subject"
                placeholder="YY-MM-DD"
                onChange={(e) => (day = e.target.value)}
              />
              <Question
                question="원하는 시간"
                Type="Time"
                Id="subject"
                placeholder="YY-MM-DD"
                onChange={(e) => (time = e.target.value)}
              />

              <StyledButtonContainer>
                <StyledButton onClick={handleSubmit}>보내기</StyledButton>
                <StyledButton onClick={handleClose}>취소</StyledButton>
              </StyledButtonContainer>
            </StyledFormContainer>
          </MacBookBox>
        </StyledModalContent>
      </Modal>
    </StyledModalContainer>
  );
};

export const RecentNoteModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(NoteAlarmAtom);

  const handleOpen = () => {
    navigate("/note");
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "30%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <StyledFormContainer>
              <div>새로운 쪽지가 있습니다.</div>
              <br />
              <div>확인하겠습니까?</div>
              <StyledButtonContainer>
                <MyPageButton onClick={handleOpen}>확인 하러가기</MyPageButton>
              </StyledButtonContainer>
            </StyledFormContainer>
          </MacBookBox>
        </StyledModalContent>
      </Modal>
    </div>
  );
};
