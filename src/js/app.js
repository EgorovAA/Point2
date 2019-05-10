import {PointV1} from "./lib.js";
import {PointV2} from "./lib.js";


const from = PointV1(1,3);
const to = PointV1(3,2);
console.log(from.calculateDistance(to));
console.log(to.calculateDistance(from));


const atlanticOcean = new PointV2(0,0);
const kazan =new PointV2(4,3);

console.log(kazan.calculateDistance(atlanticOcean));
console.log(atlanticOcean.calculateDistance(kazan));
console.log(kazan);