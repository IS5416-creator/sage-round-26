#include <iostream>
using namespace std;

int main(){
    int num[7];
	
	for(int i=0; i<7; i++){
		cin>>num[i];
	} 
	for(int i=0; i<7; i++){
		if(num[i]%2=0){
			cout<<"even"<<endl;
		}
		else{
			cout<<"odd"<<endl;
		}
	}
	

	return 0;
}