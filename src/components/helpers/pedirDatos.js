import { stock } from "../../data/stockData";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 500);
  });
};


export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            const item = stock.find((el) => el.id === id)
            if (item) {
                resolve (item)
            } else {
                reject ({
                    error: 'No se encontró ese producto'
                })
            }
        }, 500)
    })
}