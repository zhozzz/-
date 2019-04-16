//引入js文件
import CryptoJS from 'crypto-js'


//后台接口加密解密
// 			 setBase(pw){
// 							var decrypt = CryptoJS.DES.decrypt('gbUDQHb4Xo05Kq7QkXkwbA==', CryptoJS.enc.Utf8.parse(12345678), {
// 								mode: CryptoJS.mode.ECB,
// 								padding: CryptoJS.pad.Pkcs7
// 							}).toString(CryptoJS.enc.Utf8);
// 							console.log(decrypt);
// 						var encrypt = CryptoJS.DES.encrypt(this.mes, CryptoJS.enc.Utf8.parse(12345678), {
// 							mode: CryptoJS.mode.ECB,
// 							padding: CryptoJS.pad.Pkcs7
// 						}).toString();
// 							console.log(encrypt);
//         }