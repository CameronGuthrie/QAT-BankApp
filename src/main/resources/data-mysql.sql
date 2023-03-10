insert into user(is_admin, login_attempts, password, username)
values(1,0,'Password1!','administrator1'),
(1,0,'Password1!','administrator2'),
(1,0,'Password1!','administrator3'),
(1,0,'Password1!','administrator4'),
(1,0,'Password1!','administrator5'),
(0,0,'Password1!','user1'),
(0,0,'Password1!','user2'),
(0,0,'Password1!','user3'),
(0,0,'Password1!','user4'),
(0,0,'Password1!','user5');

insert into customer(id,title,surname,first_name,date_of_birth,gender,customer_type,address1,address2,city_town,postcode,phone_no,email)
values(1,'Mr','Cross','Christopher','1983-3-1','M','Consumer','Apartment 203','17 High Street','London','E98 1SN','07846536257','crossc@qabank.com'),
(2,'Mr','Burger','Hamish','1995-3-24','M','Consumer','144 Sherwood Drive','','Portsmouth','PO16 7GZ','07854396851','H.Hamish@gmail.com'),
(3,'Ms','Penn','Blu','1999-7-12','F','Consumer','10 Stationary Way','','Bristol','B33 8TH','07365215472','PennBlu3@outlook.com'),
(4,'Sir','Rule','Jason','1995-2-14','M','Corporate','323 Constellation Road','','Cardiff','W1N 4DJ','07654369825','j_rule@qabank.com'),
(5,'Mrs','Rivers','Florence','1977-4-20','F','Corporate','Unit 17','94 Waterfall Crescent','Southampton','DE55 4SW','07362514586','RiversF@gmail.com'),
(11,'Mr','Rivers','Muddy','1975-12-21','M','Corporate','Unit 17','94 Waterfall Crescent','Southampton','DE55 4SW','07362514586','RiversM@gmail.com'),
(6,'Ms','Forest','Raine','1994-5-5','X','Consumer','5 Autumn Street','','Hayling Island','DH98 1BT','073265487512','Raine.Forest@qabank.com'),
(7,'Mr','Car','Parker','1989-6-30','M','Corporate','88 Wilson Street','','Basingstoke','DH99 1NS','073658754124','P.Car@gmail.com'),
(12,'Mrs','Car','Driva','1987-8-3','F','Corporate','88 Wilson Street','','Basingstoke','DH99 1NS','073658754124','D.Car@gmail.com'),
(13,'Mr','Van Travelling','Camper','1987-9-24','M','Corporate','88 Wilson Street','','Basingstoke','DH99 1NS','073658754124','CamperVT@outlook.com'),
(8,'Lady','Berry','Cherry','1964-9-10','F','Consumer','39 Dessert Lane','','Plymouth','E14 5HQ','072136548755','cherry@berry.com'),
(9,'Ms','Sing','Karoake','1996-8-23','F','Consumer','2 Microphone Road','','Bolton','E14 5JP','076655884515','K.Sing@outlook.com'),
(14,'Dr','Chan','Jackie','1973-10-1','M','Consumer','175 Lethal Drive','','Manchester','E16 1XL','073365221543','Jackie.Chan434@yahoo.com'),
(15,'Mr','Smith','Wilbur','1992-12-21','X','Consumer','50 Neurolizer Street','','Liverpool','SW19 5AE','077754210215','Wilbur.Smith@gmail.com'),
(16,'Prof','Light','Sunny','1954-11-7','M','Consumer','648 Bright Way','','Chelsea','SW1A 2AA','076632558742','Sunny.Light@gmail.com');

insert into branch(id,location,name)
values(1,'London','London'),
(2,'Devon','Devon'),
(3,'Scotland','Scotland'),
(4,'Cornwall','Cornwall'),
(5,'Wales','Wales'),
(6,'Manchester','Manchester'),
(7,'Leeds','Leeds'),
(8,'Reading','Reading');

insert into account(id,balance,min_deposit,number,type,branch_id)
values(1,3775.20,0,'999877695302','999 - Gold Saver Plus',1),
(2,688.45,0,'997790034351','997 - Classic Saver',3),
(3,953.78,0,'999773482698','997 - Classic Saver',6),
(4,2100.00,0,'999716423895','998 - Platinum Credit',4),
(5,1090.50,0,'999207547189','997 - Classic Saver',1),
(6,10862.15,0,'999773241157','996 - Premium Saver',1),
(7,6663.90,0,'999150623215','999 - Gold Saver Plus',6),
(8,520.22,0,'999143537128','996 - Premium Saver',6),
(9,18545.85,0,'999248489229','997 - Classic Saver',5),
(10,45220.92,0,'999864261665','998 - Platinum Credit',1);

insert into customer_account(account_id,customer_id)
values(1,1),
(2,1),
(3,5),
(3,11),
(4,5),
(5,6),
(6,7),
(6,12),
(6,13),
(7,8),
(8,8),
(9,9),
(10,15);

