#include <stdio.h>
int main (){
	
	//Declara��o de v�riaveis
	int media;
	
	//Entrada de dados
	printf("Dgite a m�dia final do aluno de 0 a 100: ");
	scanf("%d",&media);
	
	//Processamento e sa�da com condicional
	if(media >=50)
		printf("Aprovado");
	else
		printf("Reprovado");
		
	//Fim
	return 0;
  }
