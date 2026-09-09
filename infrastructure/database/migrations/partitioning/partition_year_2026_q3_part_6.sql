-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #6
-- Quarter: Q3, Sub-table Partition: 6

CREATE TABLE IF NOT EXISTS location_history_2026_p6_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_01_device_ts
    ON location_history_2026_p6_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_01_geom
    ON location_history_2026_p6_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_02_device_ts
    ON location_history_2026_p6_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_02_geom
    ON location_history_2026_p6_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_03_device_ts
    ON location_history_2026_p6_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_03_geom
    ON location_history_2026_p6_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_04_device_ts
    ON location_history_2026_p6_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_04_geom
    ON location_history_2026_p6_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_05_device_ts
    ON location_history_2026_p6_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_05_geom
    ON location_history_2026_p6_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_06_device_ts
    ON location_history_2026_p6_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_06_geom
    ON location_history_2026_p6_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_07_device_ts
    ON location_history_2026_p6_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_07_geom
    ON location_history_2026_p6_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_08_device_ts
    ON location_history_2026_p6_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_08_geom
    ON location_history_2026_p6_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_09_device_ts
    ON location_history_2026_p6_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_09_geom
    ON location_history_2026_p6_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_10_device_ts
    ON location_history_2026_p6_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_10_geom
    ON location_history_2026_p6_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_11_device_ts
    ON location_history_2026_p6_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_11_geom
    ON location_history_2026_p6_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_12_device_ts
    ON location_history_2026_p6_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_12_geom
    ON location_history_2026_p6_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_13_device_ts
    ON location_history_2026_p6_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_13_geom
    ON location_history_2026_p6_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_14_device_ts
    ON location_history_2026_p6_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_14_geom
    ON location_history_2026_p6_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_15_device_ts
    ON location_history_2026_p6_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_15_geom
    ON location_history_2026_p6_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_16_device_ts
    ON location_history_2026_p6_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_16_geom
    ON location_history_2026_p6_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_17_device_ts
    ON location_history_2026_p6_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_17_geom
    ON location_history_2026_p6_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_18_device_ts
    ON location_history_2026_p6_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_18_geom
    ON location_history_2026_p6_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_19_device_ts
    ON location_history_2026_p6_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_19_geom
    ON location_history_2026_p6_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_20_device_ts
    ON location_history_2026_p6_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_20_geom
    ON location_history_2026_p6_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_21_device_ts
    ON location_history_2026_p6_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_21_geom
    ON location_history_2026_p6_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_22_device_ts
    ON location_history_2026_p6_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_22_geom
    ON location_history_2026_p6_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_23_device_ts
    ON location_history_2026_p6_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_23_geom
    ON location_history_2026_p6_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_24_device_ts
    ON location_history_2026_p6_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_24_geom
    ON location_history_2026_p6_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_25_device_ts
    ON location_history_2026_p6_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_25_geom
    ON location_history_2026_p6_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_26_device_ts
    ON location_history_2026_p6_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_26_geom
    ON location_history_2026_p6_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_27_device_ts
    ON location_history_2026_p6_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_27_geom
    ON location_history_2026_p6_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_28_device_ts
    ON location_history_2026_p6_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_28_geom
    ON location_history_2026_p6_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_29_device_ts
    ON location_history_2026_p6_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_29_geom
    ON location_history_2026_p6_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_30_device_ts
    ON location_history_2026_p6_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_30_geom
    ON location_history_2026_p6_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_31_device_ts
    ON location_history_2026_p6_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_31_geom
    ON location_history_2026_p6_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_32_device_ts
    ON location_history_2026_p6_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_32_geom
    ON location_history_2026_p6_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_33_device_ts
    ON location_history_2026_p6_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_33_geom
    ON location_history_2026_p6_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_34_device_ts
    ON location_history_2026_p6_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_34_geom
    ON location_history_2026_p6_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_35_device_ts
    ON location_history_2026_p6_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_35_geom
    ON location_history_2026_p6_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_36_device_ts
    ON location_history_2026_p6_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_36_geom
    ON location_history_2026_p6_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_37_device_ts
    ON location_history_2026_p6_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_37_geom
    ON location_history_2026_p6_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_38_device_ts
    ON location_history_2026_p6_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_38_geom
    ON location_history_2026_p6_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_39_device_ts
    ON location_history_2026_p6_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_39_geom
    ON location_history_2026_p6_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_40_device_ts
    ON location_history_2026_p6_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_40_geom
    ON location_history_2026_p6_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_41_device_ts
    ON location_history_2026_p6_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_41_geom
    ON location_history_2026_p6_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_42_device_ts
    ON location_history_2026_p6_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_42_geom
    ON location_history_2026_p6_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_43_device_ts
    ON location_history_2026_p6_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_43_geom
    ON location_history_2026_p6_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_44_device_ts
    ON location_history_2026_p6_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_44_geom
    ON location_history_2026_p6_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_45_device_ts
    ON location_history_2026_p6_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_45_geom
    ON location_history_2026_p6_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_46_device_ts
    ON location_history_2026_p6_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_46_geom
    ON location_history_2026_p6_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_47_device_ts
    ON location_history_2026_p6_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_47_geom
    ON location_history_2026_p6_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_48_device_ts
    ON location_history_2026_p6_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_48_geom
    ON location_history_2026_p6_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_49_device_ts
    ON location_history_2026_p6_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_49_geom
    ON location_history_2026_p6_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p6_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-007-01 00:00:00+00') TO ('2026-007-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_50_device_ts
    ON location_history_2026_p6_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p6_50_geom
    ON location_history_2026_p6_50 USING GIST (coordinates);

