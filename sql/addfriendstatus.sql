/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:10:53
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for addfriendstatus
-- ----------------------------
DROP TABLE IF EXISTS `addfriendstatus`;
CREATE TABLE `addfriendstatus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
