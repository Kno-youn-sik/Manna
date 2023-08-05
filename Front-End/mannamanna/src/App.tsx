import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import ForgotId from "./pages/User/ForgotIdPw/ForgotId";
import ForgotPw from "./pages/User/ForgotIdPw/ForgotPw";
import MainHome from "./pages/User/MainHome/MainHome";
import Choice from "./pages/Choice";
import Schedule from "./pages/User/Schedule/Schedule";
import Mypage from "./pages/User/MyPage/Mypage";
import Chatting from "./pages/Chatting/Chatting";
import SoagetingMain from "./pages/Soagaeting/SoagetingMain";
import SoagetingWait from "./pages/Soagaeting/SoagetingWait";
import Soageting from "./pages/Soagaeting/Soageting";
import MeetingMain from "./pages/Meeting/MeetingMain";
import MeetingMakeRoom from "./pages/Meeting/MeetingMakeRoom";
import MeetingWait from "./pages/Meeting/MeetingWait";
import Meeting from "./pages/Meeting/Meeting";
import Reserve from "./pages/Reserve/Reserve";
import Mission from "./pages/Mission";
import Note from "./pages/Note/Note";
import RequestNote from "./pages/Note/RequestNote";
import ResponseNote from "./pages/Note/ResponseNote";
import Alarm from "./pages/Alarm";
import GlobalFont from "./Styles/GlobalFont";
import GlobalStyle from "./Styles/GlobalStyle";
import RegisterDetail from "./pages/User/Register/RegisterDetail";
import MyPageModify from "./pages/User/MyPage/MyPageModify";
import MyPageMiileage from "./pages/User/MyPage/MyPageMileage";
import MyPageHistory from "./pages/User/MyPage/MyPageHistory";
import MyPageWithdrawal from "./pages/User/MyPage/MyPageWithdrawal";
import StudyRecoil from "./pages/Study/StudyRecoil";
import StudyRecoilResult from "./pages/Study/StudyRecoilResult";
import Kakao from "./pages/User/Login/KaKaoLogin";

function App() {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="main" element={<MainHome />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="choice" element={<Choice />} />
          <Route path="sogaetingMain" element={<SoagetingMain />} />
          <Route path="sogaetingWait" element={<SoagetingWait />} />
          <Route path="sogaeting" element={<Soageting />} />
          <Route path="meetingMain" element={<MeetingMain />} />
          <Route path="meetingMakeRoom" element={<MeetingMakeRoom />} />
          <Route path="meetingWait" element={<MeetingWait />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="mypage" element={<Mypage />}>
            <Route index element={<MyPageModify />} />
            <Route path="mileage" element={<MyPageMiileage />} />
            <Route path="history" element={<MyPageHistory />} />
            <Route path="withdrawal" element={<MyPageWithdrawal />} />
          </Route>
          <Route path="chatting" element={<Chatting />} />
          <Route path="mission" element={<Mission />} />
          <Route path="note" element={<Note />}>
            <Route index element={<ResponseNote />} />
            <Route path="requestNote" element={<RequestNote />} />
          </Route>
          <Route path="alram" element={<Alarm />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
        <Route path="meeting" element={<Meeting />} />
        <Route path="home" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="ForgotId" element={<ForgotId />} />
        <Route path="ForgotPw" element={<ForgotPw />} />
        <Route path="register" element={<Register />} />
        <Route path="registerDetail" element={<RegisterDetail />} />
        <Route path="study" element={<StudyRecoil />} />
        <Route path="studyResult" element={<StudyRecoilResult />} />
        <Route path="Kakao" element={<Kakao />} />
      </Routes>
    </>
  );
}

export default App;
