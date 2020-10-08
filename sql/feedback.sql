/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:11:25
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `content` varchar(300) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `feedback` VALUES ('1', '2', 'asd', '2020-09-02 00:00:00');
INSERT INTO `feedback` VALUES ('2', '2', 'asfrwaefrwe', '2020-09-02 00:00:00');
INSERT INTO `feedback` VALUES ('3', '2', 'asd', '2020-09-02 00:00:00');
