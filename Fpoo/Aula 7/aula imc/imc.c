#include <stdio.h>
#include <locale.h>
int main(){
	
	char nome[100];
	float peso;
	float altura;
	float media;
	int decisao;

	do{

	printf("Nome do paciente: ");
	scanf("%s" ,&nome);
	
	printf("Digite o peso em Kg: ");
	scanf("%f" ,&peso);
	
	printf("Digite a altura em Metros: ");
	scanf("%f" ,&altura);
	
	media =  peso / (altura * altura);
	
	printf("O IMC eh: %.f" ,media);
	 
	if ( media < 18.5 ){
		printf("magreza\n");
		
	}else if ( media >=18.5 && media <= 24.9){
		printf("normal\n");	
	}
	else if ( media >=25 && media <= 29.9){
		printf("sobrepeso\n");
		
	}else if ( media >=30 && media <= 39.9){
		printf("obesidade\n");

	}else{
		printf("obesidade grave\n");
	}
	printf("Digite 1 para continuar e 0 para encerrar\n");
	scanf("%d" ,&decisao);
}while(decisao);
	
	return 0;
}
