import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const initialDevices = [
  { id: '1', deviceId: 'DEV-GPS-001', name: 'Rapid Response Cruiser 01', type: 'FLEET_VEHICLE', status: 'MOVING', battery: 94, ip: '192.168.1.101' },
  { id: '2', deviceId: 'DEV-GPS-002', name: 'Logistics Hauler Alpha', type: 'FLEET_VEHICLE', status: 'MOVING', battery: 88, ip: '192.168.1.102' },
  { id: '3', deviceId: 'DEV-GPS-003', name: 'Inspection Drone UAV-X', type: 'DRONE_UAV', status: 'ONLINE', battery: 72, ip: '192.168.1.103' },
  { id: '4', deviceId: 'DEV-GPS-004', name: 'Perimeter Sensor Pod 04', type: 'IOT_SENSOR', status: 'ONLINE', battery: 99, ip: '192.168.1.104' }
];

export const DeviceManagement: React.FC = () => {
  const [devices, setDevices] = useState(initialDevices);
  const [search, setSearch] = useState('');

  const filtered = devices.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) || d.deviceId.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = () => {
    const name = prompt('Enter new device name:');
    if (!name) return;
    const newDev = { id: String(Date.now()), deviceId: `DEV-GPS-${Date.now().toString().slice(-3)}`, name, type: 'FLEET_VEHICLE', status: 'ONLINE', battery: 100, ip: '192.168.1.150' };
    setDevices([...devices, newDev]);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to decommission this device?')) {
      setDevices(devices.filter(d => d.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Device Inventory & Provisioning</h1>
          <p className="text-sm text-slate-400">Complete hardware lifecycle, credentials, and real-time status management</p>
        </div>
        <Button variant="primary" size="sm" onClick={handleAdd}>+ Register Device</Button>
      </div>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by device name or ID..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-72 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          />
          <span className="text-xs text-slate-400">{filtered.length} of {devices.length} devices</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/50 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Device ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Battery</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {filtered.map(d => (
                <tr key={d.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 font-mono text-indigo-400 font-semibold">{d.deviceId}</td>
                  <td className="p-3 font-medium text-slate-100">{d.name}</td>
                  <td className="p-3 text-slate-400">{d.type}</td>
                  <td className="p-3">
                    <Badge variant={d.status === 'MOVING' ? 'info' : 'success'}>{d.status}</Badge>
                  </td>
                  <td className="p-3 text-emerald-400 font-semibold">{d.battery}%</td>
                  <td className="p-3 text-right space-x-2">
                    <Button variant="secondary" size="sm" onClick={() => alert(`Edit ${d.name}`)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(d.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
