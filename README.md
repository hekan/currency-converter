# currency-converter
### Getting started
#####Install dependencies
`npm i`
#####Run locally
`npm run start`
#####Build
`npm run build`
    
### Requirements
* **Wallets** for every currency, at least three
* Two input fields: 
    1) Top presents debt (-)
    2) Bottom presents credit (+)
* Both inputs allow to enter 0-9 with 2 decimals
* Should be possible to **exchange** between **wallets**
* Each currency should have exchange rate
* Exchange rate polls every 10 seconds. But it should update the store only if changed
* Exchange rate has unlimited decimals, but only four shown

### Tech Stack
* React, Redux (or other) and Jest

#### Components
* currency dropdown
* funds on wallet
* swap wallets
* exchange rate between selected currencies (1$ = 3.8 PLN)
* exchange button
