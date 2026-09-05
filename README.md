# Angkorads 📣⚡
### High-Traffic P2P Advertising Marketplace & Real-Time Bidding Infrastructure

Angkorads is a high-performance, real-peer advertising marketplace engineered to process instantaneous ad matching, programmatic ad bidding, and peer-to-peer user communications at scale. 

The architecture is built from the ground up to bypass traditional static database polling, shifting the entire transactional lifecycle onto an event-driven WebSocket runtime capable of smoothly routing live system actions under heavy concurrent user distributions.

---

## ⚡ Key Architectural Capabilities

*   **Real-Time Bidding Engine:** High-velocity pricing engines built to process and resolve incoming bidding vectors instantaneously without concurrency lockouts.
*   **Decoupled Chat Server via WebSockets:** Persistent, duplex communication channels routing high-volume live user marketplace interactions natively with zero UI-thread blocking.
*   **Asynchronous Content Pipeline:** Dedicated media ingest architectures utilizing background workers to process, optimize, and distribute ad-related media files asynchronously.
*   **Reactive Server-State Caching:** Full state-caching layer powered by TanStack React Query to streamline multi-user marketplace mutations under 50,000+ concurrent loads.

---

## 🏗️ Technical Stack & System Infrastructure

*   **Runtime & State Management:** Node.js, TypeScript, Next.js, TanStack React Query
*   **Real-Time Backplane:** Socket.io / WebSockets, Custom Event Handlers
*   **Data & Identity Management:** Supabase Data Layer, PostgreSQL, Redis (Staging State)
*   **Media Processing Engine:** Cloud-Native Serverless Media Transcoders (Inngest workflows)

---

## 🛠️ Solved Engineering Bottlenecks

### 1. Eliminating Race Conditions During Flash Ad Bidding
*   **Challenge:** Multiple concurrent users attempting to place competing bids on an ad placement at the exact same millisecond caused database write deadlocks and duplicate assignments.
*   **Solution:** Implemented an event queue layer utilizing lightweight atomic mutations. Incoming bids are processed in an orderly queue structure before hitting the main persistent database, ensuring that only the absolute fastest resolved microsecond bid locks the table state.

### 2. Preventing WebSockets Connection Drops under 50k Concurrency
*   **Challenge:** High memory overhead and connection crashes when thousands of users maintained open marketplace chat sockets simultaneously.
*   **Solution:** Built a distributed event-routing backplane. The architecture decouples standard API traffic from connection events, running isolated heartbeat monitors to prune idle client sockets automatically and instantly free up backend server memory threads.

