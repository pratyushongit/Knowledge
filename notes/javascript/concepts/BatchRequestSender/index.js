class BatchProcessing {
  constructor(limit, timeout, fn) {
    this.limit = limit;
    this.timeout = timeout;
    this.fn = fn;
    this.queue = [];
    this.timer = null;
  }

  add(process) {
    this.queue.push(process);

    if (this.queue.length >= this.limit) {
      this.flush();
      return;
    }

    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.flush();
      }, this.timeout);
    }
  }

  async flush() {
    const batch = this.queue;
    this.queue = [];
    clearTimeout(this.timer);
    this.timer = null;

    try {
      await this.fn(batch);
    } catch (error) {
      console.log(error);
    }
  }
}

const b = new BatchProcessing(3, 3000, (batch) => {
  console.log(`Processing the following requests in batch: ${batch}`);
});

b.add(() => console.log("click"));
b.add(() => console.log("resize"));
b.add(() => console.log("delete"));

b.add(() => console.log("type"));
b.add(() => console.log("select"));
