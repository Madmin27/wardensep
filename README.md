# wardensep
warden için Gueste kayıt olurken, warden node kurarkenki warden adresinin keyini alıp, metamaska import ettik
Aynı keyi birazdan .env içerisine kaydedeceğiz


    mkdir wsendsep
    cd wsendsep
    
    npm init -y

    npm install ethers dotenv
    npm uninstall ethers

    npm install ethers@5

    screen -S wsendsep

.env içine infura sepolia rpc bulmanız lazım
    
    nano .env
    nano wsendsep.js

çalıştır

    node wsendsep.js
