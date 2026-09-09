-- Migration 013: Create 1-hour time-series rollup aggregate table
-- Generated for GeoNet Sentinel Enterprise High-Throughput Cluster

BEGIN;

CREATE TABLE IF NOT EXISTS migration_log_013 (
    id BIGSERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL DEFAULT '013_time_series_rollups_1h',
    executed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checksum VARCHAR(64) NOT NULL DEFAULT md5(random()::text)
);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_01 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_01_entity ON geo_013_time_series_rollups_1h_01(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_01_status ON geo_013_time_series_rollups_1h_01(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_01_created ON geo_013_time_series_rollups_1h_01(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_02 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_02_entity ON geo_013_time_series_rollups_1h_02(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_02_status ON geo_013_time_series_rollups_1h_02(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_02_created ON geo_013_time_series_rollups_1h_02(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_03 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_03_entity ON geo_013_time_series_rollups_1h_03(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_03_status ON geo_013_time_series_rollups_1h_03(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_03_created ON geo_013_time_series_rollups_1h_03(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_04 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_04_entity ON geo_013_time_series_rollups_1h_04(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_04_status ON geo_013_time_series_rollups_1h_04(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_04_created ON geo_013_time_series_rollups_1h_04(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_05 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_05_entity ON geo_013_time_series_rollups_1h_05(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_05_status ON geo_013_time_series_rollups_1h_05(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_05_created ON geo_013_time_series_rollups_1h_05(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_06 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_06_entity ON geo_013_time_series_rollups_1h_06(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_06_status ON geo_013_time_series_rollups_1h_06(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_06_created ON geo_013_time_series_rollups_1h_06(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_07 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_07_entity ON geo_013_time_series_rollups_1h_07(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_07_status ON geo_013_time_series_rollups_1h_07(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_07_created ON geo_013_time_series_rollups_1h_07(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_08 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_08_entity ON geo_013_time_series_rollups_1h_08(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_08_status ON geo_013_time_series_rollups_1h_08(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_08_created ON geo_013_time_series_rollups_1h_08(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_09 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_09_entity ON geo_013_time_series_rollups_1h_09(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_09_status ON geo_013_time_series_rollups_1h_09(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_09_created ON geo_013_time_series_rollups_1h_09(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_10 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_10_entity ON geo_013_time_series_rollups_1h_10(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_10_status ON geo_013_time_series_rollups_1h_10(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_10_created ON geo_013_time_series_rollups_1h_10(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_11 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_11_entity ON geo_013_time_series_rollups_1h_11(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_11_status ON geo_013_time_series_rollups_1h_11(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_11_created ON geo_013_time_series_rollups_1h_11(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_12 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_12_entity ON geo_013_time_series_rollups_1h_12(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_12_status ON geo_013_time_series_rollups_1h_12(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_12_created ON geo_013_time_series_rollups_1h_12(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_13 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_13_entity ON geo_013_time_series_rollups_1h_13(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_13_status ON geo_013_time_series_rollups_1h_13(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_13_created ON geo_013_time_series_rollups_1h_13(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_14 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_14_entity ON geo_013_time_series_rollups_1h_14(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_14_status ON geo_013_time_series_rollups_1h_14(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_14_created ON geo_013_time_series_rollups_1h_14(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_15 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_15_entity ON geo_013_time_series_rollups_1h_15(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_15_status ON geo_013_time_series_rollups_1h_15(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_15_created ON geo_013_time_series_rollups_1h_15(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_16 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_16_entity ON geo_013_time_series_rollups_1h_16(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_16_status ON geo_013_time_series_rollups_1h_16(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_16_created ON geo_013_time_series_rollups_1h_16(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_17 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_17_entity ON geo_013_time_series_rollups_1h_17(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_17_status ON geo_013_time_series_rollups_1h_17(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_17_created ON geo_013_time_series_rollups_1h_17(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_18 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_18_entity ON geo_013_time_series_rollups_1h_18(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_18_status ON geo_013_time_series_rollups_1h_18(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_18_created ON geo_013_time_series_rollups_1h_18(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_19 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_19_entity ON geo_013_time_series_rollups_1h_19(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_19_status ON geo_013_time_series_rollups_1h_19(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_19_created ON geo_013_time_series_rollups_1h_19(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_013_time_series_rollups_1h_20 (
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
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_20_entity ON geo_013_time_series_rollups_1h_20(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_20_status ON geo_013_time_series_rollups_1h_20(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_013_time_series_rollups_1h_20_created ON geo_013_time_series_rollups_1h_20(created_at DESC);

COMMIT;
