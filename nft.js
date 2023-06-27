// create a variable to hold your NFT's
const nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, shirtType, bling) {
  const nft = {
    name,
    eyeColor,
    shirtType,
    bling,
  };
  nfts.push(nft);
  return nft;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (const nft of nfts) {
    console.log("Name: " + nft.name);
    console.log("Eye color: " + nft.eyeColor);
    console.log("Shirt type: " + nft.shirtType);
    console.log("Bling: " + nft.bling);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}

// call your functions below this line
mintNFT("My First NFT", "Blue", "T-Shirt", "Gold");
mintNFT("My Second NFT", "Green", "Sweatshirt", "Diamond");
listNFTs();
console.log("Total supply: " + getTotalSupply());
