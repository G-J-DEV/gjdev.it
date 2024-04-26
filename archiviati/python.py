from flask import Flask

# Inizializza l'app Flask
app = Flask(__name__)

# Definisci una route e una funzione per gestirla
@app.route('/')
def index():
    return 'Benvenuto nel mio sito web!'

# Avvia l'applicazione se questo script è eseguito
if __name__ == '__main__':
    app.run(debug=True)
