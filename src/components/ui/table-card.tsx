import { Users, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableCardProps {
  number: number;
  isActive: boolean;
  currentTotal: number;
  orderCount: number;
  onClick?: () => void;
}

export function TableCard({ number, isActive, currentTotal, orderCount, onClick }: TableCardProps) {
  return (
    <div 
      className={cn(
        'card cursor-pointer transition-all duration-200',
        isActive 
          ? 'border-primary-500 bg-primary-500/5' 
          : 'hover:border-gray-600',
        onClick && 'hover:scale-105'
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary-400" />
          <span className="font-bold text-text-primary text-lg">Mesa {number}</span>
        </div>
        <div className={cn(
          'px-2 py-1 rounded-full text-xs font-medium',
          isActive 
            ? 'bg-success/20 text-success' 
            : 'bg-gray-800 text-text-muted'
        )}>
          {isActive ? 'Ativa' : 'Livre'}
        </div>
      </div>
      
      {isActive && (
        <>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-text-muted text-sm">Pedidos:</span>
              <span className="text-text-primary font-medium">{orderCount}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pt-4 border-t border-border">
            <DollarSign className="h-4 w-4 text-primary-400" />
            <span className="text-text-muted text-sm">Total:</span>
            <span className="text-lg font-bold text-primary-400 ml-auto">
              R$ {currentTotal.toFixed(2)}
            </span>
          </div>
        </>
      )}
      
      {!isActive && (
        <div className="text-center py-6">
          <p className="text-text-muted text-sm">Mesa disponível</p>
        </div>
      )}
    </div>
  );
}