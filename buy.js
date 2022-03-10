// import axios from 'axios'
// import FormData from 'form-data';
import CoinSelection from './coinSelection.js';

//window.$ = window.jQuery = import("jquery");

const S = await import('@emurgo/cardano-serialization-lib-nodejs/cardano_serialization_lib.js');
// const S = import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js');

//const AssetFingerprint = require('@emurgo/cip14-js');
// import {AssetFingerprint} from '@emurgo/cip14-js';

// const _Buffer = (await import('buffer/')).Buffer;
// const _Buffer = (import('buffer/')).Buffer;

//check if connected already
let addressHex = null;
try {

    const promise = await cardano.enable();
    console.log(promise);

	// addressHex = _Buffer.from(
	// 	(await cardano.getUsedAddresses())[0],
	// 	"hex"
	// );	
	// await activateCardano();
} catch (error) {
    
  console.log(error)
}
