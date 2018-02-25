class MethodChaining {
   constructor(data) {
       this.data = data;
   }

   add(data) {
       this.data += data;
       return this;
   }

}

let m = new MethodChaining();

console.log(m.add(10));