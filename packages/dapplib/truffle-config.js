require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember mistake good clinic blue gift'; 
let testAccounts = [
"0x821ce6cdc835f9185cc9a8b784cc50414636dd1239a8c60bcfb143fe589ab496",
"0x43ea51595b7294e19e72f2905a79bb4adb92ef83a3e25bffe71fe9f862f058d1",
"0x228d9fde42d2cf854901fad045f23d1dceb8153f0fb10396371c824b4bf95fa8",
"0xfabe89ff0375829e41890df94bd92233ee2f0dd5a87342c28c3915c30af530eb",
"0x70434bc48cc8805335d6465c5d54f028d7028d5ea67587e5fa10a910f5d64392",
"0x44dc947c756c71e5dfa586e5729ef6262255214a45b31c0f2dc7e8d2fd54a01a",
"0xf9c59d8c4de789041f421a5d9ed5abdfb558f67053a19c565dde92b86b2fb0ec",
"0x8f9150030b6e450254cbce8ed1a74fe50db597ea686aebcc2a10f3bed84b062a",
"0x55058dd526b60cb9d419a60c097d238a9acef20f3a25b936805a484d6d1bb5c8",
"0x5dbe67ed9e9e3b51746373699acca601cf5e3ca973f10e80b482ccce4c12d316"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
