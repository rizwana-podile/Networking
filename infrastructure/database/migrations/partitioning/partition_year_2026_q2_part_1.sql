-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #1
-- Quarter: Q2, Sub-table Partition: 1

CREATE TABLE IF NOT EXISTS location_history_2026_p1_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_01_device_ts
    ON location_history_2026_p1_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_01_geom
    ON location_history_2026_p1_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_02_device_ts
    ON location_history_2026_p1_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_02_geom
    ON location_history_2026_p1_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_03_device_ts
    ON location_history_2026_p1_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_03_geom
    ON location_history_2026_p1_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_04_device_ts
    ON location_history_2026_p1_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_04_geom
    ON location_history_2026_p1_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_05_device_ts
    ON location_history_2026_p1_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_05_geom
    ON location_history_2026_p1_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_06_device_ts
    ON location_history_2026_p1_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_06_geom
    ON location_history_2026_p1_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_07_device_ts
    ON location_history_2026_p1_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_07_geom
    ON location_history_2026_p1_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_08_device_ts
    ON location_history_2026_p1_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_08_geom
    ON location_history_2026_p1_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_09_device_ts
    ON location_history_2026_p1_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_09_geom
    ON location_history_2026_p1_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_10_device_ts
    ON location_history_2026_p1_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_10_geom
    ON location_history_2026_p1_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_11_device_ts
    ON location_history_2026_p1_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_11_geom
    ON location_history_2026_p1_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_12_device_ts
    ON location_history_2026_p1_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_12_geom
    ON location_history_2026_p1_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_13_device_ts
    ON location_history_2026_p1_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_13_geom
    ON location_history_2026_p1_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_14_device_ts
    ON location_history_2026_p1_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_14_geom
    ON location_history_2026_p1_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_15_device_ts
    ON location_history_2026_p1_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_15_geom
    ON location_history_2026_p1_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_16_device_ts
    ON location_history_2026_p1_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_16_geom
    ON location_history_2026_p1_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_17_device_ts
    ON location_history_2026_p1_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_17_geom
    ON location_history_2026_p1_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_18_device_ts
    ON location_history_2026_p1_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_18_geom
    ON location_history_2026_p1_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_19_device_ts
    ON location_history_2026_p1_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_19_geom
    ON location_history_2026_p1_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_20_device_ts
    ON location_history_2026_p1_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_20_geom
    ON location_history_2026_p1_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_21_device_ts
    ON location_history_2026_p1_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_21_geom
    ON location_history_2026_p1_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_22_device_ts
    ON location_history_2026_p1_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_22_geom
    ON location_history_2026_p1_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_23_device_ts
    ON location_history_2026_p1_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_23_geom
    ON location_history_2026_p1_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_24_device_ts
    ON location_history_2026_p1_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_24_geom
    ON location_history_2026_p1_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_25_device_ts
    ON location_history_2026_p1_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_25_geom
    ON location_history_2026_p1_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_26_device_ts
    ON location_history_2026_p1_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_26_geom
    ON location_history_2026_p1_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_27_device_ts
    ON location_history_2026_p1_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_27_geom
    ON location_history_2026_p1_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_28_device_ts
    ON location_history_2026_p1_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_28_geom
    ON location_history_2026_p1_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_29_device_ts
    ON location_history_2026_p1_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_29_geom
    ON location_history_2026_p1_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_30_device_ts
    ON location_history_2026_p1_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_30_geom
    ON location_history_2026_p1_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_31_device_ts
    ON location_history_2026_p1_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_31_geom
    ON location_history_2026_p1_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_32_device_ts
    ON location_history_2026_p1_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_32_geom
    ON location_history_2026_p1_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_33_device_ts
    ON location_history_2026_p1_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_33_geom
    ON location_history_2026_p1_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_34_device_ts
    ON location_history_2026_p1_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_34_geom
    ON location_history_2026_p1_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_35_device_ts
    ON location_history_2026_p1_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_35_geom
    ON location_history_2026_p1_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_36_device_ts
    ON location_history_2026_p1_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_36_geom
    ON location_history_2026_p1_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_37_device_ts
    ON location_history_2026_p1_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_37_geom
    ON location_history_2026_p1_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_38_device_ts
    ON location_history_2026_p1_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_38_geom
    ON location_history_2026_p1_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_39_device_ts
    ON location_history_2026_p1_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_39_geom
    ON location_history_2026_p1_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_40_device_ts
    ON location_history_2026_p1_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_40_geom
    ON location_history_2026_p1_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_41_device_ts
    ON location_history_2026_p1_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_41_geom
    ON location_history_2026_p1_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_42_device_ts
    ON location_history_2026_p1_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_42_geom
    ON location_history_2026_p1_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_43_device_ts
    ON location_history_2026_p1_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_43_geom
    ON location_history_2026_p1_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_44_device_ts
    ON location_history_2026_p1_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_44_geom
    ON location_history_2026_p1_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_45_device_ts
    ON location_history_2026_p1_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_45_geom
    ON location_history_2026_p1_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_46_device_ts
    ON location_history_2026_p1_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_46_geom
    ON location_history_2026_p1_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_47_device_ts
    ON location_history_2026_p1_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_47_geom
    ON location_history_2026_p1_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_48_device_ts
    ON location_history_2026_p1_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_48_geom
    ON location_history_2026_p1_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_49_device_ts
    ON location_history_2026_p1_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_49_geom
    ON location_history_2026_p1_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p1_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-002-01 00:00:00+00') TO ('2026-002-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_50_device_ts
    ON location_history_2026_p1_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p1_50_geom
    ON location_history_2026_p1_50 USING GIST (coordinates);

