#include <stdio.h>
int main(){
	
	char nome[25];
	float sis1,sis2,sis3,sis4,sis5;
	float dia1,dia2,dia3,dia4,dia5;
	float mediaSIS;
	float mediaDIAS;
	
	printf("digite o nome da cliente: ");
	gets(nome);
	
	
	printf("Digite a pressao de segunda-feira (separado por espacos): ");
	scanf("%f %f",&sis1,&dia1);
	
	printf("Digite a pressao de terca-feira (separado por espacos): ");
	scanf("%f %f",&sis2,&dia2);
	
	printf("Digite a pressoa de quarta-feira (separado por espacos): ");
	scanf("%f %f",&sis3,&dia3);
	
	printf("Digite a pressao de quinta-feira (separado por espacos): ");
	scanf("%f %f",&sis4,&dia4);
	
	printf("Digite a pressao de sexta-feira (separado por espacos): ");
	scanf("%f %f",&sis5,&dia5);
	
	mediaSIS = (sis1 + sis2 + sis3 + sis4 + sis5) / 5;
	mediaDIAS = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
	
	printf("\nCliente: %s",nome);
	printf("\nMedia SIS: %.0f",mediaSIS);
	printf("\nMedia DIA: %.0f",mediaDIAS);
	
	
	return 0;
}
