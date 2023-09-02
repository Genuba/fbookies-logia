import { Table, Model, DataType, Column } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "team",
})
export class Team extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  category!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  manufacturer!: string;
}
