import 'dotenv/config.js'; 
import usuarioController from './controller/usuarioController.js';
import animeController from './controller/animeController.js';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

const server = express();

server.use(cors());
server.use(express,json());
server.use(usuarioController);
server.use(animeController);

server.listen(process.env.PORT,()=> console.log(`API Conectada na Porta ${process.env.PORT}`));