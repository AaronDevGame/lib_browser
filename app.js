
var setup = async() => {

    // This returns wasm error, maybe because we cannot access data on this?
    const getEmurgo = await import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');

    // This library is ok, but cardano cannot find on this lib
    
    // const getEmurgo = await import('@emurgo/cardano-serialization-lib-nodejs/cardano_serialization_lib.js');

    console.log(getEmurgo);
    // console.log(cardano);


	// const { default: buy } = await import('./buy.js');

    // const nami_lib = await import('nami-wallet-api');
    // console.log(nami_lib);

    //
    // const Nami = await nami_lib.NamiWalletApi(
    // window.cardano, //nami wallet object
    // "<blockfrost-api-key>"
    // )
};

setup();