
export as namespace ipfs;

export = IPFS;

declare class IPFS {
    constructor(options: IPFS.Options);

    types: IPFS.Types;

    init(options: IPFS.InitOptions, callback: (error: Error, success?: boolean) => void): void;
    init(callback: (error: Error, success?: boolean) => void): void;

    preStart(callback: (error: Error, result?: any) => void): void;
    start(callback?: (error: Error, result?: any) => void): void;
    stop(callback?: (error?: Error) => void): void;
    isOnline(): boolean;

    version(options: any, callback: (error: Error, version: IPFS.Version) => void): void ;
    version(callback: (error: Error, version: IPFS.Version) => void): void ;
    version(): Promise<IPFS.Version>; 

    id(options: any, callback: (error: Error, version: IPFS.Id) => void): void ;
    id(callback: (error: Error, version: IPFS.Id) => void): void ;
    id(): Promise<IPFS.Id>; 

    repo: IPFS.Repo;
    bootstrap: any;
    config: any;
    block: any;
    object: any;
    dag: any;
    libp2p: any;
    swarm: any;
    files: IPFS.Files;
    bitswap: any;

    ping(callback: (error: Error) => void): void;
    ping(): Promise<void>;

    pubsub: any; 

    on(event: string, callback: () => void): void;
}

declare namespace IPFS {
    export interface Options {
        init?: boolean;
        start?: boolean;
        EXPERIMENTAL?: any;
        repo?: string;
        config?: any;
    }

    export interface InitOptions {
        emptyRepo?: boolean;
        bits?: number;
        log?: Function;
    }

    export type Multiaddr = any | string;
    export type Multihash = any | string;
    export type CID = any;

    export interface Types {
        Buffer: any;
        PeerId: any;
        PeerInfo: any;
        multiaddr: Multiaddr;
        multihash: Multihash;
        CID: CID;
    }

    export interface Version {
        version: string;
        repo: string;
        commit: string;
    }

    export interface Id {
        id: string;
        publicKey: string;
        addresses: Multiaddr[];
        agentVersion: string;
        protocolVersion: string;
    }

    export interface Repo {
        init(bits: number, empty: boolean, callback: (error: Error, result?: any) => void): void;

        version(options: any, callback: (error: Error, result?: any) => void): void;
        version(callback: (error: Error, result?: any) => void): void;

        gc(): void;
        path(): string;
    }

    export type FileContent = Object | Blob | string;

    export interface IPFSFile {
        path: string;
        hash: string;
        size: number;
        content?: FileContent;
    }


    export interface Files {
        createAddStream(options: any, callback: (error: Error, stream?: any) => void): void;
        createAddStream(callback: (error: Error, stream?: any) => void): void;

        createPullStream(options: any): any;

        add(data: FileContent, options: any, callback: (error: Error, result?: IPFSFile) => void): void;
        add(data: FileContent, callback: (error: Error, result?: IPFSFile) => void): void;
        add(data: FileContent): Promise<IPFSFile>;

        cat(hash: Multihash, callback: (error: Error, content?: FileContent) => void): void;
        cat(hash: Multihash): Promise<FileContent>;

        get(hash: Multihash, callback: (error: Error, file?: File) => void): void;
        get(hash: Multihash): Promise<File>;

        getPull(hash: Multihash, callback: (error: Error, result?: any) => void): void;
    }

    export function createNode(options: Options): IPFS;
}