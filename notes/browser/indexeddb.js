const indexedDb = window.indexedDB;

const request = indexedDb.open("CarsDB", 1);

//Function which gets called when there is an error
request.onerror = (error) => {
  console.log(error);
};

//Function which gets run when a new database is created or the version number is changed
request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_colour", ["colour"], { unique: false });
  store.createIndex("cars_colour_make", ["colour", "make"], { unique: false });
};

//Function whihc gets called after onupgradeneeded
request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");
  const colourIndex = store.index("cars_colour");
  const colourMakeIndex = store.index("cars_colour_make");

  store.put({ id: 1, make: "BMW", colour: "black" });
  store.put({ id: 2, make: "Nissan", colour: "green" });
  store.put({ id: 3, make: "AUDI", colour: "blue" });
  store.put({ id: 4, make: "AUDI", colour: "green" });

  const idQuery = store.get(4);
  const colourQuery = colourIndex.getAll(["green"]);
  const colourMakeQuery = colourMakeIndex.get(["green", "AUDI"]);

  idQuery.onsuccess = () => {
    console.log("idQuery", idQuery.result);
  };

  colourQuery.onsuccess = () => {
    console.log("colourQuery", colourQuery.result);
  };

  colourMakeQuery.onsuccess = () => {
    console.log("colourMakeQuery", colourMakeQuery.result);
  };

  transaction.oncomplete = () => {
    db.close();
  };
};
