import Tunnel = require('./Tunnel');

declare class BrowserStackTunnel extends Tunnel {
	/**
	 * The BrowserStack access key. This will be initialized with the value of the `BROWSERSTACK_ACCESS_KEY`
	 * environment variable.
	 *
	 * @default the value of the BROWSERSTACK_ACCESS_KEY environment variable
	 */
	accessKey: string;

	/**
	 * Whether or not to start the tunnel with only WebDriver support. Setting this value to `false` is not
	 * supported.
	 *
	 * @default true
	 */
	automateOnly: boolean;

	/**
	 * If true, any other tunnels running on the account will be killed when the tunnel is started.
	 *
	 * @default false
	 */
	killOtherTunnels: boolean;

	/**
	 * A list of server URLs that should be proxied by the tunnel. Only the hostname, port, and protocol are used.
	 */
	servers: string[];

	/**
	 * Skip verification that the proxied servers are online and responding at the time the tunnel starts.
	 *
	 * @default true
	 */
	skipServerValidation: boolean;

	/**
	 * The BrowserStack username. This will be initialized with the value of the `BROWSERSTACK_USERNAME`
	 * environment variable.
	 *
	 * @default the value of the BROWSERSTACK_USERNAME environment variable
	 */
	username: string;

	constructor(kwArgs?: BrowserStackTunnel.KwArgs);
}

declare module BrowserStackTunnel {
	export interface KwArgs extends Tunnel.KwArgs {
		/**
		 * The BrowserStack access key. This will be initialized with the value of the `BROWSERSTACK_ACCESS_KEY`
		 * environment variable.
		 *
		 * @default the value of the BROWSERSTACK_ACCESS_KEY environment variable
		 */
		accessKey?: string;

		/**
		 * Whether or not to start the tunnel with only WebDriver support. Setting this value to `false` is not
		 * supported.
		 *
		 * @default true
		 */
		automateOnly?: boolean;

		/**
		 * If true, any other tunnels running on the account will be killed when the tunnel is started.
		 *
		 * @default false
		 */
		killOtherTunnels?: boolean;

		/**
		 * A list of server URLs that should be proxied by the tunnel. Only the hostname, port, and protocol are used.
		 */
		servers?: string[];

		/**
		 * Skip verification that the proxied servers are online and responding at the time the tunnel starts.
		 *
		 * @default true
		 */
		skipServerValidation?: boolean;

		/**
		 * The BrowserStack username. This will be initialized with the value of the `BROWSERSTACK_USERNAME`
		 * environment variable.
		 *
		 * @default the value of the BROWSERSTACK_USERNAME environment variable
		 */
		username?: string;
	}
}

export = BrowserStackTunnel;
