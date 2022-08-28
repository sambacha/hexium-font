var checksum = require('eth-checksum')

console.log(checksum.encode('0x27b1fdb04752bbc536007a920d24acb045561c26'))
console.log(checksum.verify('0x27b1fdb04752bbc536007a920d24acb045561c26'))

// With chain id
console.log(checksum.encode('0x27b1FdB04752BBc536007A920D24ACB045561c26', 30))
console.log(checksum.verify('0x27b1FdB04752BBc536007A920D24ACB045561c26', 30))