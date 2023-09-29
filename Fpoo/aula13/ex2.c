#include <stdio.h>
#include <locale.h>

//Constantes
#define LARGURA 80

//Vari�veis GLOBAIS
FILE *arquivo;
char linha[LARGURA];
char nomeArquivo[] = "dados.txt";
char nomeResult[] = "resultado.txt";

//Fun��es
int contElementos(){
	int cont = 0;
	arquivo = fopen(nomeArquivo,"r");
	if(arquivo == NULL){
		printf("Erro ao ler arquivo\n");
	}else{
		fgets(linha,LARGURA,arquivo);
		cont = 1;
		strtok(linha," ");
		while(strtok(NULL," ")!=NULL) cont++;
		fclose(arquivo);
	}
	return cont;
}

float calcMedia(int cont){
	int i;
	float soma = 0;
	arquivo = fopen(nomeArquivo,"r");
	if(arquivo == NULL){
		printf("Erro ao ler arquivo\n");
	}else{
		fgets(linha,LARGURA,arquivo);
		soma += atoi(strtok(linha," "));
		for(i = 1; i < cont; i++)
			soma += atoi(strtok(NULL," "));
		fclose(arquivo);
	}
	return soma / cont;
}

void criarArquivo(float resultado){
	arquivo = fopen(nomeResult,"w");
	fprintf(arquivo, "%.1f", resultado);
	fclose(arquivo);	
}

//Programa Principal
int main(){
	setlocale(LC_ALL,"");
	int cont = contElementos();
	float media = calcMedia(cont);
	printf("O arquivo possui %d elementos\n",cont);
	printf("A m�dia dos elementos � %.1f\n", media);
	criarArquivo(media);
}
