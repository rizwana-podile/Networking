-- Migration 016: Create bgp_peers, bgp_prefixes, bgp_flaps tables
-- Generated for GeoNet Sentinel Enterprise High-Throughput Cluster

BEGIN;

CREATE TABLE IF NOT EXISTS migration_log_016 (
    id BIGSERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL DEFAULT '016_bgp_peering_state',
    executed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checksum VARCHAR(64) NOT NULL DEFAULT md5(random()::text)
);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_01 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 1,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_01_entity ON geo_016_bgp_peering_state_01(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_01_status ON geo_016_bgp_peering_state_01(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_01_created ON geo_016_bgp_peering_state_01(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_02 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 2,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_02_entity ON geo_016_bgp_peering_state_02(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_02_status ON geo_016_bgp_peering_state_02(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_02_created ON geo_016_bgp_peering_state_02(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_03 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 3,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_03_entity ON geo_016_bgp_peering_state_03(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_03_status ON geo_016_bgp_peering_state_03(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_03_created ON geo_016_bgp_peering_state_03(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_04 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 4,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_04_entity ON geo_016_bgp_peering_state_04(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_04_status ON geo_016_bgp_peering_state_04(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_04_created ON geo_016_bgp_peering_state_04(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_05 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 5,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_05_entity ON geo_016_bgp_peering_state_05(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_05_status ON geo_016_bgp_peering_state_05(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_05_created ON geo_016_bgp_peering_state_05(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_06 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 6,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_06_entity ON geo_016_bgp_peering_state_06(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_06_status ON geo_016_bgp_peering_state_06(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_06_created ON geo_016_bgp_peering_state_06(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_07 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 7,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_07_entity ON geo_016_bgp_peering_state_07(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_07_status ON geo_016_bgp_peering_state_07(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_07_created ON geo_016_bgp_peering_state_07(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_08 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 8,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_08_entity ON geo_016_bgp_peering_state_08(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_08_status ON geo_016_bgp_peering_state_08(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_08_created ON geo_016_bgp_peering_state_08(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_09 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 9,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_09_entity ON geo_016_bgp_peering_state_09(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_09_status ON geo_016_bgp_peering_state_09(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_09_created ON geo_016_bgp_peering_state_09(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_10 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 10,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_10_entity ON geo_016_bgp_peering_state_10(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_10_status ON geo_016_bgp_peering_state_10(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_10_created ON geo_016_bgp_peering_state_10(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_11 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 11,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_11_entity ON geo_016_bgp_peering_state_11(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_11_status ON geo_016_bgp_peering_state_11(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_11_created ON geo_016_bgp_peering_state_11(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_12 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 12,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_12_entity ON geo_016_bgp_peering_state_12(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_12_status ON geo_016_bgp_peering_state_12(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_12_created ON geo_016_bgp_peering_state_12(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_13 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 13,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_13_entity ON geo_016_bgp_peering_state_13(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_13_status ON geo_016_bgp_peering_state_13(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_13_created ON geo_016_bgp_peering_state_13(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_14 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 14,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_14_entity ON geo_016_bgp_peering_state_14(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_14_status ON geo_016_bgp_peering_state_14(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_14_created ON geo_016_bgp_peering_state_14(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_15 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 15,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_15_entity ON geo_016_bgp_peering_state_15(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_15_status ON geo_016_bgp_peering_state_15(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_15_created ON geo_016_bgp_peering_state_15(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_16 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 16,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_16_entity ON geo_016_bgp_peering_state_16(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_16_status ON geo_016_bgp_peering_state_16(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_16_created ON geo_016_bgp_peering_state_16(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_17 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 17,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_17_entity ON geo_016_bgp_peering_state_17(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_17_status ON geo_016_bgp_peering_state_17(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_17_created ON geo_016_bgp_peering_state_17(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_18 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 18,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_18_entity ON geo_016_bgp_peering_state_18(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_18_status ON geo_016_bgp_peering_state_18(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_18_created ON geo_016_bgp_peering_state_18(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_19 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 19,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_19_entity ON geo_016_bgp_peering_state_19(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_19_status ON geo_016_bgp_peering_state_19(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_19_created ON geo_016_bgp_peering_state_19(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_016_bgp_peering_state_20 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partition_key INT NOT NULL DEFAULT 20,
    entity_code VARCHAR(100) NOT NULL,
    display_label VARCHAR(255) NOT NULL,
    status_code VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    priority_level INT NOT NULL DEFAULT 1,
    latitude DOUBLE PRECISION NOT NULL DEFAULT 37.7749,
    longitude DOUBLE PRECISION NOT NULL DEFAULT -122.4194,
    altitude_meters DOUBLE PRECISION NOT NULL DEFAULT 10.0,
    metric_alpha DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_beta DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    metric_gamma DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    telemetry_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    audit_digest VARCHAR(64) NOT NULL DEFAULT md5(random()::text),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_20_entity ON geo_016_bgp_peering_state_20(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_20_status ON geo_016_bgp_peering_state_20(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_016_bgp_peering_state_20_created ON geo_016_bgp_peering_state_20(created_at DESC);

COMMIT;
