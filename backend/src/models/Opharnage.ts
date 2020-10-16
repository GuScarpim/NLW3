import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './images'

@Entity('orphanages') // associada a tabela 
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() //Coluna
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'] //cascade fazer algo automatico
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}