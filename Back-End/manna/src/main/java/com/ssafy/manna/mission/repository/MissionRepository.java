package com.ssafy.manna.mission.repository;

import com.ssafy.manna.mission.domain.Mission;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MissionRepository extends JpaRepository<Mission, String> {

    Optional<Mission> findById(int id);

    // 남자 회원
    @Query("SELECT m FROM Mission m WHERE m.maleId = :id")
    List<Mission> findByMaleId(@Param("id") String id);

    // 여자 회원
    @Query("SELECT m FROM Mission m WHERE m.femaleId = :id")
    List<Mission> findByFemaleId(@Param("id") String id);

    // 남자 회원의 id 찾기
    int findFirstByMaleId(String maleId);

    // 여자 회원의 id 찾기
    int findFirstByFemaleId(String femaleId);

}
