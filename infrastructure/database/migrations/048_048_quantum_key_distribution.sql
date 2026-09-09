-- Migration 048: Create qkd_nodes, quantum_channels, key_entropy_records tables
-- Generated for GeoNet Sentinel Enterprise High-Throughput Cluster

BEGIN;

CREATE TABLE IF NOT EXISTS migration_log_048 (
    id BIGSERIAL PRIMARY KEY,
    migration_name VARCHAR(255) NOT NULL DEFAULT '048_quantum_key_distribution',
    executed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checksum VARCHAR(64) NOT NULL DEFAULT md5(random()::text)
);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_01 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_01_entity ON geo_048_quantum_key_distribution_01(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_01_status ON geo_048_quantum_key_distribution_01(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_01_created ON geo_048_quantum_key_distribution_01(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_02 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_02_entity ON geo_048_quantum_key_distribution_02(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_02_status ON geo_048_quantum_key_distribution_02(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_02_created ON geo_048_quantum_key_distribution_02(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_03 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_03_entity ON geo_048_quantum_key_distribution_03(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_03_status ON geo_048_quantum_key_distribution_03(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_03_created ON geo_048_quantum_key_distribution_03(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_04 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_04_entity ON geo_048_quantum_key_distribution_04(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_04_status ON geo_048_quantum_key_distribution_04(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_04_created ON geo_048_quantum_key_distribution_04(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_05 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_05_entity ON geo_048_quantum_key_distribution_05(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_05_status ON geo_048_quantum_key_distribution_05(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_05_created ON geo_048_quantum_key_distribution_05(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_06 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_06_entity ON geo_048_quantum_key_distribution_06(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_06_status ON geo_048_quantum_key_distribution_06(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_06_created ON geo_048_quantum_key_distribution_06(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_07 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_07_entity ON geo_048_quantum_key_distribution_07(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_07_status ON geo_048_quantum_key_distribution_07(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_07_created ON geo_048_quantum_key_distribution_07(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_08 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_08_entity ON geo_048_quantum_key_distribution_08(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_08_status ON geo_048_quantum_key_distribution_08(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_08_created ON geo_048_quantum_key_distribution_08(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_09 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_09_entity ON geo_048_quantum_key_distribution_09(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_09_status ON geo_048_quantum_key_distribution_09(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_09_created ON geo_048_quantum_key_distribution_09(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_10 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_10_entity ON geo_048_quantum_key_distribution_10(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_10_status ON geo_048_quantum_key_distribution_10(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_10_created ON geo_048_quantum_key_distribution_10(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_11 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_11_entity ON geo_048_quantum_key_distribution_11(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_11_status ON geo_048_quantum_key_distribution_11(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_11_created ON geo_048_quantum_key_distribution_11(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_12 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_12_entity ON geo_048_quantum_key_distribution_12(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_12_status ON geo_048_quantum_key_distribution_12(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_12_created ON geo_048_quantum_key_distribution_12(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_13 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_13_entity ON geo_048_quantum_key_distribution_13(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_13_status ON geo_048_quantum_key_distribution_13(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_13_created ON geo_048_quantum_key_distribution_13(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_14 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_14_entity ON geo_048_quantum_key_distribution_14(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_14_status ON geo_048_quantum_key_distribution_14(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_14_created ON geo_048_quantum_key_distribution_14(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_15 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_15_entity ON geo_048_quantum_key_distribution_15(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_15_status ON geo_048_quantum_key_distribution_15(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_15_created ON geo_048_quantum_key_distribution_15(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_16 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_16_entity ON geo_048_quantum_key_distribution_16(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_16_status ON geo_048_quantum_key_distribution_16(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_16_created ON geo_048_quantum_key_distribution_16(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_17 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_17_entity ON geo_048_quantum_key_distribution_17(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_17_status ON geo_048_quantum_key_distribution_17(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_17_created ON geo_048_quantum_key_distribution_17(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_18 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_18_entity ON geo_048_quantum_key_distribution_18(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_18_status ON geo_048_quantum_key_distribution_18(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_18_created ON geo_048_quantum_key_distribution_18(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_19 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_19_entity ON geo_048_quantum_key_distribution_19(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_19_status ON geo_048_quantum_key_distribution_19(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_19_created ON geo_048_quantum_key_distribution_19(created_at DESC);

CREATE TABLE IF NOT EXISTS geo_048_quantum_key_distribution_20 (
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
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_20_entity ON geo_048_quantum_key_distribution_20(entity_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_20_status ON geo_048_quantum_key_distribution_20(status_code);
CREATE INDEX IF NOT EXISTS idx_geo_048_quantum_key_distribution_20_created ON geo_048_quantum_key_distribution_20(created_at DESC);

COMMIT;
