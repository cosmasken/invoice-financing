import { xrpClient } from './xrpClient'; // XRP client connection
import { xrpUtils } from './xrpUtils'; // Utility functions for formatting or signing

export const mintNFT = async (invoiceDetails) => {
    try {
        // Create the NFT using invoice details
        const nftData = {
            name: invoiceDetails.invoiceNumber,  // Example: invoice number as the NFT name
            description: `Invoice financing for ${invoiceDetails.amount}`,
            image: invoiceDetails.imageUrl,  // Example: invoice image URL
            attributes: {
                amount: invoiceDetails.amount,
                dueDate: invoiceDetails.dueDate,
                clientName: invoiceDetails.clientName,
            },
        };

        // Connect to the XRP Ledger
        const client = await xrpClient.connect();

        // Prepare and sign the transaction
        const mintTransaction = await xrpUtils.prepareMintTransaction(nftData);
        const signedTx = await client.signTransaction(mintTransaction);

        // Send the transaction to the XRP Ledger
        const result = await client.submitTransaction(signedTx);
        console.log("NFT Minted successfully:", result);
        return result;
    } catch (error) {
        console.error("Error minting NFT:", error);
        throw new Error("Failed to mint NFT on XRP.");
    }
};
