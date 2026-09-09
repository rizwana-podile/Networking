-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #8
-- Quarter: Q1, Sub-table Partition: 8

CREATE TABLE IF NOT EXISTS location_history_2026_p8_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_01_device_ts
    ON location_history_2026_p8_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_01_geom
    ON location_history_2026_p8_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_02_device_ts
    ON location_history_2026_p8_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_02_geom
    ON location_history_2026_p8_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_03_device_ts
    ON location_history_2026_p8_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_03_geom
    ON location_history_2026_p8_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_04_device_ts
    ON location_history_2026_p8_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_04_geom
    ON location_history_2026_p8_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_05_device_ts
    ON location_history_2026_p8_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_05_geom
    ON location_history_2026_p8_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_06_device_ts
    ON location_history_2026_p8_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_06_geom
    ON location_history_2026_p8_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_07_device_ts
    ON location_history_2026_p8_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_07_geom
    ON location_history_2026_p8_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_08_device_ts
    ON location_history_2026_p8_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_08_geom
    ON location_history_2026_p8_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_09_device_ts
    ON location_history_2026_p8_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_09_geom
    ON location_history_2026_p8_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_10_device_ts
    ON location_history_2026_p8_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_10_geom
    ON location_history_2026_p8_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_11_device_ts
    ON location_history_2026_p8_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_11_geom
    ON location_history_2026_p8_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_12_device_ts
    ON location_history_2026_p8_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_12_geom
    ON location_history_2026_p8_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_13_device_ts
    ON location_history_2026_p8_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_13_geom
    ON location_history_2026_p8_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_14_device_ts
    ON location_history_2026_p8_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_14_geom
    ON location_history_2026_p8_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_15_device_ts
    ON location_history_2026_p8_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_15_geom
    ON location_history_2026_p8_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_16_device_ts
    ON location_history_2026_p8_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_16_geom
    ON location_history_2026_p8_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_17_device_ts
    ON location_history_2026_p8_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_17_geom
    ON location_history_2026_p8_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_18_device_ts
    ON location_history_2026_p8_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_18_geom
    ON location_history_2026_p8_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_19_device_ts
    ON location_history_2026_p8_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_19_geom
    ON location_history_2026_p8_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_20_device_ts
    ON location_history_2026_p8_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_20_geom
    ON location_history_2026_p8_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_21_device_ts
    ON location_history_2026_p8_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_21_geom
    ON location_history_2026_p8_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_22_device_ts
    ON location_history_2026_p8_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_22_geom
    ON location_history_2026_p8_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_23_device_ts
    ON location_history_2026_p8_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_23_geom
    ON location_history_2026_p8_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_24_device_ts
    ON location_history_2026_p8_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_24_geom
    ON location_history_2026_p8_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_25_device_ts
    ON location_history_2026_p8_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_25_geom
    ON location_history_2026_p8_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_26_device_ts
    ON location_history_2026_p8_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_26_geom
    ON location_history_2026_p8_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_27_device_ts
    ON location_history_2026_p8_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_27_geom
    ON location_history_2026_p8_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_28_device_ts
    ON location_history_2026_p8_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_28_geom
    ON location_history_2026_p8_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_29_device_ts
    ON location_history_2026_p8_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_29_geom
    ON location_history_2026_p8_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_30_device_ts
    ON location_history_2026_p8_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_30_geom
    ON location_history_2026_p8_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_31_device_ts
    ON location_history_2026_p8_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_31_geom
    ON location_history_2026_p8_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_32_device_ts
    ON location_history_2026_p8_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_32_geom
    ON location_history_2026_p8_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_33_device_ts
    ON location_history_2026_p8_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_33_geom
    ON location_history_2026_p8_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_34_device_ts
    ON location_history_2026_p8_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_34_geom
    ON location_history_2026_p8_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_35_device_ts
    ON location_history_2026_p8_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_35_geom
    ON location_history_2026_p8_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_36_device_ts
    ON location_history_2026_p8_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_36_geom
    ON location_history_2026_p8_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_37_device_ts
    ON location_history_2026_p8_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_37_geom
    ON location_history_2026_p8_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_38_device_ts
    ON location_history_2026_p8_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_38_geom
    ON location_history_2026_p8_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_39_device_ts
    ON location_history_2026_p8_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_39_geom
    ON location_history_2026_p8_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_40_device_ts
    ON location_history_2026_p8_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_40_geom
    ON location_history_2026_p8_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_41_device_ts
    ON location_history_2026_p8_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_41_geom
    ON location_history_2026_p8_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_42_device_ts
    ON location_history_2026_p8_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_42_geom
    ON location_history_2026_p8_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_43_device_ts
    ON location_history_2026_p8_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_43_geom
    ON location_history_2026_p8_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_44_device_ts
    ON location_history_2026_p8_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_44_geom
    ON location_history_2026_p8_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_45_device_ts
    ON location_history_2026_p8_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_45_geom
    ON location_history_2026_p8_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_46_device_ts
    ON location_history_2026_p8_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_46_geom
    ON location_history_2026_p8_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_47_device_ts
    ON location_history_2026_p8_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_47_geom
    ON location_history_2026_p8_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_48_device_ts
    ON location_history_2026_p8_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_48_geom
    ON location_history_2026_p8_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_49_device_ts
    ON location_history_2026_p8_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_49_geom
    ON location_history_2026_p8_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p8_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-009-01 00:00:00+00') TO ('2026-009-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_50_device_ts
    ON location_history_2026_p8_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p8_50_geom
    ON location_history_2026_p8_50 USING GIST (coordinates);

