import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const ForbiddenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-amber-500/10">
        🛡️
      </div>
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">403 - Access Restricted</h1>
      <p className="text-slate-400 max-w-md mb-8">
        Your assigned role does not have permission to access this administrative module. Security audit logs record unauthorized traversal attempts.
      </p>
      <div className="flex items-center space-x-3">
        <Button onClick={() => navigate('/home')}>Return to User Home</Button>
        <Button variant="secondary" onClick={() => navigate('/tracking')}>Live Tracking</Button>
      </div>
    </div>
  );
};
