import Tunnel = require('./Tunnel');

declare class NullTunnel extends Tunnel {
	constructor(kwArgs?: NullTunnel.KwArgs);
}

declare module NullTunnel {
	export interface KwArgs extends Tunnel.KwArgs {
		/**
		 * An HTTP authorization string to use when initiating connections to the tunnel. This value of this property is
		 * defined by Tunnel subclasses.
		 */
		auth?: string;

		/**
		 * The host on which a WebDriver client can access the service provided by the tunnel. This may or may not be
		 * the host where the tunnel application is running.
		 *
		 * @default 'localhost'
		 */
		hostname?: string;

		/**
		 * The path that a WebDriver client should use to access the service provided by the tunnel.
		 *
		 * @default '/wd/hub/'
		 */
		pathname?: string;

		/**
		 * The local port where the WebDriver server should be exposed by the tunnel.
		 *
		 * @default 4444
		 */
		port?: number;

		/**
		 * The protocol (e.g., 'http') that a WebDriver client should use to access the service provided by the tunnel.
		 *
		 * @default 'http'
		 */
		protocol?: string;
	}
}

export = NullTunnel;
