import { AlertSeverity, AlertStatus, MetricType } from './enums';
export interface AlertRule {
  id: string; name: string; metricType: MetricType; targetType: 'NODE' | 'DEVICE' | 'SYSTEM'; targetId?: string | null;
  operator: 'GT' | 'GTE' | 'LT' | 'LTE' | 'EQ' | 'NEQ'; warningThreshold: number; criticalThreshold: number; durationSeconds: number;
  consecutiveBreachesRequired: number; recoveryDurationSeconds: number; severity: AlertSeverity; isEnabled: boolean;
}
export interface Alert {
  id: string; ruleId: string; ruleName: string; targetType: 'NODE' | 'DEVICE' | 'SYSTEM'; targetId: string; targetName: string;
  severity: AlertSeverity; status: AlertStatus; metricType: MetricType; currentValue: number; thresholdValue: number; message: string;
  acknowledgedByUserName?: string | null; acknowledgedAt?: string | null; resolvedByUserName?: string | null; resolvedAt?: string | null;
  createdAt: string; updatedAt: string;
}
export interface Notification { id: string; userId: string; title: string; body: string; severity: AlertSeverity; isRead: boolean; createdAt: string; }
