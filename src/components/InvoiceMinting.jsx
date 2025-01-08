import React, { useState } from 'react';
import { mintNFT } from '../networks/xrp/xrpMinting';

const InvoiceMinting = ({ invoiceDetails }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleMinting = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await mintNFT(invoiceDetails);
            setSuccess(true);
            console.log("NFT Minted:", result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="invoice-minting">
            <h2>Mint Invoice as NFT</h2>
            <button
                className="mint-button"
                onClick={handleMinting}
                disabled={loading}
            >
                {loading ? "Minting..." : "Mint NFT"}
            </button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">NFT Minted successfully!</p>}
        </div>
    );
};

export default InvoiceMinting;
