export function PointV1(x, y) {
    const clean = {};
    clean.x = x;
    clean.y = y;
    clean.calculateDistance = function (target) {
        return ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) ** 0.5;

    };
    return clean;
}


export function PointV2(x, y) {
    this.x = x;
    this.y = y;
    this.calculateDistance = function (target) {
        return ((this.x - target.x) ** 2 + (this.y - target.y) ** 2) ** 0.5;

    };

}