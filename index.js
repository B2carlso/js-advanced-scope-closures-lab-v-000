function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    start = parseInt(startBlock);
    end = parseInt(endBlock);
    distance = Math.abs(end - start);
    range = blockRange - distance;

    if (range <0) {
      return `${Math.abs(range)} blocks out of range`;
    } else {
      return `within range by ${range}`;
    }
  }
}


function produceTipCalculator(tipAmount) {
  return function(ridePrice) {
    return `${Math.abs(tipAmount * ridePrice)}`;
  }
}
