import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import heart from "../../asset/image/calendarheart.png";
import api from '../../apis/Api';
import { idAtom, selectedDateAtom } from '../../Recoil/State';
import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';

const CalendarContainer = styled.div`
    
  /* react-calendar__navigation 스타일 */
  .react-calendar__navigation {
    display: flex;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    background: pink;
    border-bottom: 4px solid pink;
    height: 80%;

    span {
      font-size: 24px;
      font-weight: 600;
      color: pink;
    }
  }

  /* react-calendar__navigation 버튼 스타일 */
  .react-calendar__navigation button:disabled,
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: pink;
    border-radius: 20px 20px 0 0;
  }

  /* react-calendar__month-view 스타일 */
  
  .react-calendar__month-view {
    padding: 1.2vh 3.2vh;
    abbr {
      color: brown;
      font-size: 16px;
      font-weight: 500;
    }
  }

  /* react-calendar__month-view__weekdays 스타일 */
  .react-calendar__month-view__weekdays abbr {
    font-size: 2vh;
    font-weight: 900;
    margin-left: 2.5rem; /* 요일을 오른쪽으로 이동 */

  }

  /* react-calendar__tile 스타일 */
  .react-calendar__tile {
    text-align: center;
    height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 14px;
    margin-top:0.2rem;
  }

  /* react-calendar__tile 선택됐을 시 스타일 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: pink;
    border-radius: 14px;
  }

  /* 현재 날짜 스타일 */
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: pink;
    border-radius: 14px;
  }

`;


const MyCalendar = () => {
  const curDate = new Date(); 
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom); // recoil 상태 사용
  const activeDate:any = moment(selectedDate).format('YYYY-MM-DD'); 
  const [userId, setId] = useRecoilState(idAtom);
 
  const {
    data: scheduleList,
    isLoading,
    isError,
  } = useQuery<any>(["scheduleList"], async () => {
    const response = await api.get(`schedule/${userId}`);
    return response.data;
  });

  const offlineDates = scheduleList?.data.offlineSchedule.map((item: any) => item.date) || [];
  const onlineDates = scheduleList?.data.onlineSchedule.map((item: any) => item.date) || [];
  const dayList = [...offlineDates, ...onlineDates];
  const addContent = ({ date }: { date: Date }) => {
    if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      return (
        <div key={moment(date).format('YYYY-MM-DD')}>
          <img
            src={heart}
            className="diaryImg"
            width="26"
            height="26"
            alt="today is..."
          />
        </div>
      );
    }
    return null;
  };

  const getActiveMonth = (activeStartDate: Date) => {
    console.log('Active Start Date:', activeStartDate);
  };

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      const date = value as Date;
      setSelectedDate(date);
    }
  };
  const handleActiveStartDateChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (activeStartDate) {
      getActiveMonth(activeStartDate);
    }
  };

  return (
    <CalendarContainer style={{height:'100%'}}>
      <Calendar
        locale="kr"
        onChange={(value, event) => handleDateChange(value)}
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        tileContent={addContent}
        showNeighboringMonth={false}
        onActiveStartDateChange={handleActiveStartDateChange}
      />
    </CalendarContainer>
  );
};

export default MyCalendar;
