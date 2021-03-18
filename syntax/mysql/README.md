# DATABASE

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

### 정상

Database - 본질(essence)
Relational - 혁신(innovation)

기술에서 혁신과 본질은 각각 무엇인가?
-> 관계형(혁신), 데이터 베이스(본질)
-> CRUD은 본질

## 관계형 데이터베이스(Realtional Database)의 필요성

데이터베이스에 중복된 데이터가 있다 => 개선의 여지가 있다!

데이터가 많이 중복될수록 많은 문제가 야기됨 :
복잡하고 용량이 큰 데이터가 중복될수록,

1. 기술적, 경제적으로 엄청난 손실
2. 데이터를 수정해야 할 때, 낭비되는 시간
3. 데이터의 구분이 어려움

#### trade off

장점이 생기면 단점도 생긴다.

- 테이블을 분리하지 않으면,
  모든 데이터를 한 눈에 볼 수 있기 때문에 직관적으로 데이터를 볼 수 있다.

#테이블을 분리하면,
데이터를 볼 때, 해당 데이터에 해당되는 별도의 테이블을 열어서 비교.대조해야 하는 불편함

저장은 분산, 볼 때에는 합쳐서

### 테이블 분리하기

RENAME TABLE topic TO topic_backup; //테이블 이름 변경

#### table 조회

- use mysql;

### 테이블 분리하기

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(20) NOT NULL,
`profile` varchar(200) DEFAULT NULL,
PRIMARY KEY (`id`)
);

--
-- Dumping data for table `author`
--

INSERT INTO `author` VALUES (1,'egoing','developer');
INSERT INTO `author` VALUES (2,'duru','database administrator');
INSERT INTO `author` VALUES (3,'taeho','data scientist, developer');

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(30) NOT NULL,
`description` text,
`created` datetime NOT NULL,
`author_id` int(11) DEFAULT NULL,
PRIMARY KEY (`id`)
);
