import '@types/node';
import * as digdug from './typedefs';

/**
 * Adds properties from source objects to a target object using ES5 `Object.defineProperty` instead of
 * `[[Set]]`. This is necessary when copying properties that are ES5 accessor/mutators.
 *
 * @param target The object to which properties are added.
 * @param sources The source objects from which properties are taken.
 * @returns The target object.
 */
export function mixin<T>(target: {}, ...sources: {}[]): T;

/**
 * Attaches an event to a Node.js EventEmitter and returns a handle for removing the listener later.
 *
 * @param emitter A Node.js EventEmitter object.
 * @param event The name of the event to listen for.
 * @param listener The event listener that will be invoked when the event occurs.
 * @returns A remove handle.
 */
export function on(emitter: NodeJS.EventEmitter, event: string, listener: Function): digdug.Handle;
