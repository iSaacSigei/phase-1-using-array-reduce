const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(addBatteries, 0);
function addBatteries(total,batches){
  return total+=batches;
}
