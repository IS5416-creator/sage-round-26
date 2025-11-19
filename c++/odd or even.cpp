#include <iostream>
using namespace std;
string odd_or_even(int x){
	if(x%2==0){
		return "even";
	}else {
		return "odd";
	}
}
int main(){
    cout<<odd_or_even(5);
	
	return 0;
}