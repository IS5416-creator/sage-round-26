#include <iostream>
using namespace std;

int main(){
	int num1[3]={1,2,5};
	int num2[3]={34,1,5};
	int num3[3]={5,78,9};
	int sum1;
	int sum2;
	int sum3;
	
		for(int i=0; i<3; i++){
			sum1=sum1+num1[i];
		}
		cout<<sum1<<endl;

        for(int i=0; i<3; i++){
			sum2=sum2+num2[i];
		}
		cout<<sum2<<endl;
		
			for(int i=0; i<3; i++){
			sum3=sum3+num3[i];
		}
		cout<<sum3;		
	 
	
	
	return 0;
}