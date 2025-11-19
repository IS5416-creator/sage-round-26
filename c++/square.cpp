#include <iostream>
using namespace std;
double square(double num){
	double prod;
	prod=num*num;
	return prod;
}
int main(){
	
    double num;
	cin>>num; 
	cout<<square(num);
	return 0;
}