-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #3
-- Quarter: Q4, Sub-table Partition: 3

CREATE TABLE IF NOT EXISTS location_history_2026_p3_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_01_device_ts
    ON location_history_2026_p3_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_01_geom
    ON location_history_2026_p3_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_02_device_ts
    ON location_history_2026_p3_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_02_geom
    ON location_history_2026_p3_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_03_device_ts
    ON location_history_2026_p3_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_03_geom
    ON location_history_2026_p3_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_04_device_ts
    ON location_history_2026_p3_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_04_geom
    ON location_history_2026_p3_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_05_device_ts
    ON location_history_2026_p3_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_05_geom
    ON location_history_2026_p3_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_06_device_ts
    ON location_history_2026_p3_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_06_geom
    ON location_history_2026_p3_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_07_device_ts
    ON location_history_2026_p3_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_07_geom
    ON location_history_2026_p3_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_08_device_ts
    ON location_history_2026_p3_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_08_geom
    ON location_history_2026_p3_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_09_device_ts
    ON location_history_2026_p3_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_09_geom
    ON location_history_2026_p3_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_10_device_ts
    ON location_history_2026_p3_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_10_geom
    ON location_history_2026_p3_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_11_device_ts
    ON location_history_2026_p3_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_11_geom
    ON location_history_2026_p3_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_12_device_ts
    ON location_history_2026_p3_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_12_geom
    ON location_history_2026_p3_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_13_device_ts
    ON location_history_2026_p3_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_13_geom
    ON location_history_2026_p3_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_14_device_ts
    ON location_history_2026_p3_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_14_geom
    ON location_history_2026_p3_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_15_device_ts
    ON location_history_2026_p3_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_15_geom
    ON location_history_2026_p3_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_16_device_ts
    ON location_history_2026_p3_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_16_geom
    ON location_history_2026_p3_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_17_device_ts
    ON location_history_2026_p3_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_17_geom
    ON location_history_2026_p3_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_18_device_ts
    ON location_history_2026_p3_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_18_geom
    ON location_history_2026_p3_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_19_device_ts
    ON location_history_2026_p3_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_19_geom
    ON location_history_2026_p3_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_20_device_ts
    ON location_history_2026_p3_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_20_geom
    ON location_history_2026_p3_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_21_device_ts
    ON location_history_2026_p3_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_21_geom
    ON location_history_2026_p3_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_22_device_ts
    ON location_history_2026_p3_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_22_geom
    ON location_history_2026_p3_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_23_device_ts
    ON location_history_2026_p3_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_23_geom
    ON location_history_2026_p3_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_24_device_ts
    ON location_history_2026_p3_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_24_geom
    ON location_history_2026_p3_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_25_device_ts
    ON location_history_2026_p3_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_25_geom
    ON location_history_2026_p3_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_26_device_ts
    ON location_history_2026_p3_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_26_geom
    ON location_history_2026_p3_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_27_device_ts
    ON location_history_2026_p3_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_27_geom
    ON location_history_2026_p3_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_28_device_ts
    ON location_history_2026_p3_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_28_geom
    ON location_history_2026_p3_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_29_device_ts
    ON location_history_2026_p3_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_29_geom
    ON location_history_2026_p3_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_30_device_ts
    ON location_history_2026_p3_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_30_geom
    ON location_history_2026_p3_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_31_device_ts
    ON location_history_2026_p3_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_31_geom
    ON location_history_2026_p3_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_32_device_ts
    ON location_history_2026_p3_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_32_geom
    ON location_history_2026_p3_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_33_device_ts
    ON location_history_2026_p3_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_33_geom
    ON location_history_2026_p3_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_34_device_ts
    ON location_history_2026_p3_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_34_geom
    ON location_history_2026_p3_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_35_device_ts
    ON location_history_2026_p3_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_35_geom
    ON location_history_2026_p3_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_36_device_ts
    ON location_history_2026_p3_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_36_geom
    ON location_history_2026_p3_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_37_device_ts
    ON location_history_2026_p3_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_37_geom
    ON location_history_2026_p3_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_38_device_ts
    ON location_history_2026_p3_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_38_geom
    ON location_history_2026_p3_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_39_device_ts
    ON location_history_2026_p3_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_39_geom
    ON location_history_2026_p3_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_40_device_ts
    ON location_history_2026_p3_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_40_geom
    ON location_history_2026_p3_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_41_device_ts
    ON location_history_2026_p3_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_41_geom
    ON location_history_2026_p3_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_42_device_ts
    ON location_history_2026_p3_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_42_geom
    ON location_history_2026_p3_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_43_device_ts
    ON location_history_2026_p3_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_43_geom
    ON location_history_2026_p3_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_44_device_ts
    ON location_history_2026_p3_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_44_geom
    ON location_history_2026_p3_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_45_device_ts
    ON location_history_2026_p3_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_45_geom
    ON location_history_2026_p3_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_46_device_ts
    ON location_history_2026_p3_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_46_geom
    ON location_history_2026_p3_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_47_device_ts
    ON location_history_2026_p3_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_47_geom
    ON location_history_2026_p3_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_48_device_ts
    ON location_history_2026_p3_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_48_geom
    ON location_history_2026_p3_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_49_device_ts
    ON location_history_2026_p3_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_49_geom
    ON location_history_2026_p3_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p3_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-004-01 00:00:00+00') TO ('2026-004-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_50_device_ts
    ON location_history_2026_p3_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p3_50_geom
    ON location_history_2026_p3_50 USING GIST (coordinates);

