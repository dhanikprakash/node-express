const { lruCache } = require("./8-lru-cache");

describe(" LRU Cache ", () => {
  beforeEach(() => {
    lruCache.clear();
  });

  it("should return the correct value for specified key", () => {
    lruCache.set("key", "value");
    expect(lruCache.get("key")).toEqual("value");
  });

  it("should return the correct values for all specified keys", () => {
    let actual = [
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
      [5, "Five"],
    ];
    console.time("array");
    actual.map((row) => {
      row.map(() => {
        lruCache.set(row[0], row[1]);
      });
    });

    actual.map((row) => {
      row.map(() => {
        expect(lruCache.get(row[0])).toEqual(row[1]);
      });
    });
    console.timeEnd("array");
  });

  it("should remove items when max size exceeds", () => {
    let actual = [
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
      [5, "Five"],
      [6, "Six"],
    ];
    console.time("array");
    actual.map((row) => {
      row.map(() => {
        lruCache.set(row[0], row[1]);
      });
    });

    actual.map((row) => {
      row.map(() => {
        if (row[0] === 1) {
          expect(lruCache.get(row[0])).toBeUndefined();
        } else {
          expect(lruCache.get(row[0])).toEqual(row[1]);
        }
      });
    });
    console.timeEnd("array");
  });

  it("should remove least used items when max size exceeds", () => {
    let actual = [
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
      [5, "Five"],
    ];
    actual.map((row) => {
      row.map(() => {
        lruCache.set(row[0], row[1]);
      });
    });
    lruCache.get(1);
    lruCache.get(2);

    lruCache.set(6, "Six");
    lruCache.set(7, "Seven");

    actual.map((row) => {
      row.map(() => {
        if (row[0] === 3 || row[0] === 4) {
          expect(lruCache.get(row[0])).toBeUndefined();
        } else {
          expect(lruCache.get(row[0])).toEqual(row[1]);
        }
      });
      expect(lruCache.get(6)).toEqual("Six");
      expect(lruCache.get(7)).toEqual("Seven");
    });
    console.timeEnd("array");
  });

  it("should remove items when ttl expires", async () => {
    let actual = [
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
      [5, "Five"],
    ];
    actual.map((row) => {
      row.map(() => {
        lruCache.set(row[0], row[1]);
      });
    });

    await new Promise((r) => setTimeout(r, 1100));
      actual.map((row) => {
        row.map(() => {
          expect(lruCache.get(row[0])).toBeUndefined();
        });
      });

    console.timeEnd("array");
  });


  it("should remove least used items when ttl expires", async () => {


    let actual = [
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
      ];
      actual.map((row) => {
        row.map(() => {
          lruCache.set(row[0], row[1]);
        });
      });

    setTimeout(() => {
        lruCache.get(1);
        lruCache.get(2);
        lruCache.get(5);
    }, 800)


    await new Promise((r) => setTimeout(r, 1100));
      actual.map((row) => {
        row.map(() => {
         if(row[0] === 3 || row[0] === 4) {
            expect(lruCache.get(row[0])).toBeUndefined();
         }
         else{
            expect(lruCache.get(row[0])).toEqual(row[1]);
         }

        });
      });


  });
});