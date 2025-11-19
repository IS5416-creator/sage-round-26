#include <iostream>
using namespace std;

int main(){
    int num[7];
    int odd=0, even=0;
	
	for(int i=0; i<7; i++){
		cout<<"enter numbers: "<<endl;
		cin>>num[i];
	} 
	for(int i=0; i<7; i++){
		if(num[i]%2=0){
			even == even+1;
		}
		else{
			odd == odd+1;
		}
		cout<<"even: "<<even<<endl;
		cout<<"odd: "<<odd;
	}
	

	return 0;
}