
INSERT INTO tb_usuario(ds_email, ds_senha)
	  VALUES ('admin@admin.com.br', '1234');
      
      
	-- login
     SELECT id_usuario		id,
			ds_email   		email, 
            ds_senha		senha
       FROM tb_usuario            
      WHERE ds_email = 		'admin@admin.com.br'
        AND ds_senha =  	'1234';

-- adicionar animes
INSERT INTO tb_anime(id_usuario, nm_anime)
	 VALUES (1, 'Dragon ball');
     
SELECT id_anime		id,
	   nm_anime		nome
 FROM  tb_anime,  