-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #10
-- Quarter: Q3, Sub-table Partition: 10

CREATE TABLE IF NOT EXISTS location_history_2026_p10_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_01_device_ts
    ON location_history_2026_p10_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_01_geom
    ON location_history_2026_p10_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_02_device_ts
    ON location_history_2026_p10_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_02_geom
    ON location_history_2026_p10_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_03_device_ts
    ON location_history_2026_p10_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_03_geom
    ON location_history_2026_p10_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_04_device_ts
    ON location_history_2026_p10_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_04_geom
    ON location_history_2026_p10_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_05_device_ts
    ON location_history_2026_p10_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_05_geom
    ON location_history_2026_p10_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_06_device_ts
    ON location_history_2026_p10_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_06_geom
    ON location_history_2026_p10_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_07_device_ts
    ON location_history_2026_p10_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_07_geom
    ON location_history_2026_p10_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_08_device_ts
    ON location_history_2026_p10_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_08_geom
    ON location_history_2026_p10_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_09_device_ts
    ON location_history_2026_p10_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_09_geom
    ON location_history_2026_p10_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_10_device_ts
    ON location_history_2026_p10_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_10_geom
    ON location_history_2026_p10_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_11_device_ts
    ON location_history_2026_p10_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_11_geom
    ON location_history_2026_p10_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_12_device_ts
    ON location_history_2026_p10_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_12_geom
    ON location_history_2026_p10_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_13_device_ts
    ON location_history_2026_p10_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_13_geom
    ON location_history_2026_p10_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_14_device_ts
    ON location_history_2026_p10_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_14_geom
    ON location_history_2026_p10_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_15_device_ts
    ON location_history_2026_p10_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_15_geom
    ON location_history_2026_p10_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_16_device_ts
    ON location_history_2026_p10_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_16_geom
    ON location_history_2026_p10_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_17_device_ts
    ON location_history_2026_p10_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_17_geom
    ON location_history_2026_p10_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_18_device_ts
    ON location_history_2026_p10_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_18_geom
    ON location_history_2026_p10_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_19_device_ts
    ON location_history_2026_p10_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_19_geom
    ON location_history_2026_p10_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_20_device_ts
    ON location_history_2026_p10_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_20_geom
    ON location_history_2026_p10_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_21_device_ts
    ON location_history_2026_p10_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_21_geom
    ON location_history_2026_p10_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_22_device_ts
    ON location_history_2026_p10_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_22_geom
    ON location_history_2026_p10_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_23_device_ts
    ON location_history_2026_p10_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_23_geom
    ON location_history_2026_p10_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_24_device_ts
    ON location_history_2026_p10_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_24_geom
    ON location_history_2026_p10_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_25_device_ts
    ON location_history_2026_p10_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_25_geom
    ON location_history_2026_p10_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_26_device_ts
    ON location_history_2026_p10_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_26_geom
    ON location_history_2026_p10_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_27_device_ts
    ON location_history_2026_p10_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_27_geom
    ON location_history_2026_p10_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_28_device_ts
    ON location_history_2026_p10_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_28_geom
    ON location_history_2026_p10_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_29_device_ts
    ON location_history_2026_p10_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_29_geom
    ON location_history_2026_p10_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_30_device_ts
    ON location_history_2026_p10_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_30_geom
    ON location_history_2026_p10_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_31_device_ts
    ON location_history_2026_p10_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_31_geom
    ON location_history_2026_p10_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_32_device_ts
    ON location_history_2026_p10_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_32_geom
    ON location_history_2026_p10_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_33_device_ts
    ON location_history_2026_p10_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_33_geom
    ON location_history_2026_p10_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_34_device_ts
    ON location_history_2026_p10_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_34_geom
    ON location_history_2026_p10_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_35_device_ts
    ON location_history_2026_p10_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_35_geom
    ON location_history_2026_p10_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_36_device_ts
    ON location_history_2026_p10_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_36_geom
    ON location_history_2026_p10_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_37_device_ts
    ON location_history_2026_p10_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_37_geom
    ON location_history_2026_p10_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_38_device_ts
    ON location_history_2026_p10_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_38_geom
    ON location_history_2026_p10_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_39_device_ts
    ON location_history_2026_p10_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_39_geom
    ON location_history_2026_p10_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_40_device_ts
    ON location_history_2026_p10_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_40_geom
    ON location_history_2026_p10_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_41_device_ts
    ON location_history_2026_p10_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_41_geom
    ON location_history_2026_p10_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_42_device_ts
    ON location_history_2026_p10_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_42_geom
    ON location_history_2026_p10_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_43_device_ts
    ON location_history_2026_p10_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_43_geom
    ON location_history_2026_p10_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_44_device_ts
    ON location_history_2026_p10_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_44_geom
    ON location_history_2026_p10_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_45_device_ts
    ON location_history_2026_p10_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_45_geom
    ON location_history_2026_p10_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_46_device_ts
    ON location_history_2026_p10_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_46_geom
    ON location_history_2026_p10_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_47_device_ts
    ON location_history_2026_p10_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_47_geom
    ON location_history_2026_p10_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_48_device_ts
    ON location_history_2026_p10_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_48_geom
    ON location_history_2026_p10_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_49_device_ts
    ON location_history_2026_p10_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_49_geom
    ON location_history_2026_p10_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p10_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-011-01 00:00:00+00') TO ('2026-011-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_50_device_ts
    ON location_history_2026_p10_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p10_50_geom
    ON location_history_2026_p10_50 USING GIST (coordinates);

