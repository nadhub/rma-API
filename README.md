## API Restful  
Api Rest (json) utilisant :

- Node.js avec le framework Epress
- Mongodb (mongoose) pour la persistence des données
- passport.js et JWT (json web token) pour l'authentification
- socket.io pour le websocket

## Installation pour test

Declarer d'abord une variable d'environnement TARGET
```
Sous Linux: export TARGET=dev
```
```
Sous Windows: set TARGET=dev
```
Clone du repository: 
```
git clone https://github.com/nadhub/rma-API.git
```
Install les dépendances 

```
npm install
``` 
lancer l'application 
```
gulp
```

