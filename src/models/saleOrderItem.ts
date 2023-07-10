import {
  Table,
  Model,
  DataType,
  Column,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Product } from './product';
import { SaleOrder } from './saleOrder';

@Table({
  timestamps: false,
  tableName: 'saleOrderItem'
})
export class SaleOrderItem extends Model {
  @Column({ type: DataType.DECIMAL, allowNull: false })
  quantity!: number;
  @Column({ type: DataType.DECIMAL, allowNull: false })
  unitPrice!: number;
  @Column({ type: DataType.DECIMAL, allowNull: false })
  totalPrice!: number;

  @BelongsTo(() => Product, 'productId')
  product: Product;

  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId!: number;

  @BelongsTo(() => SaleOrder, 'saleOrderId')
  saleOrder: SaleOrder;

  @ForeignKey(() => SaleOrder)
  @Column(DataType.INTEGER)
  saleOrderId!: number;
}
