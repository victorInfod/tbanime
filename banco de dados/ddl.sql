CREATE database infoDanimeDB;
USE infoDanimeDB;
DROP database infoDanimeDB;

CREATE table tb_anime( 
	id_anime 	int,
    nm_anime 	varchar(20)
);

CREATE table tb_usuario( 
	id_usuario 	int primary key auto_increment,
    ds_email 	varchar(200),
	ds_senha 	varchar(20)
);