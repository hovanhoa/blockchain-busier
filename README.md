# Blockchain busier

This project use to run script make blockchain busier

-   [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
-   [Dotenv](https://github.com/motdotla/dotenv): loads environment variables from .env
-   [Openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts): a library for secure smart contract development

## Usage

### Pre Requisites

First, config the `.env` file (ex `.env.example`)
```
RPC_ENDPOINT=""
PRIVATE_KEY=""
OTHER_ADDRESS=""
```

Before running any command, make sure to install dependencies:

```sh
npm install
```

### Run

```sh
npm run script
```

### Run with detached mode

```sh
nohup npm run script &
```

### Kill the process by nohup
```sh
ps -ef | grep script
kill <pid>
```

## License

Distributed under the MIT License.
