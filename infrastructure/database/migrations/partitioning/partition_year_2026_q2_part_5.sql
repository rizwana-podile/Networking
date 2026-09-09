-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #5
-- Quarter: Q2, Sub-table Partition: 5

CREATE TABLE IF NOT EXISTS location_history_2026_p5_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_01_device_ts
    ON location_history_2026_p5_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_01_geom
    ON location_history_2026_p5_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_02_device_ts
    ON location_history_2026_p5_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_02_geom
    ON location_history_2026_p5_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_03_device_ts
    ON location_history_2026_p5_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_03_geom
    ON location_history_2026_p5_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_04_device_ts
    ON location_history_2026_p5_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_04_geom
    ON location_history_2026_p5_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_05_device_ts
    ON location_history_2026_p5_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_05_geom
    ON location_history_2026_p5_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_06_device_ts
    ON location_history_2026_p5_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_06_geom
    ON location_history_2026_p5_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_07_device_ts
    ON location_history_2026_p5_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_07_geom
    ON location_history_2026_p5_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_08_device_ts
    ON location_history_2026_p5_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_08_geom
    ON location_history_2026_p5_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_09_device_ts
    ON location_history_2026_p5_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_09_geom
    ON location_history_2026_p5_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_10_device_ts
    ON location_history_2026_p5_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_10_geom
    ON location_history_2026_p5_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_11_device_ts
    ON location_history_2026_p5_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_11_geom
    ON location_history_2026_p5_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_12_device_ts
    ON location_history_2026_p5_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_12_geom
    ON location_history_2026_p5_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_13_device_ts
    ON location_history_2026_p5_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_13_geom
    ON location_history_2026_p5_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_14_device_ts
    ON location_history_2026_p5_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_14_geom
    ON location_history_2026_p5_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_15_device_ts
    ON location_history_2026_p5_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_15_geom
    ON location_history_2026_p5_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_16_device_ts
    ON location_history_2026_p5_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_16_geom
    ON location_history_2026_p5_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_17_device_ts
    ON location_history_2026_p5_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_17_geom
    ON location_history_2026_p5_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_18_device_ts
    ON location_history_2026_p5_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_18_geom
    ON location_history_2026_p5_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_19_device_ts
    ON location_history_2026_p5_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_19_geom
    ON location_history_2026_p5_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_20_device_ts
    ON location_history_2026_p5_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_20_geom
    ON location_history_2026_p5_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_21_device_ts
    ON location_history_2026_p5_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_21_geom
    ON location_history_2026_p5_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_22_device_ts
    ON location_history_2026_p5_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_22_geom
    ON location_history_2026_p5_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_23_device_ts
    ON location_history_2026_p5_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_23_geom
    ON location_history_2026_p5_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_24_device_ts
    ON location_history_2026_p5_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_24_geom
    ON location_history_2026_p5_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_25_device_ts
    ON location_history_2026_p5_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_25_geom
    ON location_history_2026_p5_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_26_device_ts
    ON location_history_2026_p5_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_26_geom
    ON location_history_2026_p5_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_27_device_ts
    ON location_history_2026_p5_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_27_geom
    ON location_history_2026_p5_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_28_device_ts
    ON location_history_2026_p5_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_28_geom
    ON location_history_2026_p5_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_29_device_ts
    ON location_history_2026_p5_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_29_geom
    ON location_history_2026_p5_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_30_device_ts
    ON location_history_2026_p5_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_30_geom
    ON location_history_2026_p5_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_31_device_ts
    ON location_history_2026_p5_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_31_geom
    ON location_history_2026_p5_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_32_device_ts
    ON location_history_2026_p5_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_32_geom
    ON location_history_2026_p5_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_33_device_ts
    ON location_history_2026_p5_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_33_geom
    ON location_history_2026_p5_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_34_device_ts
    ON location_history_2026_p5_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_34_geom
    ON location_history_2026_p5_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_35_device_ts
    ON location_history_2026_p5_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_35_geom
    ON location_history_2026_p5_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_36_device_ts
    ON location_history_2026_p5_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_36_geom
    ON location_history_2026_p5_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_37_device_ts
    ON location_history_2026_p5_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_37_geom
    ON location_history_2026_p5_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_38_device_ts
    ON location_history_2026_p5_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_38_geom
    ON location_history_2026_p5_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_39_device_ts
    ON location_history_2026_p5_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_39_geom
    ON location_history_2026_p5_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_40_device_ts
    ON location_history_2026_p5_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_40_geom
    ON location_history_2026_p5_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_41_device_ts
    ON location_history_2026_p5_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_41_geom
    ON location_history_2026_p5_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_42_device_ts
    ON location_history_2026_p5_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_42_geom
    ON location_history_2026_p5_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_43_device_ts
    ON location_history_2026_p5_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_43_geom
    ON location_history_2026_p5_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_44_device_ts
    ON location_history_2026_p5_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_44_geom
    ON location_history_2026_p5_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_45_device_ts
    ON location_history_2026_p5_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_45_geom
    ON location_history_2026_p5_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_46_device_ts
    ON location_history_2026_p5_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_46_geom
    ON location_history_2026_p5_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_47_device_ts
    ON location_history_2026_p5_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_47_geom
    ON location_history_2026_p5_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_48_device_ts
    ON location_history_2026_p5_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_48_geom
    ON location_history_2026_p5_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_49_device_ts
    ON location_history_2026_p5_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_49_geom
    ON location_history_2026_p5_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p5_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-006-01 00:00:00+00') TO ('2026-006-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_50_device_ts
    ON location_history_2026_p5_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p5_50_geom
    ON location_history_2026_p5_50 USING GIST (coordinates);

