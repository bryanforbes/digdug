import 'dojo-typings/custom/dojo2/dojo';
import '@types/node';

import childProcess = require('child_process');
import Promise = require('dojo/Promise');
import * as digdug from './typedefs';

declare class Tunnel {
	/**
	 * The architecture the tunnel will run against. This information is automatically retrieved for the current
	 * system at runtime.
	 */
	architecture: string;

	/**
	 * An HTTP authorization string to use when initiating connections to the tunnel. This value of this property is
	 * defined by Tunnel subclasses.
	 */
	auth: string;

	/**
	 * The URL that a WebDriver client should used to interact with this service.
	 *
	 * @readonly
	 */
	clientUrl: string;

	/**
	 * The directory where the tunnel software will be extracted. If the directory does not exist, it will be
	 * created. This value is set by the tunnel subclasses.
	 */
	directory: string;

	/**
	 * The executable to spawn in order to create a tunnel. This value is set by the tunnel subclasses.
	 */
	executable: string;

	/**
	 * A map of additional capabilities that need to be sent to the provider when a new session is being created.
	 *
	 * @readonly
	 */
	extraCapabilities: {};

	/**
	 * The host on which a WebDriver client can access the service provided by the tunnel. This may or may not be
	 * the host where the tunnel application is running.
	 *
	 * @default 'localhost'
	 */
	hostname: string;

	/**
	 * Whether or not the tunnel software has already been downloaded.
	 *
	 * @readonly
	 */
	isDownloaded: boolean;

	/**
	 * Whether or not the tunnel is currently running.
	 *
	 * @readonly
	 */
	isRunning: boolean;

	/**
	 * Whether or not the tunnel is currently starting up.
	 *
	 * @readonly
	 */
	isStarting: boolean;

	/**
	 * Whether or not the tunnel is currently stopping.
	 *
	 * @readonly
	 */
	isStopping: boolean;

	/**
	 * The path that a WebDriver client should use to access the service provided by the tunnel.
	 *
	 * @default '/wd/hub/'
	 */
	pathname: string;

	/**
	 * The operating system the tunnel will run on. This information is automatically retrieved for the current
	 * system at runtime.
	 */
	platform: string;

	/**
	 * The local port where the WebDriver server should be exposed by the tunnel.
	 *
	 * @default 4444
	 */
	port: number;

	/**
	 * The protocol (e.g., 'http') that a WebDriver client should use to access the service provided by the tunnel.
	 *
	 * @default 'http'
	 */
	protocol: string;

	/**
	 * The URL of a proxy server for the tunnel to go through. Only the hostname, port, and auth are used.
	 */
	proxy: string;

	/**
	 * A unique identifier for the newly created tunnel.
	 */
	tunnelId: string;

	/**
	 * The URL where the tunnel software can be downloaded.
	 */
	url: string;

	/**
	 * Whether or not to tell the tunnel to provide verbose logging output.
	 *
	 * @default false
	 */
	verbose: boolean;

	constructor(kwArgs?: Tunnel.KwArgs);

	/**
	 * Adds an event listener to the tunnel.
	 */
	on: Tunnel.Events;

	/**
	 * Downloads and extracts the tunnel software if it is not already downloaded.
	 *
	 * This method can be extended by implementations to perform any necessary post-processing, such as setting
	 * appropriate file permissions on the downloaded executable.
	 *
	 * @param forceDownload Force downloading the software even if it already has been downloaded.
	 * @returns A promise that resolves once the download and extraction process has completed.
	 */
	download(forceDownload: boolean): Promise<void>;

	/**
	 * Creates the list of command-line arguments to be passed to the spawned tunnel. Implementations should
	 * override this method to provide the appropriate command-line arguments.
	 *
	 * Arguments passed to {@link module:digdug/Tunnel#_makeChild} will be passed as-is to this method.
	 *
	 * @returns A list of command-line arguments.
	 */
	protected _makeArgs(): string[];

