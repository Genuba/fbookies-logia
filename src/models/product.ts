import { Table, Model, DataType, Column } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'product'
})
export class Product extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  category!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  manufacturer!: string;
}
