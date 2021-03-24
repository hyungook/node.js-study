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

### 관계형 데이터베이스의 꽃 JOIN

각각 독립적인(분리된) 테이블을 읽을 때, 그 테이블이 하나의 테이블로 저장되어 있었던 것과 같은 효과.

테이블과 테이블을 JOIN 하기 위해서는,
데이터베이스가 어떠한 목적을 가지고 있는지를 말할 수 있어야 한다.

SELECT \* FROM topic LEFT JOIN author ON topic.author_id = author.id;

topic 테이블의 author_id 값과, author테이블의 id 값이 같다

SELECT topic.id, title, description, created, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;

행을 보기 편하게 바꾸고 싶을 때,,

AS 사용 : topic.id AS topic_id

정보 기술에서 중복을 제외 한다는 것. // 중요!!

테이블을 분리한다는 것.
만약 테이블이 특정 식별자를 가지고 있다면, JOIN을 통해 얼마든지 관계를 맺을 수 있다.

SELECT \* FROM comment LEFT JOIN author ON comment.author_id = author.id;

UPDATE author SET profile='database administrator' WHERE id = 2;

'하나를 바꾸면 전체가 바뀐다'

### JOIN은 관계형 데이터베이스를 관계형 데이터베이스 답게 만드는 명령어

## Internet & Database

- Database Server

Internet
'인터넷'이 동작하기 위해선 컴퓨터가 몇 대가 필요할까? = 2대
최소한 이면서 최대한인 2대.

Internet :
각자 흩어져 있는 컴퓨터들이 '인터넷'으로 연결 되면서
"컴퓨터 간의 사회" 가 만들어 짐.
=> 한 대의 컴퓨터가 가지고 있는 한계를 초월하게 되었다는 것을 의미

한 대의 컴퓨터는 정보를 다른 컴퓨터에게 요청
다른 컴퓨터는 정보를 '응답' 한다.

ex) 웹 :
웹이 동작하기 위해서는 인터넷이 필요하고,
인터넷 위에서 동작하기 때문에 두 대의 컴퓨터가 필요함
한 대의 컴퓨터에는 웹 브라우져가 동작

웹 브라우져가 설치되어 있는 컴퓨터가
데이터가 담겨 있는 컴퓨터에 정보를 '요청'
데이터가 담겨 있는 컴퓨터는
웹 브라우져가 설치 되어 있는 컴퓨터에 '응답'

- 서비스를 요청하는 쪽 : Client(클라이언트)
- 서비스를 응답하는 쪽 : Server(서버)

Internet은 클라이언트와 서버가 서로 정보를 '요청' 하고 '응답' 하면서 동작하는 서비스.

웹 클라이언트(웹 브라우져) <-> 웹 서버
게임 클라이언트 <-> 게임 서버(실제 데이터 저장)
...

! MySQL을 설치 한다고 했을 때, MySQL은 두 개의 프로그램을 설치 해 줌.
데이터베이스 클라이언트 <-> 데이터베이스 서버

데이터베이스 서버를 다룰 때, 어떠한 형태이든 간에 데이터베이스 클라이언트를 통해야만 한다.

그렇다면, 우리가 다룬 데이터베이스 클라이언트는 ?
= MySQL이라는 명령어 기반의 프로그램.

MySQL monitor = 데이터베이스 클라이언트 중에 하나 / 명령어를 통해 데이터베이스 서버를 제어하는 프로그램

- 이해하는 것이 아닌 익숙해지는 것. 익숙해지는 방법이 이해와 암기!

### MySQL Client

많은 종류의 MySQL 클라이언트가 있다. ex) MySQL monitor 등등..

MySQL monitor GUI가 아니라 명령어를 사용하는 명령어 기반의 프로그램이다.

MySQL monitor의 장점?
= 명령어 기반의 프로그램이기 때문에 어디서나 사용할 수 있다.

MySQL monitor의 단점?
= 명령어를 통해야만 하기 때문에 명령어를 기억해야 하는 단점
-> 장점이 될 수도?

MySQL workbench = GUI 기반의 프로그램
단점 = 많은 서버 컴퓨터들이 그 컴퓨터의 자원(일) 자체에 투여하기 위해 GUI를 제공하지 않는 경우가 많다.
고로 워크벤치를 컴퓨터 그 안에서는 실행할 수 없다.

장점 = 마우스로 쉽게 조작할 수 있다.

#### MySQL 실행

- ./mysql -uroot -p -hlocalhost
- mysql 모니터 실행 / 사용자 / 비밀번호 입력 / -h(host의 약자 / host = 인터넷에 연결되어 있는 각가의 컴퓨터의 호스트)

#### 정리

index(색인): 양적 완화의 구원 keyword, 사용자들이 검색을 자주 하는 컬럼에 색인을 걸어둠

modeling: 성능, 설계 상의 구원 keyword

backup: 내 컴퓨터와 별도의 컴퓨터에 복제해서 보관 ex)mysqldump, binary log

cloud: 내 컴퓨터가 아닌 큰 회사들의 인프라를 임대해서 원격 제어, backup도 알아서 해줌 ex)aWS RDS, Google Cloud SQL for MySQL, AZURE Database for MySQL

programming: DB 서버 핸들링 ex) python mysql api, php mysql api, java mysql api

##### 'Error: listen EADDRINUSE: address already in use :::3000' 오류

- cmd창에서 pm2 kill 사용하셔서 모든 port를 종료하시고 다시 실행하시면 된다. (포트 충돌 문제)
