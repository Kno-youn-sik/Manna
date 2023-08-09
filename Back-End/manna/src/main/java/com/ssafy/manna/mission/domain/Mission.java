package com.ssafy.manna.mission.domain;

import com.ssafy.manna.sogaeting.domain.Sogaeting;
import com.ssafy.manna.global.common.domain.BaseStartEndEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
public class Mission extends BaseStartEndEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    private Sogaeting sogaeting;

    private Boolean isSuccess;

    private Boolean isDone;

    private String maleId;

    private String femaleId;

    private String maleImagePath;

    private String femaleImagePath;

}
