# Hello FHEVM (Zama Devnet Tutorial)

Minimal Hardhat + TypeScript projesi, Zama FHEVM ekosistemine hızlı onboarding için tasarlandı. Bu proje gerçek FHE işlemleri yapmaz; şifreli veriyi `bytes` olarak tutan basit bir sözleşme ve scriptlerle örnek akış sağlar.

## Özellikler
- Hardhat + TypeScript yapılandırması
- Mock "encrypted" değişken tutma (bytes)
- Deploy ve etkileşim scriptleri (Zama Devnet)
- Basit testler (chai + hardhat)
- ESLint + Prettier
- CI iş akışı (lint, typecheck, build, test ve basit RPC health check)

## Ağ Bilgisi (Zama Devnet)
- `chainId`: `9000`
- `symbol`: `ZAMA`
- `rpc`: `https://devnet.zama.ai`

## Hızlı Başlangıç

### 1) Kurulum
```bash
npm install
```

### 2) Ortam değişkenleri
`.env` dosyasını oluşturun:
```env
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
TESTNET_RPC_URL=https://devnet.zama.ai
CONTRACT_ADDRESS=0xDeployedContractAddress
```
Örnek için `.env.example` dosyasına bakın.

### 3) Derleme ve test
```bash
npm run build
npm run test
```

### 4) Deploy (Zama Devnet)
```bash
npm run deploy
```
Komut tamamlandığında sözleşme adresini çıktıdan alın ve `.env` içindeki `CONTRACT_ADDRESS` değerini güncelleyin.

### 5) Etkileşim
```bash
npm run interact
```
Mevcut ciphertext'i okur ve yeni bir değer yazar.

## Sözleşme
`contracts/EncryptedHello.sol` şifreli veriyi temsil eden `bytes` tutar ve basit bir `hello()` metodu ile bir mock FHE operasyonu (`mockAdd`) içerir.

## Notlar
- Bu proje eğitim amaçlıdır; gerçek FHE işlemleri içermez.
- Ethers v6 ve Hardhat Tooling kullanır.
- CI pipeline, kod kalitesi ve temel sağlık kontrolü için örnek olarak eklenmiştir.