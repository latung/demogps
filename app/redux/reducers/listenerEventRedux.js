import EventEmitter from 'events';

export default class ActionEmitter extends EventEmitter {
    constructor(...args) {
        super(...args);
        this.types = 'all';
        this.action = null;
        this.dispatched = null;
        this.store = null;
    }

    // Emit action
    emitAction(type) {
        this.emit(type);
    }

    handleAction(action, dispatched, store) {
        this.store = store;
        this.action = action;
        this.dispatched = dispatched;
        this.emit(action.type, action, store);
        return dispatched;
    }
}
