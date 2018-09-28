const getTimestamp = function(date_string) {
    
    let date;

    //that string contains either a unix timestamp or a natural language ?
    let natural_date = new Date(date_string);
    let unix_date = new Date(parseInt(date_string));

    if(natural_date.toUTCString() !== "Invalid Date") date = natural_date;
    else if(unix_date.toUTCString() !== "Invalid Date") date = unix_date;
    else return {"error" : "Invalid Date"};

    const timestamp = {"unix": date.getTime(), "utc": date.toUTCString()};

    return timestamp;
}

module.exports = {
    getTimestamp: getTimestamp
}