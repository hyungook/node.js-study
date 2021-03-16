### create table

CREATE TABLE topic(
-> id INT(11) NOT NULL AUTO_INCREMENT, 이름 데이터타입(길이) 공백X 자동으로 증가(중복x)
-> title VARCHAR(100) NOT NULL,
-> description TEXT NULL,
-> created DATETIME NOT NULL,
-> author VARCHAR(30) NULL,
-> profile VARCHAR(100) NULL,
-> PRIMARY KEY(id)); id를 중복X (고유값을 갖게 한다)

---

ERROR 1064 (42000): You have an error in your SQL syntax;

해결책 1) 작은따음표 표시를 다 생략하고 적는다.

해결책 2) 작은따음표(')를 다른것(`)으로 대체한다.

작은따음표가 두가지가 있습니다.
` : 숫자1옆, tab위 (물결과 같은 위치)<-정답
' : 엔터 옆,물음표 위 (쌍따음표와 같은 위치)<-오답

참고: 테이블명, 칼럼명, 프라이머리키안에 들어가는것 해결책1/2안중 하나로 모두 통일되어야함

CRUD (**Create, **Read, Update, Delete)

- SHOW DATABASES;
- SHOW TABLES;
- DESC topic; ( topic table의 구조를 확인할 수 있다. )

INSERT INTO topic;

### insert

SHOW TABLES;
DESC topic;
INSERT INTO topic(c1, c2,,,) VALUES(v1, v2..);

### select (중요)

SELECT \* FROM topic; // 모든 행 출력
// 참고 : https://dev.mysql.com/doc/refman/8.0/en/select.html
SELECT id, title, created, author FROM topic WHERE author='egoing'; // egoing만 출력
SELECT id, title, created, author FROM topic WHERE author='egoing' ORDER BY id DESC; // 정렬
SELECT id, title, created, author FROM topic WHERE author='egoing' ORDER BY id DESC LIMIT 2; // 개수 제한 (2)

### update

DESC topic;
SELECT \* FROM topic;
UPDATE topic SET description='Oracle is ...', title='Oracle' WHERE id=2; // WHERE 문을 꼭 추가해야 한다.

### delete

SELECT \* FROM topic;
DELETE FROM topic WHERE id=5; // WHERE 문을 꼭 추가해야 한다. (인생이 바뀔 수 있음)
SELECT \* FROM topic;
