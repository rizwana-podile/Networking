-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #7
-- Quarter: Q4, Sub-table Partition: 7

CREATE TABLE IF NOT EXISTS location_history_2026_p7_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_01_device_ts
    ON location_history_2026_p7_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_01_geom
    ON location_history_2026_p7_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_02_device_ts
    ON location_history_2026_p7_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_02_geom
    ON location_history_2026_p7_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_03_device_ts
    ON location_history_2026_p7_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_03_geom
    ON location_history_2026_p7_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_04_device_ts
    ON location_history_2026_p7_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_04_geom
    ON location_history_2026_p7_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_05_device_ts
    ON location_history_2026_p7_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_05_geom
    ON location_history_2026_p7_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_06_device_ts
    ON location_history_2026_p7_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_06_geom
    ON location_history_2026_p7_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_07_device_ts
    ON location_history_2026_p7_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_07_geom
    ON location_history_2026_p7_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_08_device_ts
    ON location_history_2026_p7_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_08_geom
    ON location_history_2026_p7_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_09_device_ts
    ON location_history_2026_p7_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_09_geom
    ON location_history_2026_p7_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_10_device_ts
    ON location_history_2026_p7_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_10_geom
    ON location_history_2026_p7_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_11_device_ts
    ON location_history_2026_p7_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_11_geom
    ON location_history_2026_p7_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_12_device_ts
    ON location_history_2026_p7_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_12_geom
    ON location_history_2026_p7_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_13_device_ts
    ON location_history_2026_p7_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_13_geom
    ON location_history_2026_p7_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_14_device_ts
    ON location_history_2026_p7_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_14_geom
    ON location_history_2026_p7_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_15_device_ts
    ON location_history_2026_p7_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_15_geom
    ON location_history_2026_p7_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_16_device_ts
    ON location_history_2026_p7_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_16_geom
    ON location_history_2026_p7_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_17_device_ts
    ON location_history_2026_p7_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_17_geom
    ON location_history_2026_p7_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_18_device_ts
    ON location_history_2026_p7_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_18_geom
    ON location_history_2026_p7_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_19_device_ts
    ON location_history_2026_p7_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_19_geom
    ON location_history_2026_p7_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_20_device_ts
    ON location_history_2026_p7_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_20_geom
    ON location_history_2026_p7_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_21_device_ts
    ON location_history_2026_p7_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_21_geom
    ON location_history_2026_p7_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_22_device_ts
    ON location_history_2026_p7_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_22_geom
    ON location_history_2026_p7_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_23_device_ts
    ON location_history_2026_p7_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_23_geom
    ON location_history_2026_p7_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_24_device_ts
    ON location_history_2026_p7_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_24_geom
    ON location_history_2026_p7_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_25_device_ts
    ON location_history_2026_p7_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_25_geom
    ON location_history_2026_p7_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_26_device_ts
    ON location_history_2026_p7_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_26_geom
    ON location_history_2026_p7_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_27_device_ts
    ON location_history_2026_p7_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_27_geom
    ON location_history_2026_p7_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_28_device_ts
    ON location_history_2026_p7_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_28_geom
    ON location_history_2026_p7_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_29_device_ts
    ON location_history_2026_p7_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_29_geom
    ON location_history_2026_p7_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_30_device_ts
    ON location_history_2026_p7_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_30_geom
    ON location_history_2026_p7_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_31_device_ts
    ON location_history_2026_p7_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_31_geom
    ON location_history_2026_p7_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_32_device_ts
    ON location_history_2026_p7_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_32_geom
    ON location_history_2026_p7_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_33_device_ts
    ON location_history_2026_p7_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_33_geom
    ON location_history_2026_p7_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_34_device_ts
    ON location_history_2026_p7_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_34_geom
    ON location_history_2026_p7_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_35_device_ts
    ON location_history_2026_p7_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_35_geom
    ON location_history_2026_p7_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_36_device_ts
    ON location_history_2026_p7_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_36_geom
    ON location_history_2026_p7_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_37_device_ts
    ON location_history_2026_p7_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_37_geom
    ON location_history_2026_p7_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_38_device_ts
    ON location_history_2026_p7_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_38_geom
    ON location_history_2026_p7_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_39_device_ts
    ON location_history_2026_p7_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_39_geom
    ON location_history_2026_p7_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_40_device_ts
    ON location_history_2026_p7_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_40_geom
    ON location_history_2026_p7_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_41_device_ts
    ON location_history_2026_p7_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_41_geom
    ON location_history_2026_p7_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_42_device_ts
    ON location_history_2026_p7_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_42_geom
    ON location_history_2026_p7_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_43_device_ts
    ON location_history_2026_p7_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_43_geom
    ON location_history_2026_p7_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_44_device_ts
    ON location_history_2026_p7_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_44_geom
    ON location_history_2026_p7_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_45_device_ts
    ON location_history_2026_p7_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_45_geom
    ON location_history_2026_p7_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_46_device_ts
    ON location_history_2026_p7_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_46_geom
    ON location_history_2026_p7_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_47_device_ts
    ON location_history_2026_p7_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_47_geom
    ON location_history_2026_p7_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_48_device_ts
    ON location_history_2026_p7_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_48_geom
    ON location_history_2026_p7_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_49_device_ts
    ON location_history_2026_p7_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_49_geom
    ON location_history_2026_p7_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p7_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-008-01 00:00:00+00') TO ('2026-008-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_50_device_ts
    ON location_history_2026_p7_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p7_50_geom
    ON location_history_2026_p7_50 USING GIST (coordinates);

