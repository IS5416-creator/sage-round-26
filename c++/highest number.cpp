#include <iostream>
using namespace std;

int main(){
	int number[7];
	int biggest=0;
	
	cout<<"add numbers: "<<endl;
	for(int i=0; i<7; i++){
		cin>>number[i];
	}
	  
	for(int i=0; i<7; i++){
		if(biggest<number[i]){
			biggest = number[i];
		}
	}
	cout<<"the biggest number is: "<<biggest<<endl;
	
	return 0;
}