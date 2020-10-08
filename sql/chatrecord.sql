/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:11:10
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for chatrecord
-- ----------------------------
DROP TABLE IF EXISTS `chatrecord`;
CREATE TABLE `chatrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `chattime` datetime NOT NULL,
  `friend_id` int(11) NOT NULL,
  `content` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
