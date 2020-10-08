/*
MySQL Data Transfer
Source Host: localhost
Source Database: beelove
Target Host: localhost
Target Database: beelove
Date: 2020/9/4 9:12:16
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for user_photo
-- ----------------------------
DROP TABLE IF EXISTS `user_photo`;
CREATE TABLE `user_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `user_photo` VALUES ('12', 'http://localhost:9999/public/userphoto/1598958568327myavatar.jpg', '2');
INSERT INTO `user_photo` VALUES ('14', 'http://localhost:9999/public/userphoto/1598958710384myavatar.jpg', '2');
INSERT INTO `user_photo` VALUES ('15', 'http://localhost:9999/public/userphoto/1598958732731test.png', '2');
INSERT INTO `user_photo` VALUES ('16', 'http://localhost:9999/public/userphoto/1599031858393t3.jpg', '10');
INSERT INTO `user_photo` VALUES ('17', 'http://localhost:9999/public/userphoto/1599031861044t3.jpg', '10');
INSERT INTO `user_photo` VALUES ('18', 'http://localhost:9999/public/userphoto/1599031861895t3.jpg', '10');
INSERT INTO `user_photo` VALUES ('19', 'http://localhost:9999/public/userphoto/1599031862241t3.jpg', '10');
INSERT INTO `user_photo` VALUES ('20', 'http://localhost:9999/public/userphoto/1599031930313t2.jpg', '11');
INSERT INTO `user_photo` VALUES ('21', 'http://localhost:9999/public/userphoto/1599031930575t2.jpg', '11');
INSERT INTO `user_photo` VALUES ('22', 'http://localhost:9999/public/userphoto/1599031942252myavatar.jpg', '11');
INSERT INTO `user_photo` VALUES ('23', 'http://localhost:9999/public/userphoto/1599031942534myavatar.jpg', '11');
INSERT INTO `user_photo` VALUES ('24', 'http://localhost:9999/public/userphoto/1599036774724t1.jpg', '12');
INSERT INTO `user_photo` VALUES ('25', 'http://localhost:9999/public/userphoto/1599133187034t1.jpg', '2');
INSERT INTO `user_photo` VALUES ('26', 'http://localhost:9999/public/userphoto/1599133188590t1.jpg', '2');
INSERT INTO `user_photo` VALUES ('27', 'http://localhost:9999/public/userphoto/1599133192131t1.jpg', '2');
