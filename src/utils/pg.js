const komaSatu = [4,7,10,13,16,19,22,25,28]
const komaDua = [5,8,11,14,17,20,23,26,29]
const komeTiga = [6,9,12,15,18,21,24,27,30]



const formatRupiah = (param) => {
  const angka = String(param);
  let hasil = "";

  for (let i = 0; i < angka.length; i++) {
    // const element = array[i];
    if (angka.length >= 4) {
      i == 1 ? (hasil += ",") : "";
    }
    hasil += angka[i];
  }
  console.log(hasil);
};
2,000,000,000
4 7 10 13 16 19 22
formatRupiah(2000);

const coba = "padil";
const hasil = coba.slice(0, 3) + "," + coba.slice(4);

// console.log(hasil);

// for (let i = 0; i < angka.length; i++) {
//     //     if (angka.length >= 4) {
//     //       hasil[0] += ",";
//     //     }
//     //     hasil += angka[i];
//     //   }
