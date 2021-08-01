# ThreadDB Tutorial

> ThreadDB is a multi-party database built on IPFS and Libp2p that provides an alternative architecture for data on the web.

There are two implementations of ThreadDB: 

- Golang
- JavaScript

The ThreadDB APIs will feel familiar to developers who have worked with technologies like MongoDB.

## Important Concepts

The first three concepts developers will encounter with ThreadDB are Threads, Collections, and Instances:

- **Instances** are the individual records you *create*, *update*, or *delete*.
- **Instances** are *stored* in a **Collection**.
- **Collections** *have* one or many **Schemas** and can only *store* **Instances** that *match* one of those **Schemas**.
- **Databases** can *store* many **Collections**.

ThreadDB is still under heavy development and no part of it should be used before a thorough review of the underlying code and an understanding APIs and protocols may change rapidly. There may be coding mistakes, and the underlying protocols may contain design flaws.

## References

[ThreadDB Documentation](https://docs.textile.io/threads/)

This code was done following this [tutorial](https://blog.textile.io/local-first-threaddb/).