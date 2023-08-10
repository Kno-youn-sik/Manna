package com.ssafy.manna.schedule.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OfflineScheduleRequest {
    //여자 id
    private String femaleId;
    //남자 id
    private String maleId;
    //시간
    private String date;
    //예약장소 id
    private Integer reserveAddressId;
}
