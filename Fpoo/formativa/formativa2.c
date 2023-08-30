#include <stdio.h>
#include <locale.h>
#include <string.h>
int main (){
	
	setlocale(LC_ALL,"Portuguese");
	char cidade[20], candidato[20][20];
	int numCandidatos, i;
	float votos[20], porcentagem[20], brancos, nulos, totalVotos;
	
	printf("Qual cidade a votação irá acontecer: ");
	scanf("%s" ,&cidade);
	
	printf("Quantos candidatos a cidade %s possui: ", cidade);
	scanf("%d" ,&numCandidatos);
	
	for(i = 1; i <= numCandidatos; i++){
		printf("\nDigite o nome do candidato %d: ", i);
		scanf("%s" ,&candidato[i]);
		
		printf("\nQuantos votos o candidato %s teve: ", candidato[i]);
		scanf("%f" ,&votos[i]);
		
	}
	
	for(i = 1; i <= numCandidatos; i++){
		porcentagem[i] = (votos[i] / totalVotos) * 100;
	}
	
	printf("\nQuantos votos em branco houveram: ");
	scanf("%f" ,&brancos);
	
	printf("\nQuantos votos nulos houveram: ");
	scanf("%f" ,&nulos);
	
	for(i = 1; i <= numCandidatos; i++){
		totalVotos = totalVotos + votos[i];	
	}
	
	totalVotos = totalVotos + brancos;
	
	printf("\n\nCandidatos\tPorcentagem");
	
	for(i = 1; i <= numCandidatos; i++){
		printf("\n%s\t\t%.1f", candidato[i], porcentagem[i]);
	}
	
	return 0;	
}
