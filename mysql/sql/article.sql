CREATE TABLE   IF NOT EXISTS  `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  -- `pubDate` timestamp NOT NULL default CURRENT_TIMESTAMP,
  `pubDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `content` text DEFAULT NULL,
  `content1` text DEFAULT NULL,
  `siteName` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8