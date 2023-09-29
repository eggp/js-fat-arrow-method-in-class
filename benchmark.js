import {
  NormalEgg1,
  NormalEgg2,
  NormalEgg3,
  NormalEgg4,
} from "./normal-egg.js";
import {
  MisunderstoodEgg1,
  MisunderstoodEgg2,
  MisunderstoodEgg3,
  MisunderstoodEgg4,
} from "./misunderstood-egg.js";

export class Benchmark {
  #testIteration = 1000000;
  /**
   *
   * @type {Map<String,number[]>}
   */
  #results = {};

  start() {
    console.log(`Start benchmark, iteration per test ${this.#testIteration}`);

    this.#results["NormalEgg1"] = [];
    this.#results["NormalEgg1"].push(this.#testNormalEgg1());
    this.#results["NormalEgg1"].push(this.#testNormalEgg1());
    this.#results["NormalEgg1"].push(this.#testNormalEgg1());

    this.#results["NormalEgg2"] = [];
    this.#results["NormalEgg2"].push(this.#testNormalEgg2());
    this.#results["NormalEgg2"].push(this.#testNormalEgg2());
    this.#results["NormalEgg2"].push(this.#testNormalEgg2());

    this.#results["NormalEgg3"] = [];
    this.#results["NormalEgg3"].push(this.#testNormalEgg3());
    this.#results["NormalEgg3"].push(this.#testNormalEgg3());
    this.#results["NormalEgg3"].push(this.#testNormalEgg3());

    this.#results["NormalEgg4"] = [];
    this.#results["NormalEgg4"].push(this.#testNormalEgg4());
    this.#results["NormalEgg4"].push(this.#testNormalEgg4());
    this.#results["NormalEgg4"].push(this.#testNormalEgg4());

    this.#results["MisunderstoodEgg1"] = [];
    this.#results["MisunderstoodEgg1"].push(this.#testMisunderstoodEgg1());
    this.#results["MisunderstoodEgg1"].push(this.#testMisunderstoodEgg1());
    this.#results["MisunderstoodEgg1"].push(this.#testMisunderstoodEgg1());

    this.#results["MisunderstoodEgg2"] = [];
    this.#results["MisunderstoodEgg2"].push(this.#testMisunderstoodEgg2());
    this.#results["MisunderstoodEgg2"].push(this.#testMisunderstoodEgg2());
    this.#results["MisunderstoodEgg2"].push(this.#testMisunderstoodEgg2());

    this.#results["MisunderstoodEgg3"] = [];
    this.#results["MisunderstoodEgg3"].push(this.#testMisunderstoodEgg3());
    this.#results["MisunderstoodEgg3"].push(this.#testMisunderstoodEgg3());
    this.#results["MisunderstoodEgg3"].push(this.#testMisunderstoodEgg3());

    this.#results["MisunderstoodEgg4"] = [];
    this.#results["MisunderstoodEgg4"].push(this.#testMisunderstoodEgg4());
    this.#results["MisunderstoodEgg4"].push(this.#testMisunderstoodEgg4());
    this.#results["MisunderstoodEgg4"].push(this.#testMisunderstoodEgg4());

    this.#calculateResult();
  }

  #calculateResult(){
    console.log('Result:');
    Object.entries(this.#results).forEach(([key, times])=>{
      console.log(`${key} => ${times.reduce((prev,curr)=>prev+curr,0)/times.length}`);
    });
  }

  #testNormalEgg1() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new NormalEgg1());
    }

    return performance.now() - startTime;
  }

  #testNormalEgg2() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new NormalEgg2());
    }

    return performance.now() - startTime;
  }

  #testNormalEgg3() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new NormalEgg3());
    }

    return performance.now() - startTime;
  }

  #testNormalEgg4() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new NormalEgg4());
    }

    return performance.now() - startTime;
  }

  #testMisunderstoodEgg1() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new MisunderstoodEgg1());
    }

    return performance.now() - startTime;
  }

  #testMisunderstoodEgg2() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new MisunderstoodEgg2());
    }

    return performance.now() - startTime;
  }

  #testMisunderstoodEgg3() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new MisunderstoodEgg3());
    }

    return performance.now() - startTime;
  }

  #testMisunderstoodEgg4() {
    const startTime = performance.now();

    const array = [];
    for (let i = 0; i < this.#testIteration; i++) {
      array.push(new MisunderstoodEgg4());
    }

    return performance.now() - startTime;
  }
}
