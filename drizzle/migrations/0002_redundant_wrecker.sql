ALTER TABLE `address` DROP FOREIGN KEY `address_toApply_id_toApply_toApply_id_fk`;
--> statement-breakpoint
ALTER TABLE `address` MODIFY COLUMN `toApply_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `address` ADD CONSTRAINT `address_toApply_id_toApply_toApply_id_fk` FOREIGN KEY (`toApply_id`) REFERENCES `toApply`(`toApply_id`) ON DELETE cascade ON UPDATE no action;