package com.ssafy.manna.global.handler;

import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_GENDER;
import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_USER_ID;
import static com.ssafy.manna.global.common.enums.SessionEnum.SOCKET_HEADER_USER_NAME;

import com.ssafy.manna.global.common.domain.Session;
import com.ssafy.manna.global.common.repository.RedisSessionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Slf4j
@Component
@RequiredArgsConstructor
public class WebSocketEventListener {

    private final RedisSessionRepository redisSessionRepository;

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        try {
            String userName = headerAccessor.getNativeHeader(SOCKET_HEADER_USER_NAME.getValue())
                .get(0);
            String gender = headerAccessor.getNativeHeader(SOCKET_HEADER_GENDER.getValue()).get(0);
            String userId = headerAccessor.getNativeHeader(SOCKET_HEADER_USER_ID.getValue()).get(0);
            headerAccessor.getSessionAttributes().put(SOCKET_HEADER_USER_ID.getValue(), userId);

            saveSession(userName, gender, userId);
        } catch (Exception e) {

        }

    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String userId = (String) headerAccessor.getSessionAttributes()
            .get(SOCKET_HEADER_USER_ID.getValue());
        redisSessionRepository.deleteById(userId);
    }

    private void saveSession(String userName, String gender, String userId) {
        Session socketSession = Session.builder().gender(gender).userId(userId).userName(userName)
            .build();
        redisSessionRepository.save(socketSession);
    }
}
