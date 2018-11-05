export default function autobind(Target) {
  return class extends Target {
    constructor() {
      super(...arguments);
      Object.entries(Object.getOwnPropertyDescriptors(Target.prototype))
      .filter(([key, desc]) => {
        return key !== 'constructor' && typeof desc.value === 'function';
      }).forEach(([key, desc]) => {
        this[key] = desc.value.bind(this);
      });
    }
  }
}
