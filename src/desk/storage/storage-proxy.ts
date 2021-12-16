 export default class StorageProxy {
  private readonly sessionStorage: StorageDelegate;
  private readonly localStorage: StorageDelegate;
  constructor(name: string) {
    this.sessionStorage = new StorageDelegate(name, window.sessionStorage);
    this.localStorage = new StorageDelegate(name, window.localStorage);
  }

  get session() {
    return this.sessionStorage;
  }

  get local() {
    return this.localStorage;
  }

  get(key: string) {
    return this.session.get(key) || this.local.get(key);
  }

  set(key: string, value: any): this {
    this.session.set(key, value);
    this.local.set(key, value);
    return this;
  }

  remove(key: string):this {
    this.session.remove(key);
    this.local.remove(key);
    return this;
  }

  clear(): this {
    this.session.clear();
    this.local.clear();
    return this;
  }
}

class StorageDelegate {
  private readonly name: string;
  private storage: Storage;
  constructor(name: string, storage:Storage) {
    this.name = name;
    this.storage = storage
  }

  /**
   * 从定义的storage中获取值
   */
  get(key: string) {
    return this.current()[key];
  }

  /**
   * 给定义的storage {} 赋值
   */
  set(key: string, value: any): this {
    const currentStorage = this.current();
    currentStorage[key] = value;
    this.storage.setItem(this.name, JSON.stringify(currentStorage));
    return this;
  }

  /**
   * 从定义的storage {} 删除某值
   */
  remove(key: string) {
    const currentStorage = this.current();
    delete currentStorage[key];
    this.storage.setItem(this.name, JSON.stringify(currentStorage));
    return this;
  }

  /**
   * get current storage values, returns {} if nothing
   */
  current() {
    const current = this.storage.getItem(this.name);
    return current? JSON.parse(current) : {};
  }

  /**
   * 清除定义的storage name(不会清除所有)
   */
  clear() {
    this.storage.removeItem(this.name);
    return this;
  }
}
