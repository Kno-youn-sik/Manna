package com.ssafy.manna.domain.member.domain;

import com.ssafy.manna.global.common.domain.BaseTimeEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.OnDelete;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MemberDetail extends BaseTimeEntity {

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="id")
    @Id
    private Member member;

    private Long addressMemberId;       //멤버주소 아이디
    private String tel;                 //전화번호
    private String birth;               //생년월일
    private String emailId;             //이메일 아이디
    private String emailDomain;         //이메일 도메인

    private int height;                 //키
    private String job;                 //직업

    private boolean isSmoker;           //흡연여부
    private boolean isDrinker;          //음주
    private String mbti;                //MBTI
    private String religion;            //종교
    private String introduction;        //자기소개
    private boolean isBlockingFriend;   //지인차단 여부
    private int mileage;                //현재마일리지

}
