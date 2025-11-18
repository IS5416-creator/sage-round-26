#include <iostream>
using namespace std;

int main(){
	int number[3];
	int smallest;
	
	cout<<"add numbers: "<<endl;
	for(int i=0; i<3; i++){
		cin>>number[i];
	}
	  smallest=number[0];
	for(int i=0; i<3; i++){
		if(smallest>number[i]){
			smallest = number[i];
		}
	}
	cout<<"the smallest number is: "<<smallest<<endl;
	
	return 0;
}