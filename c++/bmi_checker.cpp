#include <iostream>

using namespace std;

main(){
	double x, y;
	double bmi=x/(y*y);
	
	cout<<"Weight: ";
	cin>>x;
	cout<<"Height: ";
	cin>>y;
	
	if((x/(y*y))<18.5){
		cout<<"Underweight";
	}else if((x/(y*y))>=18.5 && (x/(y*y))<=24.9){
		cout<<"Normal";
	}else if((x/(y*y))>=25 && (x/(y*y))<=29.9){
		cout<<"OverWeight";
	}else {
		cout<<"OBESE";
	}
	

	return 0;
}