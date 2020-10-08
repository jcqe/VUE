/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/5 16:18:09
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(11) NOT NULL,
  `password` char(20) NOT NULL,
  `nickname` char(20) NOT NULL,
  `sex` char(4) NOT NULL,
  `birth` datetime NOT NULL,
  `marriage` char(2) NOT NULL,
  `canuse` char(11) NOT NULL DEFAULT '1',
  `height` char(20) DEFAULT NULL,
  `place` char(50) DEFAULT NULL,
  `education` char(10) DEFAULT NULL,
  `salary` char(20) DEFAULT NULL,
  `introduction` varchar(300) DEFAULT NULL,
  `mailbox` char(30) DEFAULT NULL,
  `qst` char(30) DEFAULT NULL,
  `asw` char(30) DEFAULT NULL,
  `avatar` varchar(300) DEFAULT NULL,
  `account` char(50) DEFAULT NULL,
  `national` char(30) DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL,
  `carpurchase` char(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_account` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13512341234', '123456', '张三', '男', '1990-06-13 14:49:53', '未婚', '1', '140cm以下', '四川省-成都市', '本科', '5000-10000元', '冷静阳光开朗', null, '1+1=?', '2', 'https://t4.jyimg.com/b2/b0/b68b65a9e737ef0a4d31c2db000b/177730090d.jpg?imageView2/1/w/222/h/296', null, '其他民族', '内敛形象好开朗', '0');
INSERT INTO `user` VALUES ('2', '17683013614', '123', '忘了忘记你', '男', '1998-06-10 00:00:00', '未婚', '1', '140cm-150cm', '四川省-绵阳市', '博士', '50000元以上', '乐观向上', null, '1+2=?', '3', 'http://localhost:9999/public/userAvatar/1599218178390t1.jpg', null, '汉族', '娇小旅行跳舞单亲家庭', '1');
INSERT INTO `user` VALUES ('10', '18712341234', '123', 'alg', '女', '1974-09-02 00:00:00', '丧偶', '1', '150cm-160cm', '四川省-成都市', '本科', '2000-5000元', 'hello', null, '1+3=?', '4', 'http://localhost:9999/public/userAvatar/1599031847858t1.jpg', null, '汉族', '长发美食企业高管', '1');
INSERT INTO `user` VALUES ('11', '15912341234', '123', 'tom', '女', '1956-01-02 00:00:00', '未婚', '1', '160cm-170cm', '北京市', '本科', '5000-10000元', '有钱', null, '1+4=?', '5', 'http://localhost:9999/public/userAvatar/1599031915191t3.jpg', null, '汉族', '文静看书建筑行业', '1');
INSERT INTO `user` VALUES ('12', '15282258026', 'Zyt123123', 'mafei', '女', '1989-11-01 00:00:00', '离异', '1', '170cm-180cm', '北京市-东城区', '双学士', '2000-5000元', '上进', null, '1+5=?', '6', 'http://localhost:9999/public/userAvatar/1599036807773t3.jpg', null, '汉族', '简单独立NBA喜欢', '1');
INSERT INTO `user` VALUES ('13', '15284933458', '14258', '我是最帅的', '女', '1996-09-04 15:52:38', '离异', '1', '160cm-170cm', '北京市-东城区', '研究生', '2000-5000元', '阿斯顿', null, '1+6=?', '7', 'https://at1.jyimg.com/41/bf/5c126366761a5d5aed76a7788678/5c1263667_1_avatar_p.jpg', null, '其他民族', '四世同堂房奴攒钱ing', '0');
