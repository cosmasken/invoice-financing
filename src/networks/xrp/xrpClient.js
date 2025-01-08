import { Client, Wallet } from 'xrpl';

export const xrpClient = {
    /**
     * Connect to the XRP Ledger
     * @returns {Client} The connected client instance.
     */
    async connect() {
        const client = new Client("wss://s2.ripple.com"); // Connect to the Ripple public server
        await client.connect();
        console.log("Connected to XRP Ledger");
        return client;
    },

    /**
     * Create a new wallet on the XRP Ledger
     * @returns {Wallet} A new XRP wallet with a secret and address.
     */
    createWallet() {
        const wallet = Wallet.generate();
        console.log("New wallet created", wallet.classicAddress);
        return wallet;
    },

    /**
     * Get a wallet from a given secret key
     * @param {string} secret The secret key of the wallet
     * @returns {Wallet} The XRP wallet object.
     */
    getWalletFromSecret(secret) {
        const wallet = Wallet.fromSeed(secret);
        console.log("Wallet from secret:", wallet.classicAddress);
        return wallet;
    },

    /**
     * Check the balance of an account
     * @param {string} address The address of the XRP account.
     * @returns {Promise<Object>} The balance details of the account.
     */
    async checkBalance(address) {
        const client = await this.connect();
        const accountInfo = await client.request({
            command: 'account_info',
            account: address,
            strict: true,
            ledger_index: 'validated',
        });

        const balance = accountInfo.result.account_data.Balance;
        console.log(`Balance for ${address}: ${balance}`);
        return balance;
    },

    /**
     * Sign a transaction with a given wallet and submit it to the ledger
     * @param {string} secret The secret key of the wallet.
     * @param {Object} transaction The prepared transaction object.
     * @returns {Promise<Object>} The result of submitting the transaction.
     */
    async signAndSubmitTransaction(secret, transaction) {
        const wallet = this.getWalletFromSecret(secret);
        const client = await this.connect();

        // Sign the transaction
        const signedTx = wallet.sign(transaction);
        console.log("Signed transaction:", signedTx);

        // Submit the transaction to the ledger
        const result = await client.submit(signedTx.tx_blob);
        console.log("Transaction result:", result);
        return result;
    },

    /**
     * Prepare a transaction to send XRP from one account to another
     * @param {string} fromAddress The sending account address.
     * @param {string} toAddress The receiving account address.
     * @param {number} amount The amount of XRP to send (in drops).
     * @returns {Object} The prepared transaction object.
     */
    preparePaymentTransaction(fromAddress, toAddress, amount) {
        return {
            TransactionType: 'Payment',
            Account: fromAddress,
            Destination: toAddress,
            Amount: amount, // amount in drops (1 XRP = 1,000,000 drops)
            Flags: 0,
        };
    },

    /**
     * Send XRP from one account to another.
     * @param {string} fromSecret The secret key of the sending account.
     * @param {string} toAddress The receiving account address.
     * @param {number} amount The amount of XRP to send (in drops).
     * @returns {Promise<Object>} The result of the transaction.
     */
    async sendXRP(fromSecret, toAddress, amount) {
        const wallet = this.getWalletFromSecret(fromSecret);
        const client = await this.connect();

        // Prepare the payment transaction
        const transaction = client.preparePaymentTransaction(wallet.classicAddress, toAddress, amount);

        // Sign and submit the transaction
        const result = await client.signAndSubmitTransaction(fromSecret, transaction);
        return result;
    },
};
