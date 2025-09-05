import { Clock, CheckCircle, Package } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderCardProps {
  id: number;
  tableNumber: number;
  items: OrderItem[];
  observations: string;
  status: 'preparing' | 'ready' | 'delivered';
  total: number;
  timestamp: string;
}

const statusConfig = {
  preparing: { icon: Clock, color: 'text-warning', bg: 'bg-warning/10', label: 'Preparando' },
  ready: { icon: Package, color: 'text-primary-400', bg: 'bg-primary-500/10', label: 'Pronto' },
  delivered: { icon: CheckCircle, color: 'text-success', bg: 'bg-success/10', label: 'Entregue' },
};

export function OrderCard({ id, tableNumber, items, observations, status, total, timestamp }: OrderCardProps) {
  const statusInfo = statusConfig[status];
  const StatusIcon = statusInfo.icon;
  
  return (
    <div className="card hover:border-primary-500/30 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Mesa {tableNumber}
          </div>
          <span className="text-text-muted text-sm">#{id}</span>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusInfo.bg}`}>
          <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
          <span className={`text-sm font-medium ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-text-secondary">
              {item.quantity}x {item.name}
            </span>
            <span className="text-text-primary font-medium">
              R$ {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      
      {observations && (
        <div className="mb-4 p-3 bg-background rounded-lg border border-border">
          <p className="text-sm text-text-muted">
            <strong>Observações:</strong> {observations}
          </p>
        </div>
      )}
      
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <span className="text-text-muted text-sm">
          {new Date(timestamp).toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
        <span className="text-lg font-bold text-text-primary">
          R$ {total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}