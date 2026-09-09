-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #2
-- Quarter: Q3, Sub-table Partition: 2

CREATE TABLE IF NOT EXISTS location_history_2026_p2_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_01_device_ts
    ON location_history_2026_p2_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_01_geom
    ON location_history_2026_p2_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_02_device_ts
    ON location_history_2026_p2_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_02_geom
    ON location_history_2026_p2_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_03_device_ts
    ON location_history_2026_p2_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_03_geom
    ON location_history_2026_p2_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_04_device_ts
    ON location_history_2026_p2_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_04_geom
    ON location_history_2026_p2_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_05_device_ts
    ON location_history_2026_p2_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_05_geom
    ON location_history_2026_p2_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_06_device_ts
    ON location_history_2026_p2_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_06_geom
    ON location_history_2026_p2_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_07_device_ts
    ON location_history_2026_p2_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_07_geom
    ON location_history_2026_p2_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_08_device_ts
    ON location_history_2026_p2_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_08_geom
    ON location_history_2026_p2_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_09_device_ts
    ON location_history_2026_p2_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_09_geom
    ON location_history_2026_p2_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_10_device_ts
    ON location_history_2026_p2_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_10_geom
    ON location_history_2026_p2_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_11_device_ts
    ON location_history_2026_p2_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_11_geom
    ON location_history_2026_p2_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_12_device_ts
    ON location_history_2026_p2_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_12_geom
    ON location_history_2026_p2_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_13_device_ts
    ON location_history_2026_p2_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_13_geom
    ON location_history_2026_p2_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_14_device_ts
    ON location_history_2026_p2_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_14_geom
    ON location_history_2026_p2_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_15_device_ts
    ON location_history_2026_p2_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_15_geom
    ON location_history_2026_p2_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_16_device_ts
    ON location_history_2026_p2_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_16_geom
    ON location_history_2026_p2_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_17_device_ts
    ON location_history_2026_p2_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_17_geom
    ON location_history_2026_p2_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_18_device_ts
    ON location_history_2026_p2_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_18_geom
    ON location_history_2026_p2_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_19_device_ts
    ON location_history_2026_p2_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_19_geom
    ON location_history_2026_p2_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_20_device_ts
    ON location_history_2026_p2_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_20_geom
    ON location_history_2026_p2_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_21_device_ts
    ON location_history_2026_p2_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_21_geom
    ON location_history_2026_p2_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_22_device_ts
    ON location_history_2026_p2_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_22_geom
    ON location_history_2026_p2_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_23_device_ts
    ON location_history_2026_p2_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_23_geom
    ON location_history_2026_p2_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_24_device_ts
    ON location_history_2026_p2_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_24_geom
    ON location_history_2026_p2_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_25_device_ts
    ON location_history_2026_p2_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_25_geom
    ON location_history_2026_p2_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_26_device_ts
    ON location_history_2026_p2_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_26_geom
    ON location_history_2026_p2_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_27_device_ts
    ON location_history_2026_p2_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_27_geom
    ON location_history_2026_p2_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_28_device_ts
    ON location_history_2026_p2_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_28_geom
    ON location_history_2026_p2_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_29_device_ts
    ON location_history_2026_p2_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_29_geom
    ON location_history_2026_p2_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_30_device_ts
    ON location_history_2026_p2_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_30_geom
    ON location_history_2026_p2_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_31_device_ts
    ON location_history_2026_p2_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_31_geom
    ON location_history_2026_p2_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_32_device_ts
    ON location_history_2026_p2_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_32_geom
    ON location_history_2026_p2_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_33_device_ts
    ON location_history_2026_p2_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_33_geom
    ON location_history_2026_p2_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_34_device_ts
    ON location_history_2026_p2_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_34_geom
    ON location_history_2026_p2_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_35_device_ts
    ON location_history_2026_p2_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_35_geom
    ON location_history_2026_p2_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_36_device_ts
    ON location_history_2026_p2_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_36_geom
    ON location_history_2026_p2_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_37_device_ts
    ON location_history_2026_p2_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_37_geom
    ON location_history_2026_p2_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_38_device_ts
    ON location_history_2026_p2_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_38_geom
    ON location_history_2026_p2_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_39_device_ts
    ON location_history_2026_p2_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_39_geom
    ON location_history_2026_p2_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_40_device_ts
    ON location_history_2026_p2_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_40_geom
    ON location_history_2026_p2_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_41_device_ts
    ON location_history_2026_p2_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_41_geom
    ON location_history_2026_p2_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_42_device_ts
    ON location_history_2026_p2_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_42_geom
    ON location_history_2026_p2_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_43_device_ts
    ON location_history_2026_p2_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_43_geom
    ON location_history_2026_p2_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_44_device_ts
    ON location_history_2026_p2_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_44_geom
    ON location_history_2026_p2_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_45_device_ts
    ON location_history_2026_p2_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_45_geom
    ON location_history_2026_p2_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_46_device_ts
    ON location_history_2026_p2_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_46_geom
    ON location_history_2026_p2_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_47_device_ts
    ON location_history_2026_p2_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_47_geom
    ON location_history_2026_p2_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_48_device_ts
    ON location_history_2026_p2_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_48_geom
    ON location_history_2026_p2_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_49_device_ts
    ON location_history_2026_p2_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_49_geom
    ON location_history_2026_p2_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p2_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-003-01 00:00:00+00') TO ('2026-003-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_50_device_ts
    ON location_history_2026_p2_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p2_50_geom
    ON location_history_2026_p2_50 USING GIST (coordinates);

