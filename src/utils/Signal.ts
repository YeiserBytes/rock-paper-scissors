export class Signal {
  private listeners: Map<Function, Function> = new Map();

  public AddListener(listener: Function) {
    this.listeners.set(listener, listener);
  }

  public RemoveListener(listener: Function) {
    this.listeners.delete(listener);
  }

  public Emit(params: {} = {}): void {
    this.listeners.forEach((listener) => listener(params));
  }
}
