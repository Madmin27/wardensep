require('dotenv').config();
const { ethers } = require('ethers');

//const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const INFURA_PROJECT_URL = process.env.INFURA_PROJECT_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RECEIVER_ADDRESS = process.env.RECEIVER_ADDRESS;


const provider = new ethers.providers.JsonRpcProvider(`${INFURA_PROJECT_URL}`);

const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Rastgele miktarda ETH gönder
function getRandomEthAmount() {
    const min = ethers.utils.parseEther('0.0001');
    const max = ethers.utils.parseEther('0.004');
    const randomAmount = ethers.utils.parseEther((Math.random() * (0.004 - 0.0001) + 0.0001).toFixed(4));
    return randomAmount;
}

// Transfer 
async function sendRandomEth() {
    const amount = getRandomEthAmount();
    const tx = {
        to: RECEIVER_ADDRESS,
        value: amount
    };

    try {
        const transaction = await wallet.sendTransaction(tx);
        console.log(`Transaction sent: ${transaction.hash}`);
        await transaction.wait();
        console.log(`Transaction confirmed: ${transaction.hash}`);
    } catch (error) {
        console.error(`Error sending transaction: ${error}`);
    }
}

// Rastgele gönder bot olduğu belli olmasın
function startSending() {
    setInterval(() => {
        sendRandomEth();
    }, Math.random() * (30000 - 20000) + 20000);
}


startSending();
