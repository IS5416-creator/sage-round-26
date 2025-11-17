#include <iostream>

using namespace std;

int main (){
	int age = 1;
	
	if (age>=18){
		cout<<"adult"<<endl;
	}
	else if (age>=13){
		cout<<"teenager"<<endl;
	}
	else {
		cout<<"child"<<endl;
	}
	
	return 0;
}