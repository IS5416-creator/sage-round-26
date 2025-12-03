#include <iostream>
using namespace std;

void displayBoard(char b[]) {
    cout << "\n";
    cout << " " << b[0] << " | " << b[1] << " | " << b[2] << "\n";
    cout << "---+---+---\n";
    cout << " " << b[3] << " | " << b[4] << " | " << b[5] << "\n";
    cout << "---+---+---\n";
    cout << " " << b[6] << " | " << b[7] << " | " << b[8] << "\n\n";
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
            cout << "Invalid move! Try again.\n";
            continue;
        }

        board[move] = player;

        if (checkWin(board, player)) {
            displayBoard(board);
            cout << "Player " << player << " wins!\n";
            break;
        }

        if (boardFull(board)) {
            displayBoard(board);
            cout << "It's a draw!\n";
            break;
        }

        player = (player == 'X') ? 'O' : 'X';
    }

    return 0;
}
