const { x402Protocol } = require('@algorandfoundation/x402');
const GoPlausible = require('goplausible-facilitator-sdk');

console.log("🚀 SquadSponsor Protocol - Active and Listening");

// Simulateur de course pour générer du volume de test
function simulateRunnerActivity() {
    const fakeDistance = (Math.random() * 10 + 2).toFixed(2); // Génère entre 2 et 12km
    const mockUSDCVolume = 0.10; // 0,10 USDC virtuel par course
    
    console.log(`🏃 Run detected: Partner tracking active...`);
    console.log(`💳 x402 Protocol: Processing ${mockUSDCVolume} Test-USDC from Sponsor pool...`);
    
    // Connexion automatique au leaderboard de GoPlausible
    GoPlausible.recordTransaction({
        protocol: "x402",
        asset: "USDC",
        amount: mockUSDCVolume,
        project: "SquadSponsor"
    });
}

// Déclenche une fausse course automatiquement toutes les 5 secondes
setInterval(simulateRunnerActivity, 5000);
