import Tunnel = require('./Tunnel');

declare class TestingBotTunnel extends Tunnel {
	/**
	 * The TestingBot API key.
	 *
	 * @default the value of the TESTINGBOT_API_KEY environment variable
	 */
	apiKey: string;

	/**
	 * The TestingBot API secret.
	 *
	 * @default the value of the TESTINGBOT_API_SECRET environment variable
	 */
	apiSecret: string;

	/**
	 * A list of regular expressions corresponding to domains whose connections should fail immediately if the VM
	 * attempts to make a connection to them.
	 */
	fastFailDomains: string[];

	/**
	 * A filename where additional logs from the tunnel should be output.
	 */
	logFile: string;

	/**
	 * Whether or not to use rabbIT compression for the tunnel connection.
	 *
	 * @default false
	 */
	useCompression: boolean;

	/**
	 * Whether or not to use the default local Jetty proxy for the tunnel.
	 *
	 * @default true
	 */
	useJettyProxy: boolean;

	/**
	 * Whether or not to use the default remote Squid proxy for the VM.
	 *
	 * @default true
	 */
	useSquidProxy: boolean;

	/**
	 * Whether or not to re-encrypt data encrypted by self-signed certificates.
	 *
	 * @default false
	 */
	useSsl: boolean;

	constructor(kwArgs?: TestingBotTunnel.KwArgs);
}

declare module TestingBotTunnel {
	export interface KwArgs extends Tunnel.KwArgs {
		/**
		 * The TestingBot API key.
		 *
		 * @default the value of the TESTINGBOT_API_KEY environment variable
		 */
		apiKey?: string;

		/**
		 * The TestingBot API secret.
		 *
		 * @default the value of the TESTINGBOT_API_SECRET environment variable
		 */
		apiSecret?: string;

		/**
		 * A list of regular expressions corresponding to domains whose connections should fail immediately if the VM
		 * attempts to make a connection to them.
		 */
		fastFailDomains?: string[];

		/**
		 * A filename where additional logs from the tunnel should be output.
		 */
		logFile?: string;

		/**
		 * Whether or not to use rabbIT compression for the tunnel connection.
		 *
		 * @default false
		 */
		useCompression?: boolean;

		/**
		 * Whether or not to use the default local Jetty proxy for the tunnel.
		 *
		 * @default true
		 */
		useJettyProxy?: boolean;

		/**
		 * Whether or not to use the default remote Squid proxy for the VM.
		 *
		 * @default true
		 */
		useSquidProxy?: boolean;

		/**
		 * Whether or not to re-encrypt data encrypted by self-signed certificates.
		 *
		 * @default false
		 */
		useSsl?: boolean;
	}
}

export = TestingBotTunnel;
