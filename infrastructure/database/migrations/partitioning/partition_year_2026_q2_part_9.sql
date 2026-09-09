-- GeoNet Sentinel Enterprise High-Scale Partitioning Migration #9
-- Quarter: Q2, Sub-table Partition: 9

CREATE TABLE IF NOT EXISTS location_history_2026_p9_01 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_01_device_ts
    ON location_history_2026_p9_01 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_01_geom
    ON location_history_2026_p9_01 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_02 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_02_device_ts
    ON location_history_2026_p9_02 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_02_geom
    ON location_history_2026_p9_02 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_03 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_03_device_ts
    ON location_history_2026_p9_03 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_03_geom
    ON location_history_2026_p9_03 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_04 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_04_device_ts
    ON location_history_2026_p9_04 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_04_geom
    ON location_history_2026_p9_04 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_05 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_05_device_ts
    ON location_history_2026_p9_05 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_05_geom
    ON location_history_2026_p9_05 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_06 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_06_device_ts
    ON location_history_2026_p9_06 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_06_geom
    ON location_history_2026_p9_06 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_07 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_07_device_ts
    ON location_history_2026_p9_07 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_07_geom
    ON location_history_2026_p9_07 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_08 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_08_device_ts
    ON location_history_2026_p9_08 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_08_geom
    ON location_history_2026_p9_08 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_09 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_09_device_ts
    ON location_history_2026_p9_09 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_09_geom
    ON location_history_2026_p9_09 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_10 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_10_device_ts
    ON location_history_2026_p9_10 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_10_geom
    ON location_history_2026_p9_10 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_11 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_11_device_ts
    ON location_history_2026_p9_11 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_11_geom
    ON location_history_2026_p9_11 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_12 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_12_device_ts
    ON location_history_2026_p9_12 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_12_geom
    ON location_history_2026_p9_12 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_13 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_13_device_ts
    ON location_history_2026_p9_13 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_13_geom
    ON location_history_2026_p9_13 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_14 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_14_device_ts
    ON location_history_2026_p9_14 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_14_geom
    ON location_history_2026_p9_14 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_15 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_15_device_ts
    ON location_history_2026_p9_15 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_15_geom
    ON location_history_2026_p9_15 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_16 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_16_device_ts
    ON location_history_2026_p9_16 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_16_geom
    ON location_history_2026_p9_16 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_17 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_17_device_ts
    ON location_history_2026_p9_17 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_17_geom
    ON location_history_2026_p9_17 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_18 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_18_device_ts
    ON location_history_2026_p9_18 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_18_geom
    ON location_history_2026_p9_18 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_19 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_19_device_ts
    ON location_history_2026_p9_19 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_19_geom
    ON location_history_2026_p9_19 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_20 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_20_device_ts
    ON location_history_2026_p9_20 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_20_geom
    ON location_history_2026_p9_20 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_21 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_21_device_ts
    ON location_history_2026_p9_21 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_21_geom
    ON location_history_2026_p9_21 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_22 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_22_device_ts
    ON location_history_2026_p9_22 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_22_geom
    ON location_history_2026_p9_22 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_23 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_23_device_ts
    ON location_history_2026_p9_23 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_23_geom
    ON location_history_2026_p9_23 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_24 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_24_device_ts
    ON location_history_2026_p9_24 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_24_geom
    ON location_history_2026_p9_24 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_25 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_25_device_ts
    ON location_history_2026_p9_25 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_25_geom
    ON location_history_2026_p9_25 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_26 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_26_device_ts
    ON location_history_2026_p9_26 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_26_geom
    ON location_history_2026_p9_26 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_27 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_27_device_ts
    ON location_history_2026_p9_27 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_27_geom
    ON location_history_2026_p9_27 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_28 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_28_device_ts
    ON location_history_2026_p9_28 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_28_geom
    ON location_history_2026_p9_28 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_29 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_29_device_ts
    ON location_history_2026_p9_29 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_29_geom
    ON location_history_2026_p9_29 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_30 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_30_device_ts
    ON location_history_2026_p9_30 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_30_geom
    ON location_history_2026_p9_30 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_31 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_31_device_ts
    ON location_history_2026_p9_31 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_31_geom
    ON location_history_2026_p9_31 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_32 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_32_device_ts
    ON location_history_2026_p9_32 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_32_geom
    ON location_history_2026_p9_32 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_33 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_33_device_ts
    ON location_history_2026_p9_33 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_33_geom
    ON location_history_2026_p9_33 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_34 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_34_device_ts
    ON location_history_2026_p9_34 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_34_geom
    ON location_history_2026_p9_34 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_35 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_35_device_ts
    ON location_history_2026_p9_35 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_35_geom
    ON location_history_2026_p9_35 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_36 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_36_device_ts
    ON location_history_2026_p9_36 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_36_geom
    ON location_history_2026_p9_36 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_37 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_37_device_ts
    ON location_history_2026_p9_37 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_37_geom
    ON location_history_2026_p9_37 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_38 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_38_device_ts
    ON location_history_2026_p9_38 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_38_geom
    ON location_history_2026_p9_38 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_39 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_39_device_ts
    ON location_history_2026_p9_39 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_39_geom
    ON location_history_2026_p9_39 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_40 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_40_device_ts
    ON location_history_2026_p9_40 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_40_geom
    ON location_history_2026_p9_40 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_41 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_41_device_ts
    ON location_history_2026_p9_41 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_41_geom
    ON location_history_2026_p9_41 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_42 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_42_device_ts
    ON location_history_2026_p9_42 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_42_geom
    ON location_history_2026_p9_42 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_43 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_43_device_ts
    ON location_history_2026_p9_43 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_43_geom
    ON location_history_2026_p9_43 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_44 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_44_device_ts
    ON location_history_2026_p9_44 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_44_geom
    ON location_history_2026_p9_44 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_45 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_45_device_ts
    ON location_history_2026_p9_45 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_45_geom
    ON location_history_2026_p9_45 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_46 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_46_device_ts
    ON location_history_2026_p9_46 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_46_geom
    ON location_history_2026_p9_46 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_47 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_47_device_ts
    ON location_history_2026_p9_47 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_47_geom
    ON location_history_2026_p9_47 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_48 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_48_device_ts
    ON location_history_2026_p9_48 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_48_geom
    ON location_history_2026_p9_48 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_49 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_49_device_ts
    ON location_history_2026_p9_49 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_49_geom
    ON location_history_2026_p9_49 USING GIST (coordinates);

CREATE TABLE IF NOT EXISTS location_history_2026_p9_50 PARTITION OF location_history
    FOR VALUES FROM ('2026-010-01 00:00:00+00') TO ('2026-010-28 23:59:59+00');

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_50_device_ts
    ON location_history_2026_p9_50 (device_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_loc_hist_2026_p9_50_geom
    ON location_history_2026_p9_50 USING GIST (coordinates);

