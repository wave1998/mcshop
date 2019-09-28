/*
Navicat MySQL Data Transfer

Source Server         : ps
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : mcshop

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-09-28 14:01:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for header_nav
-- ----------------------------
DROP TABLE IF EXISTS `header_nav`;
CREATE TABLE `header_nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float(10,2) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of header_nav
-- ----------------------------
INSERT INTO `header_nav` VALUES ('1', 'MK天行抱枕 霍游CP送福利 知音漫客天行轶事动漫周边', 'http://www.zymkshop.com/images/201710/1507793676883445101.jpg', '99.00', '热门周边');
INSERT INTO `header_nav` VALUES ('2', 'MK暴走邻家烛天毛绒', 'http://www.zymkshop.com/images/201710/1507793769751263772.jpg', '68.38', '热门周边');
INSERT INTO `header_nav` VALUES ('3', '天行轶事完结特典【一家人】T恤 圆领衫男女上衣', 'http://www.zymkshop.com/images/201710/1507794018337463034.jpg', '138.00', '热门周边');
INSERT INTO `header_nav` VALUES ('4', '勇者是女孩多功能轻薄桌垫 大鼠标垫PU 漫客动漫周边', 'http://www.zymkshop.com/images/201710/1507794623966516485.jpg', '58.00', '热门周边');
INSERT INTO `header_nav` VALUES ('5', ' 天行轶事2018台历 桌面卡通月日历年历 知音漫客动漫周边', 'http://www.zymkshop.com/images/201712/1512985391859403294.jpg', '19.80', '热门周边');
INSERT INTO `header_nav` VALUES ('6', '勇者是女孩2018台历 桌面卡通动漫日历年历 知音漫客动漫', 'http://www.zymkshop.com/images/201712/1513126901094350554.jpg', '19.80', '热门周边');
INSERT INTO `header_nav` VALUES ('7', 'MK天行抱枕 霍游CP送福利 知音漫客天行轶事动漫周边', 'http://www.zymkshop.com/images/201710/1507796760070088505.jpg', '99.00', '最热漫画');
INSERT INTO `header_nav` VALUES ('8', 'MK暴走邻家烛天毛绒', 'http://www.zymkshop.com/images/201710/1507797326615981389.jpg', '68.38', '最热漫画');
INSERT INTO `header_nav` VALUES ('9', '天行轶事完结特典【一家人】T恤 圆领衫男女上衣', 'http://www.zymkshop.com/images/201711/1510104495163377060.jpg', '138.00', '最热漫画');
INSERT INTO `header_nav` VALUES ('10', '勇者是女孩多功能轻薄桌垫 大鼠标垫PU 漫客动漫周边', 'http://www.zymkshop.com/images/201801/1515459770691506602.jpg', '58.00', '最热漫画');
INSERT INTO `header_nav` VALUES ('11', ' 天行轶事2018台历 桌面卡通月日历年历 知音漫客动漫周边', 'http://www.zymkshop.com/images/201803/1521596427071774752.jpg', '19.80', '最热漫画');
INSERT INTO `header_nav` VALUES ('12', '勇者是女孩2018台历 桌面卡通动漫日历年历 知音漫客动漫', 'http://www.zymkshop.com/images/201803/1521618184835702299.jpg', '19.80', '最热漫画');
INSERT INTO `header_nav` VALUES ('13', 'MK天行抱枕 霍游CP送福利 知音漫客天行轶事动漫周边', 'http://www.zymkshop.com/images/201710/1507797787952468016.jpg', '99.00', '优秀小说');
INSERT INTO `header_nav` VALUES ('14', 'MK暴走邻家烛天毛绒', 'http://www.zymkshop.com/images/201710/1507797798131311572.jpg', '68.38', '优秀小说');
INSERT INTO `header_nav` VALUES ('15', '天行轶事完结特典【一家人】T恤 圆领衫男女上衣', 'http://www.zymkshop.com/images/201712/1513126901094350554.jpg', '138.00', '优秀小说');
INSERT INTO `header_nav` VALUES ('16', '勇者是女孩多功能轻薄桌垫 大鼠标垫PU 漫客动漫周边', 'http://www.zymkshop.com/images/201710/1507797798131311572.jpg', '58.00', '优秀小说');
INSERT INTO `header_nav` VALUES ('17', ' 天行轶事2018台历 桌面卡通月日历年历 知音漫客动漫周边', 'http://www.zymkshop.com/images/201710/1507797883396408197.jpg', '19.80', '优秀小说');
INSERT INTO `header_nav` VALUES ('18', '勇者是女孩2018台历 桌面卡通动漫日历年历 知音漫客动漫', 'http://www.zymkshop.com/images/201801/1516692200616555209.jpg', '19.80', '优秀小说');

-- ----------------------------
-- Table structure for index_content_top
-- ----------------------------
DROP TABLE IF EXISTS `index_content_top`;
CREATE TABLE `index_content_top` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of index_content_top
-- ----------------------------
INSERT INTO `index_content_top` VALUES ('1', '【订阅专拍】《知音漫客》按月订购（请仔细阅读详情页... ', 'static/images/1027_thumb_G_1526371676515.jpg', '40');
INSERT INTO `index_content_top` VALUES ('2', '【订阅专拍】《漫客小说绘》按月订购（请仔细阅读详情页... ', 'static/images/1124_thumb_G_1536564320165.jpg', '40');
INSERT INTO `index_content_top` VALUES ('3', '知音漫客578期 锐周刊', 'static/images/1371_thumb_G_1569207539895.jpg', '6');
INSERT INTO `index_content_top` VALUES ('4', '知音漫客573期 燃周刊', 'static/images/1353_thumb_G_1566193736285.jpg', '6');
INSERT INTO `index_content_top` VALUES ('5', '知音漫客577期 燃周刊', 'static/images/1368_thumb_G_1568768911700.jpg', '6');
INSERT INTO `index_content_top` VALUES ('6', '知音漫客576期 萌周刊', 'static/images/1362_thumb_G_1568009282521.jpg', '6');
INSERT INTO `index_content_top` VALUES ('7', '知音漫客575期 幻周刊', 'static/images/1360_thumb_G_1567386629654.jpg', '6');
INSERT INTO `index_content_top` VALUES ('8', '知音漫客574期 锐周刊', 'static/images/1358_thumb_G_1566536024389.jpg', '6');
INSERT INTO `index_content_top` VALUES ('9', '知音漫客565期 燃周刊', 'static/images/1329_thumb_G_1561515888065.jpg', '6');
INSERT INTO `index_content_top` VALUES ('10', '知音漫客536期 萌周刊', 'static/images/1542962554908764866.jpg', '6');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(6) NOT NULL,
  `stock` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '《白夜灵异事件》风魂 著', '../static/images/844_thumb_P_1507798040593.jpg', '23.80', '5');
INSERT INTO `list` VALUES ('2', '《白夜灵异事件2》风魂 著', '../static/images/843_thumb_P_1507798039853.jpg', '25.00', '5');
INSERT INTO `list` VALUES ('3', '《哑舍4》玄色著[赠二十八星宿书签] ', 'http://www.zymkshop.com/images/201710/thumb_img/841_thumb_P_1507798027652.jpg', '25.00', '7');
INSERT INTO `list` VALUES ('4', '小说《哑舍1》玄色 著', 'http://www.zymkshop.com/images/201710/1507798028423358375.jpg', '23.80', '345');
INSERT INTO `list` VALUES ('5', '《浮云半书3》城池卷 李惟七', 'http://www.zymkshop.com/images/201710/1507798026647665439.jpg', '28.00', '23');
INSERT INTO `list` VALUES ('6', '小说《浮生物语3上》裟椤双树', 'http://www.zymkshop.com/images/201710/1507798024508563714.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('7', '《半面妆2》萧十一狼', 'http://www.zymkshop.com/images/201710/1507798017563258078.jpg', '28.00', '234');
INSERT INTO `list` VALUES ('8', '小说《浮生物语4鱼门国主》 裟椤双树', 'http://www.zymkshop.com/images/201710/1507798020233058869.jpg', '31.80', '23');
INSERT INTO `list` VALUES ('9', '小说《哑舍2》玄色 著', 'http://www.zymkshop.com/images/201710/1507798016164652937.jpg', '25.00', '64');
INSERT INTO `list` VALUES ('10', '《白夜灵异事件3》风魂 著', 'http://www.zymkshop.com/images/201710/1507798015921449015.jpg', '25.00', '34');
INSERT INTO `list` VALUES ('11', '《白夜灵异事件4》风魂 著', '../static/images/955_thumb_G_1515134075604.jpg', '26.00', '12');
INSERT INTO `list` VALUES ('12', '龙族3黑月之潮(下) 江南', 'http://www.zymkshop.com/images/201710/1507797941714372793.jpg', '36.80', '34');
INSERT INTO `list` VALUES ('13', '《时间海2》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797887107735693.jpg', '26.80', '56');
INSERT INTO `list` VALUES ('14', '北航悠游记2', 'http://www.zymkshop.com/images/201710/1507797882765595139.jpg', '25.00', '87');
INSERT INTO `list` VALUES ('15', '河神计划 由得林洛斯 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797879460986974.jpg', '28.00', '65');
INSERT INTO `list` VALUES ('16', '永夜森林 夜森 ', 'http://www.zymkshop.com/images/201710/1507797878935942877.jpg', '32.00', '45');
INSERT INTO `list` VALUES ('17', '长夜幻歌2 附赠古意字帖 多多', 'http://www.zymkshop.com/images/201710/1507797877789724221.jpg', '36.00', '56');
INSERT INTO `list` VALUES ('18', '《时间海1》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797854372547824.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('19', '《浮云半书1》李惟七', 'http://www.zymkshop.com/images/201710/thumb_img/825_thumb_P_1507797852383.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('20', '半面妆3 萧十一狼 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797846784415726.jpg', '38.80', '45');
INSERT INTO `list` VALUES ('21', '《白夜灵异事件》风魂 著', '../static/images/844_thumb_P_1507798040593.jpg', '23.80', '45');
INSERT INTO `list` VALUES ('22', '《白夜灵异事件2》风魂 著', '../static/images/843_thumb_P_1507798039853.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('23', '《哑舍4》玄色著[赠二十八星宿书签] ', 'http://www.zymkshop.com/images/201710/thumb_img/841_thumb_P_1507798027652.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('24', '小说《哑舍1》玄色 著', 'http://www.zymkshop.com/images/201710/1507798028423358375.jpg', '23.80', '456');
INSERT INTO `list` VALUES ('25', '《浮云半书3》城池卷 李惟七', 'http://www.zymkshop.com/images/201710/1507798026647665439.jpg', '28.00', '3');
INSERT INTO `list` VALUES ('26', '小说《浮生物语3上》裟椤双树', 'http://www.zymkshop.com/images/201710/1507798024508563714.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('27', '《半面妆2》萧十一狼', 'http://www.zymkshop.com/images/201710/1507798017563258078.jpg', '28.00', '45');
INSERT INTO `list` VALUES ('28', '小说《浮生物语4鱼门国主》 裟椤双树', 'http://www.zymkshop.com/images/201710/1507798020233058869.jpg', '31.80', '65');
INSERT INTO `list` VALUES ('29', '小说《哑舍2》玄色 著', 'http://www.zymkshop.com/images/201710/1507798016164652937.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('30', '《白夜灵异事件3》风魂 著', 'http://www.zymkshop.com/images/201710/1507798015921449015.jpg', '25.00', '654');
INSERT INTO `list` VALUES ('31', '《白夜灵异事件3》风魂 著', '../static/images/955_thumb_G_1515134075604.jpg', '26.00', '45');
INSERT INTO `list` VALUES ('32', '龙族3黑月之潮(下) 江南', 'http://www.zymkshop.com/images/201710/1507797941714372793.jpg', '36.80', '56');
INSERT INTO `list` VALUES ('33', '《时间海2》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797887107735693.jpg', '26.80', '45');
INSERT INTO `list` VALUES ('34', '北航悠游记2', 'http://www.zymkshop.com/images/201710/1507797882765595139.jpg', '25.00', '54');
INSERT INTO `list` VALUES ('35', '河神计划 由得林洛斯 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797879460986974.jpg', '28.00', '45');
INSERT INTO `list` VALUES ('36', '永夜森林 夜森 ', 'http://www.zymkshop.com/images/201710/1507797878935942877.jpg', '32.00', '45');
INSERT INTO `list` VALUES ('37', '长夜幻歌2 附赠古意字帖 多多', 'http://www.zymkshop.com/images/201710/1507797877789724221.jpg', '36.00', '45');
INSERT INTO `list` VALUES ('38', '《时间海1》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797854372547824.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('39', '《浮云半书1》李惟七', 'http://www.zymkshop.com/images/201710/thumb_img/825_thumb_P_1507797852383.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('40', '半面妆3 萧十一狼 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797846784415726.jpg', '38.80', '45');
INSERT INTO `list` VALUES ('41', '《白夜灵异事件》风魂 著', '../static/images/844_thumb_P_1507798040593.jpg', '23.80', '45');
INSERT INTO `list` VALUES ('42', '《白夜灵异事件2》风魂 著', '../static/images/843_thumb_P_1507798039853.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('43', '《哑舍4》玄色著[赠二十八星宿书签] ', 'http://www.zymkshop.com/images/201710/thumb_img/841_thumb_P_1507798027652.jpg', '25.00', '45');
INSERT INTO `list` VALUES ('44', '小说《哑舍1》玄色 著', 'http://www.zymkshop.com/images/201710/1507798028423358375.jpg', '23.80', '45');
INSERT INTO `list` VALUES ('45', '《浮云半书3》城池卷 李惟七', 'http://www.zymkshop.com/images/201710/1507798026647665439.jpg', '28.80', '4');
INSERT INTO `list` VALUES ('46', '小说《浮生物语3上》裟椤双树', 'http://www.zymkshop.com/images/201710/1507798024508563714.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('47', '《半面妆2》萧十一狼', 'http://www.zymkshop.com/images/201710/1507798017563258078.jpg', '28.00', '8');
INSERT INTO `list` VALUES ('48', '小说《浮生物语4鱼门国主》 裟椤双树', 'http://www.zymkshop.com/images/201710/1507798020233058869.jpg', '31.80', '9');
INSERT INTO `list` VALUES ('49', '小说《哑舍2》玄色 著', 'http://www.zymkshop.com/images/201710/1507798016164652937.jpg', '25.00', '8');
INSERT INTO `list` VALUES ('50', '《白夜灵异事件3》风魂 著', 'http://www.zymkshop.com/images/201710/1507798015921449015.jpg', '25.00', '7');
INSERT INTO `list` VALUES ('51', '《白夜灵异事件3》风魂 著', '../static/images/955_thumb_G_1515134075604.jpg', '26.00', '7');
INSERT INTO `list` VALUES ('52', '龙族3黑月之潮(下) 江南', 'http://www.zymkshop.com/images/201710/1507797941714372793.jpg', '36.80', '7');
INSERT INTO `list` VALUES ('53', '《时间海2》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797887107735693.jpg', '26.80', '7');
INSERT INTO `list` VALUES ('54', '北航悠游记2', 'http://www.zymkshop.com/images/201710/1507797882765595139.jpg', '25.00', '9');
INSERT INTO `list` VALUES ('55', '河神计划 由得林洛斯 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797879460986974.jpg', '28.00', '8');
INSERT INTO `list` VALUES ('56', '永夜森林 夜森 ', 'http://www.zymkshop.com/images/201710/1507797878935942877.jpg', '32.00', '45');
INSERT INTO `list` VALUES ('57', '长夜幻歌2 附赠古意字帖 多多', 'http://www.zymkshop.com/images/201710/1507797877789724221.jpg', '36.00', '78');
INSERT INTO `list` VALUES ('58', '《时间海1》原晓 知音漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797854372547824.jpg', '25.00', '56');
INSERT INTO `list` VALUES ('59', '《浮云半书1》李惟七', 'http://www.zymkshop.com/images/201710/thumb_img/825_thumb_P_1507797852383.jpg', '25.00', '78');
INSERT INTO `list` VALUES ('60', '半面妆3 萧十一狼 漫客小说绘人气作品', 'http://www.zymkshop.com/images/201710/1507797846784415726.jpg', '38.80', '89');

-- ----------------------------
-- Table structure for magazine
-- ----------------------------
DROP TABLE IF EXISTS `magazine`;
CREATE TABLE `magazine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of magazine
-- ----------------------------
INSERT INTO `magazine` VALUES ('1', '【订阅专拍】《知音漫客》按月订购（请仔细阅读详情页... ', 'static/images/1027_thumb_G_1526371676515.jpg', '40', '知音漫客');
INSERT INTO `magazine` VALUES ('2', '【订阅专拍】《漫客小说绘》按月订购（请仔细阅读详情页... ', 'static/images/1124_thumb_G_1536564320165.jpg', '40', '知音漫客');
INSERT INTO `magazine` VALUES ('3', '知音漫客578期 锐周刊', 'static/images/1371_thumb_G_1569207539895.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('4', '知音漫客573期 燃周刊', 'static/images/1353_thumb_G_1566193736285.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('5', '知音漫客577期 燃周刊', 'static/images/1368_thumb_G_1568768911700.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('6', '知音漫客576期 萌周刊', 'static/images/1362_thumb_G_1568009282521.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('7', '知音漫客575期 幻周刊', 'static/images/1360_thumb_G_1567386629654.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('8', '知音漫客574期 锐周刊', 'static/images/1358_thumb_G_1566536024389.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('9', '知音漫客565期 燃周刊', 'static/images/1329_thumb_G_1561515888065.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('10', '知音漫客536期 萌周刊', 'static/images/1542962554908764866.jpg', '6', '知音漫客');
INSERT INTO `magazine` VALUES ('11', '漫客小说绘', 'http://www.zymkshop.com/images/201809/thumb_img/1124_thumb_G_1536564320165.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('12', '漫客小说绘', 'http://www.zymkshop.com/images/201909/thumb_img/1373_thumb_G_1569383418207.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('13', '漫客小说绘', 'http://www.zymkshop.com/images/201909/thumb_img/1364_thumb_G_1568011699520.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('14', '漫客小说绘', 'http://www.zymkshop.com/images/201909/thumb_img/1363_thumb_G_1568011451355.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('15', '漫客小说绘', 'http://www.zymkshop.com/images/201908/thumb_img/1347_thumb_G_1565254266437.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('16', '漫客小说绘', 'http://www.zymkshop.com/images/201907/thumb_img/1340_thumb_G_1563865205753.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('17', '漫客小说绘', 'http://www.zymkshop.com/images/201907/thumb_img/1335_thumb_G_1563161749337.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('18', '漫客小说绘', 'http://www.zymkshop.com/images/201906/thumb_img/1326_thumb_G_1561360328010.jpg', '0', '漫客小说绘');
INSERT INTO `magazine` VALUES ('19', '漫客绘心', 'http://www.zymkshop.com/images/201909/thumb_img/1365_thumb_G_1568081964712.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('20', '漫客绘心', 'http://www.zymkshop.com/images/201908/1565318574030376182.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('21', '漫客绘心', 'http://www.zymkshop.com/images/201908/1565318236277634671.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('22', '漫客绘心', 'http://www.zymkshop.com/images/201905/1559287717387692307.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('23', '漫客绘心', 'http://www.zymkshop.com/images/201905/1559287715758666293.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('24', '漫客绘心', 'http://www.zymkshop.com/images/201904/1554859168334842173.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('25', '漫客绘心', 'http://www.zymkshop.com/images/201903/thumb_img/1231_thumb_G_1551922117224.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('26', '漫客绘心', 'http://www.zymkshop.com/images/201902/1551320806323545057.jpg', '0', '漫客绘心');
INSERT INTO `magazine` VALUES ('27', '漫客绘意', 'http://www.zymkshop.com/images/201908/thumb_img/1359_thumb_G_1566867707756.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('28', '漫客绘意', 'http://www.zymkshop.com/images/201907/1563864459158190036.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('29', '漫客绘意', 'http://www.zymkshop.com/images/201906/1561432373433484995.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('30', '漫客绘意', 'http://www.zymkshop.com/images/201905/1558411145650914804.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('31', '漫客绘意', 'http://www.zymkshop.com/images/201903/1553494723668027441.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('32', '漫客绘意', 'http://www.zymkshop.com/images/201902/1551236417070677561.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('33', '漫客绘意', 'http://www.zymkshop.com/images/201901/1548206449882836035.jpg', '0', '漫客绘意');
INSERT INTO `magazine` VALUES ('34', '漫客绘意', 'http://www.zymkshop.com/images/201812/1545286731753887825.jpg', '0', '漫客绘意');

-- ----------------------------
-- Table structure for novel
-- ----------------------------
DROP TABLE IF EXISTS `novel`;
CREATE TABLE `novel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of novel
-- ----------------------------
INSERT INTO `novel` VALUES ('1', '一枕山河（全两册）紫微流年 言情武侠经典小说 ', 'static/images/1375_thumb_G_1569479749571.jpg', '59.80');
INSERT INTO `novel` VALUES ('2', '宇宙留言 郑星 漫客小说绘鹿星野 脑洞故事集小说 ', 'static/images/1369_thumb_G_1568774602527.jpg', '32.00');
INSERT INTO `novel` VALUES ('3', '隐世十族2 原晓 收录未刊载结局篇弑神 漫客小说绘... ', 'static/images/1367_thumb_G_1568260450967.jpg', '36.00');
INSERT INTO `novel` VALUES ('4', '青春奇妙物语2 新版 两色风景 小说赠迷你手账本 ', 'static/images/1357_thumb_G_1566455770521.jpg', '36.00');
INSERT INTO `novel` VALUES ('5', '这届和亲的公主不行 石佳 赠草原创意本+书签 灵魂... ', 'http://www.zymkshop.com/images/201909/thumb_img/1368_thumb_G_1568768911700.jpg', '35.00');
INSERT INTO `novel` VALUES ('6', '元尊13九域论战 天蚕土豆 赠百天计划表 ', 'static/images/1352_thumb_G_1565849476053.jpg', '32.80');
INSERT INTO `novel` VALUES ('7', '饕餮记.壹（重制）殷羽 古风美食幻想小说 ', 'static/images/1351_thumb_G_1565849275156.jpg', '39.80');
INSERT INTO `novel` VALUES ('8', '《 无双.上》梦溪石 古风悬疑小说 ', 'static/images/1565244769902420916.jpg', '38.00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `tel` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('26', 'dsf大师傅', 'asdfasdf', 'd123456@163.com', '18339696437');
INSERT INTO `user` VALUES ('27', '一朵小浪花儿', 'ps19980110', 'm183@163.com', '18339696437');
INSERT INTO `user` VALUES ('28', 'wavepray', 'asdfasdf', '12345@qq.com', '18339696437');
INSERT INTO `user` VALUES ('29', '阿斯蒂芬干啥', 'asdfasdf', 'asdfasdf@qq.com', '18339696437');
INSERT INTO `user` VALUES ('30', 'd大师傅asdff', 'asdfasdf', 'dssdff@qq.com', '18339696437');
