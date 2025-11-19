#include <iostream>
using namespace std;
string alphabet(char letter){
	if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
		return "vowel";
	}else {
		return "consonant";
	}
}
int main(){
	cout<<alphabet('f');

}