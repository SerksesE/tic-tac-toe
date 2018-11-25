import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard, Board, colors } from './logic'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('enum', {enum: colors})
  color: string

  @Column('json', {default: defaultBoard})
  board: Board
}
