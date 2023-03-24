function getAcceleration(obj) {
    if (obj.m !== undefined && obj.f !== undefined) {
        if (obj.m !== 0) {
            return obj.f / obj.m;
        } else {
            return "impossible";
        }
    } else if (obj.Δv !== undefined && obj.Δt !== undefined) {
        if (obj.Δt !== 0) {
            return obj.Δv / obj.Δt;
        } else {
            return "impossible";
        }
    } else if (obj.d !== undefined && obj.t !== undefined) {
        if (obj.t !== 0) {
            return (2 * obj.d) / (obj.t ** 2);
        } else {
            return "impossible";
        }
    } else {
        return "impossible";
    }
}
  