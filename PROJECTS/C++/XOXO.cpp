#include <iostream>
using namespace std;

void displayBoard(char b[]) {
    cout << endl;
    cout << " " << b[0] << " | " << b[1] << " | " << b[2] << endl;
    cout << "---+---+---"<<endl;
    cout << " " << b[3] << " | " << b[4] << " | " << b[5] << endl;
    cout << "---+---+---"<<endl;
    cout << " " << b[6] << " | " << b[7] << " | " << b[8] << endl;
}

bool checkWin(char b[], char p) {
    int wins[8][3] = {
        {0,1,2}, {3,4,5}, {6,7,8},  
        {0,3,6}, {1,4,7}, {2,5,8},  
        {0,4,8}, {2,4,6}            
    };

    for (auto &w : wins) {
        if (b[w[0]] == p && b[w[1]] == p && b[w[2]] == p)
            return true;
    }
    return false;
}

bool boardFull(char b[]) {
    for (int i = 0; i < 9; i++)
        if (b[i] != 'X' && b[i] != 'O')
            return false;
    return true;
}

int main() {
    char board[9] = {'1','2','3','4','5','6','7','8','9'};
    char player = 'X';
    int move;

    while (true) {
        displayBoard(board);
        cout << "Player " << player << ", enter your move (1-9): ";
        cin >> move;
        move--;

        if (move < 0 || move > 8 || board[move] == 'X' || board[move] == 'O') {
            cout << "Invalid move! Try again."<<endl;
            continue;
        }

        board[move] = player;

        if (checkWin(board, player)) {
            displayBoard(board);
            cout << "Player " << player << " wins!"<<endl;
            break;
        }

        if (boardFull(board)) {
            displayBoard(board);
            cout << "It's a draw!"<<endl;
            break;
        }

        player = (player == 'X') ? 'O' : 'X';
    }

    return 0;
}