	/**
	 * Creates a newly spawned child process for the tunnel software. Implementations should call this method to
	 * create the tunnel process.
	 *
	 * Arguments passed to this method will be passed as-is to {@link module:digdug/Tunnel#_makeArgs} and
	 * {@link module:digdug/Tunnel#_makeOptions}.
	 *
	 * @returns An object containing a newly spawned Process and a Deferred that will be resolved once the tunnel
	 * has started successfully.
	 */
	protected _makeChild(): { process: childProcess.ChildProcess; deferred: Promise.Deferred<void>; };

	/**
	 * Creates the set of options to use when spawning the tunnel process. Implementations should override this
	 * method to provide the appropriate options for the tunnel software.
	 *
	 * Arguments passed to {@link module:digdug/Tunnel#_makeChild} will be passed as-is to this method.
	 *
	 * @returns A set of options matching those provided to Node.js {@link module:child_process.spawn}.
	 */
	protected _makeOptions(): {
		cwd?: string;
		stdio?: any;
		custom?: any;
		env?: any;
		detached?: boolean;
	};

	/**
	 * Sends information about a job to the tunnel provider.
	 *
	 * @param jobId The job to send data about. This is usually a session ID.
	 * @param data Data to send to the tunnel provider about the job.
	 * @returns A promise that resolves once the job state request is complete.
	 */
	sendJobState(jobId: string, data: digdug.JobState): Promise<void>;

	/**
	 * Starts the tunnel, automatically downloading dependencies if necessary.
	 *
	 * @returns A promise that resolves once the tunnel has been established.
	 */
	start(): Promise<void>;

	/**
	 * This method provides the implementation that actually starts the tunnel and any other logic for emitting
	 * events on the Tunnel based on data passed by the tunnel software.
	 *
	 * The default implementation that assumes the tunnel is ready for use once the child process has written to
	 * `stdout` or `stderr`. This method should be reimplemented by other tunnel launchers to implement correct
	 * launch detection logic.
	 *
	 * @returns
	 * An object containing a reference to the child process, and a Deferred that is resolved once the tunnel is
	 * ready for use. Normally this will be the object returned from a call to `Tunnel#_makeChild`.
	 */
	protected _start(): {
		process: childProcess.ChildProcess;
		deferred: Promise.Deferred<void>;
	};

	/**
	 * Stops the tunnel.
	 *
	 * @returns A promise that resolves to the exit code for the tunnel once it has been terminated.
	 */
	stop(): Promise<number>;

	/**
	 * This method provides the implementation that actually stops the tunnel.
	 *
	 * The default implementation that assumes the tunnel has been closed once the child process has exited. This
	 * method should be reimplemented by other tunnel launchers to implement correct shutdown logic, if necessary.
	 *
	 * @returns A promise that resolves once the tunnel has shut down.
	 */
	protected _stop(): Promise<void>;
}

declare module Tunnel {
	export interface KwArgs {
		/**
		 * The URL of a proxy server for the tunnel to go through. Only the hostname, port, and auth are used.
		 */
		proxy?: string;

		/**
		 * A unique identifier for the newly created tunnel.
		 */
		tunnelId?: string;

		/**
		 * Whether or not to tell the tunnel to provide verbose logging output.
		 *
		 * @default false
		 */
		verbose?: boolean;
	}

	export interface Events {
		/**
		 * Part of the tunnel has been downloaded from the server.
		 */
		(eventName: 'downloadprogress', listener: digdug.Listener<{ received: number; total: number; }>): digdug.Handle;

		/**
		 * A chunk of raw string data output by the tunnel software to stdout.
		 */
		(eventName: 'stdout', listener: digdug.Listener<string>): digdug.Handle;

		/**
		 * A chunk of raw string data output by the tunnel software to stderr.
		 */
		(eventName: 'stderr', listener: digdug.Listener<string>): digdug.Handle;

		/**
		 * Information about the status of the tunnel setup process that is suitable for presentation to end-users.
		 */
		(eventName: 'status', listener: digdug.Listener<string>): digdug.Handle;

		/**
		 * Adds an event listener to the tunnel.
		 */
		(eventName: string, listener: digdug.Listener<any>): digdug.Handle;
	}
}

export = Tunnel;
