/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:11:15
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for dynamic
-- ----------------------------
DROP TABLE IF EXISTS `dynamic`;
CREATE TABLE `dynamic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `content` varchar(100) DEFAULT NULL,
  `imgsrc` varchar(1000) DEFAULT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
