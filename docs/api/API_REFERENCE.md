# GeoNet Sentinel – REST API & WebSocket Reference

## Authentication
- `POST /api/v1/auth/login`: Authenticate and receive access & refresh tokens.
- `POST /api/v1/auth/register`: Register new user account.
- `GET /api/v1/auth/profile`: Get authenticated user profile.

## Devices & Locations
- `GET /api/v1/devices`: List tracked devices.
- `POST /api/v1/devices`: Provision new GPS tracker.
- `POST /api/v1/locations/ingest`: Ingest authorized GPS telemetry.
- `GET /api/v1/locations/route`: Query historical breadcrumb trail.

## Network Infrastructure
- `GET /api/v1/network/nodes`: List monitored network nodes.
- `GET /api/v1/network/topology`: Retrieve dynamic dependency graph.
- `POST /api/v1/network/nodes/:id/probe`: Trigger manual ICMP/TCP probe.
