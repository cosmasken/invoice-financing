
# Invoice Financing Application

## Overview

This application is an open-source platform for invoice financing, providing functionalities such as:

- Creating and managing wallets for multiple currencies and networks.
- Viewing and financing invoices.
- Minting invoices as NFTs on multiple blockchain networks (e.g., XRP Ledger, Hedera Hashgraph, EVM-compatible chains, and Aptos).

The app is built with a focus on scalability and seamless user experience, adhering to consistent design styles throughout. As a public goods project, it is designed to be accessible and beneficial to the broader Web3 ecosystem.

## Features

- **Wallet Management**:
  - Generate wallets and addresses.
  - Add wallets for multiple currencies and networks.
  - View balances across various currencies.
- **Invoice Financing**:
  - Submit invoices for financing.
  - Calculate payouts with transparent financing fees.
- **NFT Integration**:
  - Mint invoices as NFTs on supported blockchain networks.
- **User Dashboard**:
  - Separate dashboards for financiers and regular users.
  - View analytics, transactions, and more.
- **Error Handling**:
  - Custom 404 page with navigation options.

## Tech Stack

### Frontend

- **React**: Used for building the user interface.
- **Tailwind CSS**: For styling and layout.
- **PropTypes**: For type-checking React components.

### Backend

- **Node.js / Express**: Backend framework (can be customized based on requirements).
- **Database**: MongoDB for local development and scaling, with options to use managed services like Atlas for production.

### Blockchain

- **XRP Ledger** (Integrated): Used for NFT minting and transaction management.
- **Hedera Hashgraph (HBAR)**(Integrated): Supports invoice minting and blockchain transactions.
- **EVM Compatible Chains**(In Progress): Enabling smart contract-based invoice financing.
- **Aptos**(In Progress): (Planned): Expanding to Move-based smart contract functionality.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cosmasken/invoice-financing.git
   cd invoice-financing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Configuration

- Configure your `.env` file for backend APIs, blockchain credentials, and database URLs. Example:

  ```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_XRP_NETWORK=testnet
REACT_APP_HBAR_NETWORK=testnet
REACT_APP_EVM_NETWORK=sepolia
REACT_APP_APTOS_NETWORK=testnet
  ```

## Folder Structure

```
src/
|-- components/        # Reusable React components
|-- pages/             # Page-level components (e.g., Dashboard, NotFound)
|-- stores/            # State management with custom hooks (e.g., WalletStore)
|-- utils/             # Utility functions and helpers
|-- styles/            # Tailwind CSS configuration and global styles
|-- App.js             # Main application file
|-- index.js           # Entry point
```

## Usage

- **Wallet Management**:

  1. Navigate to the Wallets page.
  2. Click "Add Wallet" and select a currency and network.
  3. View balances and manage addresses.

- **Invoice Financing**:

  1. Submit an invoice via the "Upload Invoice" feature.
  2. View financing options and payouts.

- **NFT Minting**:

  1. Navigate to the Mint Invoice page.
  2. Select the invoice and blockchain network.
  3. Mint the invoice as an NFT.

## Testing

- Run unit tests:
  ```bash
  npm test
  ```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to your hosting service (e.g., Vercel, Netlify).

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to your branch and create a Pull Request.


## Donations

Support the development and growth of this public goods project by donating in XRP, HBAR, Whitechain, Aptos, or other cryptocurrencies. Your contributions help us enhance the platform and add more features for the community.

### XRP Donations
- **Wallet Address**: `rUzWJkXyEtT8ekSSxkBYPqCvHpngcy6Fks`
- **Destination Tag**: `6272199`

### HBAR Donations
- **Wallet Address**: `0.0.15852`
- **Memo**: `6028926`

### Popular Currencies
You can also support us using other popular cryptocurrencies:
- **Bitcoin (BTC)**: `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`
- **EVM**: `0x8546e595004c4e2bb9dc55228977e3f382656598`
- **USDT (TRC20)**: `TL8VBNjAQs8WuTUqrF1xaCXkVw3gHmuG6s`

Every contribution, no matter the size, is greatly appreciated. Thank you for supporting the app!


## License

This project is licensed under the [MIT License](LICENSE).
This project is licensed under the [MIT License](LICENSE), an open-source license that allows for modification, distribution, and private or commercial use. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, please reach out to [[arubacosmas@gmail.com](mailto:arubacosmas@gmail.com)].
