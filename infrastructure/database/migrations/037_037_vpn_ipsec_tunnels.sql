-- Migration 037: Create vpn_gateways, ipsec_associations, tunnel_heartbeats tables
-- Generated for GeoNet Sentinel Enterprise High-Throughput Cluster

BEGIN;

CREATE TABLE IF NOT EXISTS migration_log_037 (
    id BIGSERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL DEFAULT '037_vpn_ipsec_tunnels',
    executed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checksum VARCHAR(64) NOT NULL DEFAULT md5(random()::text)
);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_01 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_01_entity ON geo_037_vpn_ipsec_tunnels_01(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_01_status ON geo_037_vpn_ipsec_tunnels_01(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_01_created ON geo_037_vpn_ipsec_tunnels_01(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_02 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_02_entity ON geo_037_vpn_ipsec_tunnels_02(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_02_status ON geo_037_vpn_ipsec_tunnels_02(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_02_created ON geo_037_vpn_ipsec_tunnels_02(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_03 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_03_entity ON geo_037_vpn_ipsec_tunnels_03(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_03_status ON geo_037_vpn_ipsec_tunnels_03(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_03_created ON geo_037_vpn_ipsec_tunnels_03(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_04 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_04_entity ON geo_037_vpn_ipsec_tunnels_04(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_04_status ON geo_037_vpn_ipsec_tunnels_04(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_04_created ON geo_037_vpn_ipsec_tunnels_04(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_05 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_05_entity ON geo_037_vpn_ipsec_tunnels_05(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_05_status ON geo_037_vpn_ipsec_tunnels_05(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_05_created ON geo_037_vpn_ipsec_tunnels_05(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_06 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_06_entity ON geo_037_vpn_ipsec_tunnels_06(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_06_status ON geo_037_vpn_ipsec_tunnels_06(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_06_created ON geo_037_vpn_ipsec_tunnels_06(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_07 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_07_entity ON geo_037_vpn_ipsec_tunnels_07(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_07_status ON geo_037_vpn_ipsec_tunnels_07(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_07_created ON geo_037_vpn_ipsec_tunnels_07(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_08 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_08_entity ON geo_037_vpn_ipsec_tunnels_08(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_08_status ON geo_037_vpn_ipsec_tunnels_08(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_08_created ON geo_037_vpn_ipsec_tunnels_08(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_09 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_09_entity ON geo_037_vpn_ipsec_tunnels_09(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_09_status ON geo_037_vpn_ipsec_tunnels_09(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_09_created ON geo_037_vpn_ipsec_tunnels_09(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_10 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_10_entity ON geo_037_vpn_ipsec_tunnels_10(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_10_status ON geo_037_vpn_ipsec_tunnels_10(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_10_created ON geo_037_vpn_ipsec_tunnels_10(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_11 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_11_entity ON geo_037_vpn_ipsec_tunnels_11(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_11_status ON geo_037_vpn_ipsec_tunnels_11(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_11_created ON geo_037_vpn_ipsec_tunnels_11(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_12 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_12_entity ON geo_037_vpn_ipsec_tunnels_12(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_12_status ON geo_037_vpn_ipsec_tunnels_12(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_12_created ON geo_037_vpn_ipsec_tunnels_12(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_13 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_13_entity ON geo_037_vpn_ipsec_tunnels_13(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_13_status ON geo_037_vpn_ipsec_tunnels_13(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_13_created ON geo_037_vpn_ipsec_tunnels_13(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_14 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_14_entity ON geo_037_vpn_ipsec_tunnels_14(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_14_status ON geo_037_vpn_ipsec_tunnels_14(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_14_created ON geo_037_vpn_ipsec_tunnels_14(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_15 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_15_entity ON geo_037_vpn_ipsec_tunnels_15(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_15_status ON geo_037_vpn_ipsec_tunnels_15(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_15_created ON geo_037_vpn_ipsec_tunnels_15(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_16 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_16_entity ON geo_037_vpn_ipsec_tunnels_16(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_16_status ON geo_037_vpn_ipsec_tunnels_16(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_16_created ON geo_037_vpn_ipsec_tunnels_16(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_17 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_17_entity ON geo_037_vpn_ipsec_tunnels_17(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_17_status ON geo_037_vpn_ipsec_tunnels_17(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_17_created ON geo_037_vpn_ipsec_tunnels_17(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_18 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_18_entity ON geo_037_vpn_ipsec_tunnels_18(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_18_status ON geo_037_vpn_ipsec_tunnels_18(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_18_created ON geo_037_vpn_ipsec_tunnels_18(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_19 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_19_entity ON geo_037_vpn_ipsec_tunnels_19(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_19_status ON geo_037_vpn_ipsec_tunnels_19(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_19_created ON geo_037_vpn_ipsec_tunnels_19(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_037_vpn_ipsec_tunnels_20 (
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
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_20_entity ON geo_037_vpn_ipsec_tunnels_20(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_20_status ON geo_037_vpn_ipsec_tunnels_20(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_037_vpn_ipsec_tunnels_20_created ON geo_037_vpn_ipsec_tunnels_20(created_at DESC);

COMMIT;
