# Angkorads 📣⚡
### High-Traffic P2P Advertising Marketplace & Real-Time Bidding Infrastructure

Angkorads is a high-performance, real-time peer advertising marketplace engineered to process instantaneous ad matching, programmatic ad bidding during live streams, and heavy real-time data orchestration. 

The architecture is built from the ground up to bypass traditional static database polling, shifting the entire transactional lifecycle onto an event-driven serverless background infrastructure capable of smoothly routing live system actions and eliminating server execution limits under heavy concurrent user distributions.

---

## ⚡ Key Architectural Capabilities

*   **Social Cross-Livestreaming Array:** Native third-party social media authentication integrations allowing content creators to stream live broadcasts across multiple platforms simultaneously.
*   **Inngest Background Orchestration:** Handles heavy video encoding, dynamic listing metrics, and live streaming tasks concurrently via asynchronous, serverless step-functions.
*   **Live Stream Bidding Engine:** High-velocity pricing engines built to process, sequence, and resolve incoming bidding vectors instantaneously during live broadcast streams without concurrency lockouts.
*   **Decoupled Chat Server via WebSockets:** Persistent, duplex communication channels routing high-volume live user marketplace interactions natively with zero UI-thread blocking.

---

## 🏗️ Technical Stack & System Infrastructure

*   **Runtime & State Management:** Node.js, TypeScript, Next.js, TanStack React Query
*   **Real-Time Backplane:** Socket.io / WebSockets, Custom Event Handlers
*   **Data & Identity Management:** Supabase Data Layer, PostgreSQL, Inngest Serverless Infrastructure
*   **Media Processing Engine:** Cloud-Native Background Video Transcoders & Multi-Stream Encoders

---

## 🛠️ Solved Engineering Bottlenecks

### 1. Eliminating Race Conditions During Flash Live Stream Bidding
*   **Challenge:** Multiple concurrent users attempting to place competing bids on an ad placement at the exact same millisecond during a live stream caused database write deadlocks and duplicate assignments.
*   **Solution:** Implemented an event queue layer utilizing lightweight atomic mutations. Incoming bids are processed in an orderly queue structure before hitting the main persistent database, ensuring that only the absolute fastest resolved microsecond bid locks the table state.

### 2. Eliminating Serverless Lifecycle Timeouts Across Multi-Stream Video Payloads
*   **Challenge:** Processing heavy live streaming arrays, background ad listing updates, and cross-platform video broadcasts instantly triggered standard gateway server timeouts.
*   **Solution:** Implemented structural architecture decoupling. Video metadata and rendering states are split into optimized chunks and offloaded to an asynchronous Inngest orchestration layer. The platform executes the intense task in the background, continuously resolving timeout locks while updating live views securely.
