#include <iostream>
using namespace std;
int add(int a,int b){
	int result=a+b;
	return result;
}
int add(int a,int b, int c){
	int result=a+b+c;
	return result;
}
int add(int a,int b, int c,int d){
	int result=a+b+c+d;
	return result;
}
int main(){
	cout<<add(5,6,6,8);
	return 0;
}