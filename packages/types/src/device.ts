import { DeviceStatus, DeviceType } from './enums';
export interface Device {
  id: string; deviceId: string; name: string; type: DeviceType; status: DeviceStatus;
  ownerId?: string | null; ownerName?: string; apiKeyHash?: string; batteryLevel: number;
  latitude: number; longitude: number; speedKph?: number; headingDegrees?: number; accuracyMeters?: number;
  isSimulated: boolean; tags: string[]; lastSeenAt: string; registeredAt: string; updatedAt: string;
}
export interface DeviceLocation {
  id: string; deviceId: string; latitude: number; longitude: number; altitudeMeters?: number; accuracyMeters: number;
  speedKph: number; headingDegrees: number; batteryLevel: number; networkStatus: string; timestamp: string; source: 'GPS' | 'CELLULAR' | 'WIFI' | 'SIMULATION';
}
export interface LocationIngestDto {
  deviceId: string; latitude: number; longitude: number; altitudeMeters?: number; accuracyMeters: number; speedKph: number;
  headingDegrees: number; batteryLevel: number; networkStatus: string; timestamp: string; signature?: string;
}
export interface Geofence { id: string; name: string; type: 'CIRCLE' | 'POLYGON'; coordinates: number[][]; radiusMeters?: number; assignedDeviceIds: string[]; isActive: boolean; }
