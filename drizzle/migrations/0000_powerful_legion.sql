CREATE TABLE `model` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`first_name` varchar(64) NOT NULL,
	`last_name` varchar(64) NOT NULL,
	`age` int NOT NULL,
	`description` text,
	`height` int NOT NULL,
	`weight` int NOT NULL,
	CONSTRAINT `model_id` PRIMARY KEY(`id`)
);
