class MyDesignPatters {
  counter = 0;
  static staticCounter = 0;
  next() {
    this.counter++;
    //  My Logics..
    console.log("Next Counter Is", this.counter);
  }

  static staticMethod() {
    this.staticCounter++;
    console.log("Static method is getting called", this.staticCounter);
  }
}

const pattern = new MyDesignPatters();
pattern.next();
pattern.next();

const pattern2 = new MyDesignPatters();
pattern2.next();
pattern2.next();
pattern2.next();

MyDesignPatters.staticMethod();
MyDesignPatters.staticMethod();
MyDesignPatters.staticMethod();
