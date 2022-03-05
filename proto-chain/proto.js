import { o3 } from "proto-chain/protochain2.js";

const logProto = (obj) => {
  if (!obj.prototype)
    return null;
  else {
    console.log(obj.prototype);
    return logProto(obj.prototype);
  }
};

logProto(o3);
