#include <iostream>

using namespace std;

int main(){
	int marks[5];
	
	cout<<"enter marks: ";
	for(int i=0; i<5; i++){
	cin>>marks[i];	
	}
	 
	
	cout<<"you entered";
	for(int i=0; i<5; i++){
		cout<<marks[i]<<"";
	}
	 
	
	return 0;
}