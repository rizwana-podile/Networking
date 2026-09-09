-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #4
-- Quarter: Q1, Sub-table Partition: 4

CREATE TABLE IF NOT EXISTS location_history_2026_p4_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_01_device_ts
    ON location_history_2026_p4_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_01_geom
    ON location_history_2026_p4_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_02_device_ts
    ON location_history_2026_p4_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_02_geom
    ON location_history_2026_p4_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_03_device_ts
    ON location_history_2026_p4_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_03_geom
    ON location_history_2026_p4_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_04_device_ts
    ON location_history_2026_p4_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_04_geom
    ON location_history_2026_p4_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_05_device_ts
    ON location_history_2026_p4_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_05_geom
    ON location_history_2026_p4_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_06_device_ts
    ON location_history_2026_p4_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_06_geom
    ON location_history_2026_p4_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_07_device_ts
    ON location_history_2026_p4_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_07_geom
    ON location_history_2026_p4_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_08_device_ts
    ON location_history_2026_p4_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_08_geom
    ON location_history_2026_p4_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_09_device_ts
    ON location_history_2026_p4_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_09_geom
    ON location_history_2026_p4_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_10_device_ts
    ON location_history_2026_p4_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_10_geom
    ON location_history_2026_p4_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_11_device_ts
    ON location_history_2026_p4_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_11_geom
    ON location_history_2026_p4_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_12_device_ts
    ON location_history_2026_p4_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_12_geom
    ON location_history_2026_p4_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_13_device_ts
    ON location_history_2026_p4_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_13_geom
    ON location_history_2026_p4_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_14_device_ts
    ON location_history_2026_p4_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_14_geom
    ON location_history_2026_p4_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_15_device_ts
    ON location_history_2026_p4_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_15_geom
    ON location_history_2026_p4_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_16_device_ts
    ON location_history_2026_p4_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_16_geom
    ON location_history_2026_p4_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_17_device_ts
    ON location_history_2026_p4_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_17_geom
    ON location_history_2026_p4_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_18_device_ts
    ON location_history_2026_p4_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_18_geom
    ON location_history_2026_p4_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_19_device_ts
    ON location_history_2026_p4_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_19_geom
    ON location_history_2026_p4_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_20_device_ts
    ON location_history_2026_p4_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_20_geom
    ON location_history_2026_p4_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_21_device_ts
    ON location_history_2026_p4_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_21_geom
    ON location_history_2026_p4_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_22_device_ts
    ON location_history_2026_p4_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_22_geom
    ON location_history_2026_p4_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_23_device_ts
    ON location_history_2026_p4_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_23_geom
    ON location_history_2026_p4_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_24_device_ts
    ON location_history_2026_p4_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_24_geom
    ON location_history_2026_p4_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_25_device_ts
    ON location_history_2026_p4_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_25_geom
    ON location_history_2026_p4_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_26_device_ts
    ON location_history_2026_p4_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_26_geom
    ON location_history_2026_p4_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_27_device_ts
    ON location_history_2026_p4_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_27_geom
    ON location_history_2026_p4_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_28_device_ts
    ON location_history_2026_p4_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_28_geom
    ON location_history_2026_p4_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_29_device_ts
    ON location_history_2026_p4_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_29_geom
    ON location_history_2026_p4_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_30_device_ts
    ON location_history_2026_p4_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_30_geom
    ON location_history_2026_p4_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_31_device_ts
    ON location_history_2026_p4_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_31_geom
    ON location_history_2026_p4_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_32_device_ts
    ON location_history_2026_p4_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_32_geom
    ON location_history_2026_p4_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_33_device_ts
    ON location_history_2026_p4_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_33_geom
    ON location_history_2026_p4_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_34_device_ts
    ON location_history_2026_p4_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_34_geom
    ON location_history_2026_p4_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_35_device_ts
    ON location_history_2026_p4_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_35_geom
    ON location_history_2026_p4_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_36_device_ts
    ON location_history_2026_p4_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_36_geom
    ON location_history_2026_p4_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_37_device_ts
    ON location_history_2026_p4_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_37_geom
    ON location_history_2026_p4_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_38_device_ts
    ON location_history_2026_p4_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_38_geom
    ON location_history_2026_p4_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_39_device_ts
    ON location_history_2026_p4_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_39_geom
    ON location_history_2026_p4_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_40_device_ts
    ON location_history_2026_p4_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_40_geom
    ON location_history_2026_p4_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_41_device_ts
    ON location_history_2026_p4_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_41_geom
    ON location_history_2026_p4_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_42_device_ts
    ON location_history_2026_p4_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_42_geom
    ON location_history_2026_p4_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_43_device_ts
    ON location_history_2026_p4_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_43_geom
    ON location_history_2026_p4_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_44_device_ts
    ON location_history_2026_p4_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_44_geom
    ON location_history_2026_p4_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_45_device_ts
    ON location_history_2026_p4_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_45_geom
    ON location_history_2026_p4_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_46_device_ts
    ON location_history_2026_p4_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_46_geom
    ON location_history_2026_p4_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_47_device_ts
    ON location_history_2026_p4_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_47_geom
    ON location_history_2026_p4_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_48_device_ts
    ON location_history_2026_p4_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_48_geom
    ON location_history_2026_p4_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_49_device_ts
    ON location_history_2026_p4_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_49_geom
    ON location_history_2026_p4_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p4_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-005-01 00:00:00+00') TO ('2026-005-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_50_device_ts
    ON location_history_2026_p4_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p4_50_geom
    ON location_history_2026_p4_50 USING GIST (coordinates);

