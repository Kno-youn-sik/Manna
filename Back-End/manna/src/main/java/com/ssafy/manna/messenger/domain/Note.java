package com.ssafy.manna.messenger.domain;

import com.ssafy.manna.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member receiver;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member sender;

    private String subject;

    private String content;

    private LocalDateTime date;

    private Boolean isSogae;

    private Boolean isCheck;

    private Boolean isReject;

    //받은쪽지 삭제한 경우
    private Boolean isDeleted;

    //보낸쪽지 삭제하기
    private Boolean isSentDeleted;
    public void updateIsCheck(boolean isCheck) {
        this.isCheck = isCheck;
    }

    public void updateIsReject(boolean isReject) {
        this.isReject = isReject;
    }

    public void updateDeleted(boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
    
    public void updateSentDeleted(boolean isSentDeleted){this.isSentDeleted = isSentDeleted;}
}