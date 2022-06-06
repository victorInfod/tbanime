import { con } from "./connection";

export async function inserirAnime(anime){
    const comasndo = 
    `INSERIR INTO tb_anime(id_anime, nm_anime)
           VALUES (?,?)`;

    const [resposta] = await con.query(comando,[anime.numero, anime.nome]);
    anime.id = resposta.inserirId;

    return anime;
}