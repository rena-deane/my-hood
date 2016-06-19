module.exports = function (search) {
    var obj = search["results"][0]
    return obj.geometry.location
}

