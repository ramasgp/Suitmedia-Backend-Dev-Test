class Kamus {
    constructor() {
      this.kataSinonim = {};
    }
  
    tambah(kata, sinonim) {
      if (!this.kataSinonim[kata]) {
        this.kataSinonim[kata] = [];
      }
      this.kataSinonim[kata] = this.kataSinonim[kata].concat(sinonim);
    }
  
    ambilSinonim(kata) {
      const semuaSinonim = [];
  
      for (const key in this.kataSinonim) {
        if (key !== kata && this.kataSinonim.hasOwnProperty(key)) {
          if (this.kataSinonim[key].includes(kata)) {
            semuaSinonim.push(key);
          }
        }
      }
  
      return semuaSinonim.concat(this.kataSinonim[kata] || []);
    }
  }
  
  const kamus = new Kamus();
  
  kamus.tambah('big', ['large', 'great']);
  kamus.tambah('big', ['huge', 'fat']);
  kamus.tambah('huge', ['enormous', 'gigantic']);
  
  console.log(kamus.ambilSinonim('big')); 
  console.log(kamus.ambilSinonim('huge')); 
  console.log(kamus.ambilSinonim('gigantic')); 
  console.log(kamus.ambilSinonim('colossal')); 
  