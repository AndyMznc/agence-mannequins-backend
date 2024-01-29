CREATE TABLE `address` (
	`address_id` int AUTO_INCREMENT NOT NULL,
	`number` varchar(16) NOT NULL,
	`street` varchar(64) NOT NULL,
	`city` varchar(64) NOT NULL,
	`zip_code` varchar(16) NOT NULL,
	`country` varchar(64) NOT NULL,
	`toApply_id` int,
	CONSTRAINT `address_address_id` PRIMARY KEY(`address_id`)
);
--> statement-breakpoint
CREATE TABLE `admin` (
	`admin_id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(64) NOT NULL,
	`last_name` varchar(64) NOT NULL,
	`createdAt` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime,
	`deletedAt` datetime,
	CONSTRAINT `admin_admin_id` PRIMARY KEY(`admin_id`)
);
--> statement-breakpoint
CREATE TABLE `authentification` (
	`authentification_id` int AUTO_INCREMENT NOT NULL,
	`user_type` enum('model','admin') NOT NULL,
	`user_id` int NOT NULL,
	`email` varchar(128) NOT NULL,
	`password` varchar(64) NOT NULL,
	`model_id` int,
	CONSTRAINT `authentification_authentification_id` PRIMARY KEY(`authentification_id`)
);
--> statement-breakpoint
CREATE TABLE `pastExperience` (
	`pastExperience_id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(64),
	`description` text,
	`model_id` int,
	CONSTRAINT `pastExperience_pastExperience_id` PRIMARY KEY(`pastExperience_id`)
);
--> statement-breakpoint
CREATE TABLE `photo` (
	`photo_id` int AUTO_INCREMENT NOT NULL,
	`photo` varchar(2048),
	`model_id` int,
	CONSTRAINT `photo_photo_id` PRIMARY KEY(`photo_id`)
);
--> statement-breakpoint
CREATE TABLE `toApply` (
	`toApply_id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(64) NOT NULL,
	`last_name` varchar(64) NOT NULL,
	`age` int NOT NULL,
	`description` text,
	`photo` varchar(2048) NOT NULL,
	`height` int NOT NULL,
	`weight` int NOT NULL,
	`availability` boolean DEFAULT false,
	CONSTRAINT `toApply_toApply_id` PRIMARY KEY(`toApply_id`)
);
--> statement-breakpoint
ALTER TABLE `model` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `model` ADD PRIMARY KEY(`model_id`);--> statement-breakpoint
ALTER TABLE `model` ADD `model_id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `model` ADD `gender` enum('Male','Female','Other') NOT NULL;--> statement-breakpoint
ALTER TABLE `model` ADD `eyesColor` enum('blue','green','brown','grey','black','heterochromia') NOT NULL;--> statement-breakpoint
ALTER TABLE `model` ADD `hairColor` enum('blond','brunette','red','black','white','grey','bald') NOT NULL;--> statement-breakpoint
ALTER TABLE `model` DROP COLUMN `id`;--> statement-breakpoint
ALTER TABLE `address` ADD CONSTRAINT `address_toApply_id_toApply_toApply_id_fk` FOREIGN KEY (`toApply_id`) REFERENCES `toApply`(`toApply_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `authentification` ADD CONSTRAINT `authentification_model_id_model_model_id_fk` FOREIGN KEY (`model_id`) REFERENCES `model`(`model_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pastExperience` ADD CONSTRAINT `pastExperience_model_id_model_model_id_fk` FOREIGN KEY (`model_id`) REFERENCES `model`(`model_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `photo` ADD CONSTRAINT `photo_model_id_model_model_id_fk` FOREIGN KEY (`model_id`) REFERENCES `model`(`model_id`) ON DELETE no action ON UPDATE no action;