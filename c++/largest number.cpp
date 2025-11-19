#include <iostream>
using namespace std;
string largestnum(int a, int b){
	if(a>b){
		return to_string(a);
	} else if(a<b) {
		return to_string(b);
	}else {
		return "the numbers are equal";
	}
	
}
int main(){
	
    cout<<largestnum(2,2);
	return 0;
}