#include <iostream>

using namespace std;

int main(){
	int x=15, y=10;
	int sum = x+y;
	int diff = x-y;
	int prod = x*y;
	int div = x/y;
	int rem = x%y;
	bool result = x<y;
	bool cond = (x<y) && true;
	bool condor = (x<y) || true;
	
	cout<<"the sum is "<<sum<<endl;
	cout<<"the diff is "<<diff<<endl;
	cout<<"the prod is "<<prod<<endl;
	cout<<"the div is "<<div<<endl;
	cout<<"the rem is "<<rem<<endl;
	cout<<"the result is "<<result<<endl;
	cout<<"the cond is "<<cond<<endl;
	cout<<"the condor is "<<condor<<endl;
	
	return 0;
}