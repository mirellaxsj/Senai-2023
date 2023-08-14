#include <stdio.h>
int main(){
	char nome[10];
	int dias;
	float sistolica,diastolica;
	float decisao;
	float Mediasistolica,Mediadiastolica;
	while (decisao = 1 && decisao < 2){
		
		Mediasistolica = 0;
		Mediadiastolica = 0;
		
		printf("Digite o nome: ");
		scanf("%s" ,&nome);
		
		printf("Dias medidos: ");
		scanf("%d" ,&dias);
		
		int sistolica;
		int diastolica;
		
		int i;
		for( i = 0; i < dias ; i++){
			printf("Escreva a pressao sistolica: ");
			scanf("%d" ,&sistolica);
			
			printf("Escreva a pressao diastolica: ");
			scanf("%d" ,&diastolica);
			
			Mediasistolica += diastolica;
			Mediadiastolica += sistolica;
		}
		Mediasistolica /= dias;
		Mediadiastolica /= dias;
		printf("A media da pressao eh: %.2f por %.2f\n" ,Mediasistolica, Mediadiastolica);
		
		printf("Aperte 1 para continuar e 2 para encerrar.\n");
		scanf("%f" ,&decisao);	
	}
	return 0;
}

