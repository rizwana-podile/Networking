# GeoNet Sentinel – Architecture & Engineering Manual

## 1. System Overview
GeoNet Sentinel is an enterprise real-time location tracking and telecommunications infrastructure observability platform.

## 2. Monorepo Structure
- `apps/api`: Modular REST API and WebSocket Gateway.
- `apps/web`: React 18, Vite, Tailwind CSS, Leaflet live maps, SVG topology graph, Recharts.
- `apps/worker`: Background monitoring prober, metric rollup aggregator.
- `packages/types`: Universal domain contracts, DTOs, and RBAC permission enums.
- `packages/utils`: High-precision Haversine math, HMAC validation, and SLA percentiles.
- `packages/validation`: Runtime payload schema validators.
- `packages/api-client`: Typed client SDK.

## 3. Storage Dual-Engine
Supports PostgreSQL 16 + PostGIS for cloud container deployments, and an embedded persistent JSON/SQLite storage engine for instant zero-dependency local execution.
