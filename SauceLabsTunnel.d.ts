import Tunnel = require('./Tunnel');

declare class SauceLabsTunnel extends Tunnel {
	/**
	 * The Sauce Labs access key.
	 *
	 * @default the value of the SAUCE_ACCESS_KEY environment variable
	 */
	accessKey: string;

	/**
	 * A list of domains that should not be proxied by the tunnel on the remote VM.
	 */
	directDomains: string[];

	/**
	 * A list of domains that will be proxied by the tunnel on the remote VM.
	 */
	tunnelDomains: string[];

	/**
	 * A list of URLs that require additional HTTP authentication. Only the hostname, port, and auth are used.
	 * This property is only supported by Sauce Connect 4 tunnels.
	 */
	domainAuthentication: string[];

	/**
	 * A list of regular expressions corresponding to domains whose connections should fail immediately if the VM
	 * attempts to make a connection to them.
	 */
	fastFailDomains: string[];

	/**
	 * Allows the tunnel to also be used by sub-accounts of the user that started the tunnel.
	 *
	 * @default false
	 */
	isSharedTunnel: boolean;

	/**
	 * A filename where additional logs from the tunnel should be output.
	 */
	logFile: string;

	/**
	 * A filename where Sauce Connect stores its process information.
	 */
	pidFile: string;

	/**
	 * Specifies the maximum log filesize before rotation, in bytes.
	 * This property is only supported by Sauce Connect 3 tunnels.
	 */
	logFileSize: number;

	/**
	 * Log statistics about HTTP traffic every `logTrafficStats` milliseconds.
	 * This property is only supported by Sauce Connect 4 tunnels.
	 *
	 * @default 0
	 */
	logTrafficStats: number;

	/**
	 * An alternative URL for the Sauce REST API.
	 * This property is only supported by Sauce Connect 3 tunnels.
	 */
	restUrl: string;

	/**
	 * A list of domains that should not have their SSL connections re-encrypted when going through the tunnel.
	 */
	skipSslDomains: string[];

	/**
	 * An additional set of options to use with the Squid proxy for the remote VM.
	 * This property is only supported by Sauce Connect 3 tunnels.
	 */
	squidOptions: string;

	/**
	 * Whether or not to use the proxy defined at {@link module:digdug/Tunnel#proxy} for the tunnel connection
	 * itself.
	 *
	 * @default false
	 */
	useProxyForTunnel: boolean;

	/**
	 * The Sauce Labs username.
	 *
	 * @default the value of the SAUCE_USERNAME environment variable
	 */
	username: string;

	/**
	 * Overrides the version of the VM created on Sauce Labs.
	 * This property is only supported by Sauce Connect 3 tunnels.
	 */
	vmVersion: string;

	constructor(kwArgs?: SauceLabsTunnel.KwArgs);
}

declare module SauceLabsTunnel {
	export interface KwArgs extends Tunnel.KwArgs {
		/**
		 * The Sauce Labs access key.
		 *
		 * @default the value of the SAUCE_ACCESS_KEY environment variable
		 */
		accessKey?: string;

		/**
		 * A list of domains that should not be proxied by the tunnel on the remote VM.
		 */
		directDomains?: string[];

		/**
		 * A list of domains that will be proxied by the tunnel on the remote VM.
		 */
		tunnelDomains?: string[];

		/**
		 * A list of URLs that require additional HTTP authentication. Only the hostname, port, and auth are used.
		 * This property is only supported by Sauce Connect 4 tunnels.
		 */
		domainAuthentication?: string[];

		/**
		 * A list of regular expressions corresponding to domains whose connections should fail immediately if the VM
		 * attempts to make a connection to them.
		 */
		fastFailDomains?: string[];

		/**
		 * Allows the tunnel to also be used by sub-accounts of the user that started the tunnel.
		 *
		 * @default false
		 */
		isSharedTunnel?: boolean;

		/**
		 * A filename where additional logs from the tunnel should be output.
		 */
		logFile?: string;

		/**
		 * A filename where Sauce Connect stores its process information.
		 */
		pidFile?: string;

		/**
		 * Specifies the maximum log filesize before rotation, in bytes.
		 * This property is only supported by Sauce Connect 3 tunnels.
		 */
		logFileSize?: number;

		/**
		 * Log statistics about HTTP traffic every `logTrafficStats` milliseconds.
		 * This property is only supported by Sauce Connect 4 tunnels.
		 *
		 * @default 0
		 */
		logTrafficStats?: number;

		/**
		 * An alternative URL for the Sauce REST API.
		 * This property is only supported by Sauce Connect 3 tunnels.
		 */
		restUrl?: string;

		/**
		 * A list of domains that should not have their SSL connections re-encrypted when going through the tunnel.
		 */
		skipSslDomains?: string[];

		/**
		 * An additional set of options to use with the Squid proxy for the remote VM.
		 * This property is only supported by Sauce Connect 3 tunnels.
		 */
		squidOptions?: string;

		/**
		 * Whether or not to use the proxy defined at {@link module:digdug/Tunnel#proxy} for the tunnel connection
		 * itself.
		 *
		 * @default false
		 */
		useProxyForTunnel?: boolean;

		/**
		 * The Sauce Labs username.
		 *
		 * @default the value of the SAUCE_USERNAME environment variable
		 */
		username?: string;

		/**
		 * Overrides the version of the VM created on Sauce Labs.
		 * This property is only supported by Sauce Connect 3 tunnels.
		 */
		vmVersion?: string;
	}
}

export = SauceLabsTunnel;
