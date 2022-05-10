# Documentação Moto X
### Requerimentos: 
1.  Node >= 16.14.2
2.  Instalação de Ambiente Expo `npm i -g expo-cli`
3.  Android Stuido
4.  Git
5.  Java openjdk 11.0.15

### Instalação Emulador
1. `cd path/to/project && git clone https://github.com/luizzfranca/MotoX-Teste.git `
2. Pegar ip da sua máquina pois é necessário para rodar junto com o Json-server (para Ubuntu) `Ip a`
3. No arquivo package.json linha 10 substituir `valor-do-ip` por ip adquirido no passo anterior
4. No arquivo `src/services/api.ts` linha 4 subsituir `valor-do-ip` por valor adquirido no passo 2
5. `cd path/to/project && yarn install`
6. Para rodar a API, utilizar o comando `yarn api`
7. `npx react-native start`