import { Table, Model, DataType, Column, HasMany } from 'sequelize-typescript';
import { SaleOrderItem } from './saleOrderItem';

@Table({
  timestamps: false,
  tableName: 'saleOrder'
})
export class SaleOrder extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  customer: string;
  @Column({ type: DataType.DATE, allowNull: false })
  date: Date;
  @Column({ type: DataType.STRING, allowNull: false })
  status: string;

  @HasMany(() => SaleOrderItem, 'saleOrderId')
  saleOrderItem: SaleOrderItem[];
}
