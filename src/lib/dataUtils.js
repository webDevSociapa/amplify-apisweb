import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve(process.cwd(), 'src', 'lib', 'data.json');



export function readData() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

export function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export function getOrders() {
  const data = readData();
  return data.orders;
}

export function addOrder(order) {
  const data = readData();

  
  data.orders.push(order);
  writeData(data);
}
