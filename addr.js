var checksum = require('eth-checksum')

console.log(checksum.encode('0x27b1fdb04752bbc536007a920d24acb045561c26'))
console.log(checksum.verify('0x27b1fdb04752bbc536007a920d24acb045561c26'))

// With chain id
console.log(checksum.encode('0x27b1FdB04752BBc536007A920D24ACB045561c26', 30))
console.log(checksum.verify('0x27b1FdB04752BBc536007A920D24ACB045561c26', 30))
console.log(checksum.encode('0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc', 1))
console.log(checksum.encode('0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc', 26))
//   var chainId30Addr = '0xDBF03B407c01E7CD3cBea99509D93F8Dddc8C6FB'
 // var chainId31Addr = '0xdbF03B407C01E7cd3cbEa99509D93f8dDDc8C6fB'
console.log(checksum.encode('0xdbf03b407c01e7cd3cbea99509d93f8dddc8c6fb', 1))
console.log(checksum.encode('0xdbF03B407C01E7cd3cbEa99509D93f8dDDc8C6fB', 31))