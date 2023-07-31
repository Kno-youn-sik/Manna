package com.ssafy.manna.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.manna.global.common.dto.AddressDto;
import com.ssafy.manna.global.common.dto.MailDto;
import com.ssafy.manna.global.common.dto.ProfilePictureDto;
import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.domain.MemberAddress;
import com.ssafy.manna.member.domain.MemberDetail;
import com.ssafy.manna.member.domain.ProfilePicture;
import com.ssafy.manna.member.dto.request.*;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.member.dto.response.MemberFindPwdResponse;
import com.ssafy.manna.member.dto.response.MemberInfoResponse;
import com.ssafy.manna.member.service.MemberService;
import io.swagger.models.Response;
import java.util.ArrayList;
import java.util.List;
import javax.swing.text.html.Option;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
public class MemberController {
    private final MemberService memberService;

    //임시 매핑
//    @PostMapping("/here")
//    public void imsi(){
//        log.info("임시 로그");
//    }

    //회원가입
    @PostMapping("/user/regist")
    public ResponseEntity<String> join(@RequestBody MemberSignUpRequest memberSignUpRequest) {
        try {
            log.info("회원가입");
            // 회원가입 시 카카오 인증

            memberService.signUp(memberSignUpRequest);
            return ResponseEntity.ok("join success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    //로그인

//    @PostMapping("/user/login")
//    public void login(@RequestBody MemberLoginRequest memberLoginRequest){
//        //로그인
//
//    }

    //회원탈퇴
    @DeleteMapping("/user/delete")
    public ResponseEntity<?> delete(@RequestBody MemberDeleteRequest memberDeleteRequest){
        ResponseTemplate<?> body;
        try{
            //회원 탈퇴시 비밀번호 입력받고 일치하면 회원 탈퇴.
            memberService.delete(memberDeleteRequest.getPwd(),memberDeleteRequest.getId());
            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 탈퇴가 완료되었습니다.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        catch (Exception e){
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("비밀번호가 틀렸습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보 조회
    @GetMapping("/user/mypage/{id}")
    public ResponseEntity<?> myPage(@Validated @PathVariable("id") String id) {
        ResponseTemplate<?> body;
        Optional<Member> findMember = memberService.getInfo(id);

        if(findMember.isPresent()){
            Member member = findMember.get();
            MemberDetail memberDetail = member.getMemberDetail();
            MemberAddress memberAddress = memberDetail.getMemberAddress();
            List<ProfilePicture> profilePictures= member.getProfilePicture();
            List<ProfilePictureDto> profilePictureDtos = new ArrayList<>();
            for(ProfilePicture profilePicture : profilePictures){
                ProfilePictureDto profilePictureDto = new ProfilePictureDto(profilePicture.getId(),profilePicture.getPath(),profilePicture.getName(),profilePicture.getPriority());
                profilePictureDtos.add(profilePictureDto);
            }
            MemberInfoResponse memberInfoResponse = new MemberInfoResponse(
                    member.getName(),memberDetail.getHeight(),memberAddress.getDetail(),
                    memberDetail.getJob(),memberDetail.isBlockingFriend(),memberDetail.isSmoker(),
                    memberDetail.isDrinker(),memberDetail.getReligion(),memberDetail.getMbti(),
                    profilePictureDtos,memberDetail.getIntroduction(),memberDetail.getMileage()
            );

            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 조회 완료")
                    .data(memberInfoResponse)
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("Page error")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //마이페이지 정보수정
    @PutMapping("/user/mypage/{id}")
    public ResponseEntity<?> myPageEdit(MemberUpdateRequest memberUpdateRequest,@Validated @PathVariable("id") String id){
        ResponseTemplate<?> body;
        Optional<Member> findMember = memberService.getInfo(id);
        if(findMember.isPresent()){
            // Request DTO의 값으로 Member Entity 업데이트
            Member member = findMember.get();
            MemberDetail memberDetail = member.getMemberDetail();

            memberDetail.updateHeight(memberUpdateRequest.getHeight());
            memberDetail.updateIntroduction(memberUpdateRequest.getIntroduction());
            memberDetail.updateJob(memberUpdateRequest.getJob());
            memberDetail.updateMbti(memberUpdateRequest.getMbti());
            memberDetail.updateIsDrinker(memberUpdateRequest.isDrinker());
            memberDetail.updateIsSmoker(memberUpdateRequest.isSmoker());
            memberDetail.updateIsBlockingFriend(memberUpdateRequest.isBlockingFriend());
            memberUpdateRequest.getDetailAddress();

            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("회원 수정 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else {
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("회원 수정 오류")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //아이디 찾기
    @PostMapping("/user/findId")
    public ResponseEntity<?> findId(@RequestBody MemberFindIdRequest memberFindIdRequest){
        Optional<Member> findMember = memberService.findMemberByNameAndEmail(memberFindIdRequest);
        ResponseTemplate<?> body;
        if(findMember.isPresent()){
            String findId = findMember.get().getId();
            MemberFindIdResponse memberFindIdResponse = new MemberFindIdResponse(findId);
            body = ResponseTemplate.builder()
                    .result(true)
                    .data(memberFindIdResponse)
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }
    }

    //비밀번호 찾기
    @PostMapping("/user/findPwd")
    public ResponseEntity<?> findPwd(@RequestBody MemberFindPwdRequest memberFindPwdRequest){

        Optional<Member> findMember = memberService.findMemberByIdAndEmail(memberFindPwdRequest);
        ResponseTemplate<?> body;
        if(findMember.isPresent()){
            //임시 비밀번호 생성
            String findId = findMember.get().getId();
            String emailId = memberFindPwdRequest.getEmailId();
            String emailDomain = memberFindPwdRequest.getEmailDomain();
            //디비 업데이트
            String tempPwd = memberService.updatePwd(findId);
            //이메일 만들기
            MailDto mailDto = memberService.createMail(emailId,emailDomain,tempPwd);
            //이메일 발송
            memberService.sendMail(mailDto);

            body = ResponseTemplate.builder()
                    .result(true)
                    .msg("임시비밀번호 이메일 발송 완료")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.OK);
        }
        else{
            body = ResponseTemplate.builder()
                    .result(false)
                    .msg("가입한 정보가 없습니다. 다시 입력해주세요.")
                    .build();
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }


    }


}
