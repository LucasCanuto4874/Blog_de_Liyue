CREATE DATABASE blog_genshin;
USE blog_genshin;

CREATE TABLE usuario (
idUsuario INT primary key auto_increment,
email varchar(45),
nome varchar(45),
senha varchar(8),
elementoFav varchar(8)
);

CREATE TABLE publicacao (
idPublicacao INT primary key auto_increment,
texto mediumtext
);

CREATE TABLE comentarios (
fkUsuario INT,
fkPublicacao INT, 
idComentario INT auto_increment, 
descricao varchar(200),
dtComentario datetime default current_timestamp,

primary key (idComentario),
unique (fkUsuario, fkPublicacao, idComentario),
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkPublicacao) references publicacao(idPublicacao)
);