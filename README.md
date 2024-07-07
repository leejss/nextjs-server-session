# Implementing server side session

- 회원가입은 유저 데이터를 입력 받아 데이터베이스에 저장하는 것이다.
- 로그인을 하면 세션을 생성하고 세선에 유저정보를 저장한다.

## Session management

- Create a session
  - enctypt the user data and set expiration time
- Get a session
  - decrypt the session data and check the expiration time
- If the session is valid, the user is logged in
- Else the user is not logged in
