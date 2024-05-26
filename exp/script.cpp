#include <iostream>
using namespace std;

float addizione(float x, float y) {
    return x + y;
}

float sottrazione(float x, float y) {
    return x - y;
}

float moltiplicazione(float x, float y) {
    return x * y;
}

float divisione(float x, float y) {
    if (y != 0)
        return x / y;
    else {
        cout << "Errore: divisione per zero" << endl;
        return 0;
    }
}

int main() {
    char operatore;
    float num1, num2;

    cout << "Inserisci un'operazione (+, -, *, /): ";
    cin >> operatore;

    cout << "Inserisci il primo numero: ";
    cin >> num1;

    cout << "Inserisci il secondo numero: ";
    cin >> num2;

    switch (operatore) {
        case '+':
            cout << num1 << " + " << num2 << " = " << addizione(num1, num2);
            break;
        case '-':
            cout << num1 << " - " << num2 << " = " << sottrazione(num1, num2);
            break;
        case '*':
            cout << num1 << " * " << num2 << " = " << moltiplicazione(num1, num2);
            break;
        case '/':
            cout << num1 << " / " << num2 << " = " << divisione(num1, num2);
            break;
        default:
            cout << "Operatore non valido";
            break;
    }

    return 0;
}
