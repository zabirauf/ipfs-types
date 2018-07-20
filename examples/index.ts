import * as IPFS from "typestub-ipfs";
let node = new IPFS({})
console.log('waiting node')
node.on('ready',()=>{
    console.log('node is ready')
    node.stop(()=>console.log('node is closed'))
})
node.on('error',(error:any)=>{
    console.error(error.message)
})
