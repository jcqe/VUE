/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:11:58
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `report` VALUES ('1', '2', '11', 'test');
INSERT INTO `report` VALUES ('2', '2', '11', 'test2');
INSERT INTO `report` VALUES ('3', '2', '11', 'test3');
INSERT INTO `report` VALUES ('4', '2', '11', 't4');
