import {
  Table,
  Model,
  DataType,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Team } from "./team";

@Table({
  timestamps: false,
  tableName: "fuckBookies",
})
export class FuckBookies extends Model {
  @Column({ type: DataType.DECIMAL, allowNull: false })
  quantity!: number;
  @Column({ type: DataType.DECIMAL, allowNull: false })
  unitPrice!: number;
  @Column({ type: DataType.DECIMAL, allowNull: false })
  totalPrice!: number;

  @BelongsTo(() => Team, "teamId")
  team: Team;

  @ForeignKey(() => Team)
  @Column(DataType.INTEGER)
  teamId!: number;
}
