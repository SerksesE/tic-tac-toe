import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { defaultBoard, Board, colors, colorGenerator } from './logic'

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('enum', {enum: colors})
  color: string = colorGenerator()

  @Column('json', {default: defaultBoard})
  board: Board
}
