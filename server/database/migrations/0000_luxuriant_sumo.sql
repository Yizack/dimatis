CREATE TABLE `downloads` (
	`id` integer PRIMARY KEY NOT NULL,
	`file` text NOT NULL,
	`count` integer DEFAULT 0 NOT NULL,
	`last_download` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `downloads_file_unique` ON `downloads` (`file`);